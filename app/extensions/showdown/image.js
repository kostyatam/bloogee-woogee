'use strict';
var showdown = require('showdown');
var classes = require('classes')

module.exports = function(converter) {
return [
	{
		type: 'lang',
		filter: function (text, options, globals) {
			var inlineRegExp = /(>?<?)!\[(.*?)]\s?\([ \t]*()<?(\S*)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g;
			var index = 0;
			function writeImageTag (wholeMatch, aliases, altText, linkId, url, width, height, m5, title) {

			    altText = altText.replace(/"/g, '&quot;');
			    url = showdown.helper.escapeCharacters(url, '*_', false);
			    var result = '<img src="' + url + '" alt="' + altText + '"';

			    if (title) {
			      title = title.replace(/"/g, '&quot;');
			      title = showdown.helper.escapeCharacters(title, '*_', false);
			      result += ' title="' + title + '"';
			    }

			    if (width && height) {
			      width  = (width === '*') ? 'auto' : width;
			      height = (height === '*') ? 'auto' : height;

			      result += ' width="' + width + '"';
			      result += ' height="' + height + '"';
			    }

			    //extension for classes
			    result += ' class="img ';
			    result+= classes.aliasesToClasses(aliases, 'img');
			    result+= '"';

			    //add index id
			    result+= [' id="image-',index++,'"'].join(''); 

			    result += ' />';

			    return result;
			  }

			  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
			  text = text.replace(inlineRegExp, writeImageTag);

			  return text;
			}
	    }
  ];
}