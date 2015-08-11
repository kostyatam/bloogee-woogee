var Backbone = require('backbone'),
	model = require('../models/editorModel'),
	showdown = require('showdown'),
	imageExt = require('../extensions/showdown/image'),
	toMarkdown = require('to-markdown'),
	imageExtToM = require('../extensions/to-markdown/image'),
	converter = new showdown.Converter({extensions: [imageExt]}),
	previewTemplate =  require('../templates/preview.ejs'),
	classes = require('classes'),
	View;

View = Backbone.View.extend({
	className: 'editor__item preview',
	model: model,
	initialize: function (options) {
		var model = this.model,
			$savedHtml;
		this.$el.on('click', '.js-add', function () {
			var $this = $(this);
			$this.parent().removeClass('img-editor_empty');
			$this.siblings('img').attr('src', 'http://img2.fotoalbum.virgilio.it/v/www1-3/176/176513/304872/IMG_0880-vi.jpg');
			console.log('.js-add');
		});
		this.$el.on('click', '.js-ok', function () {
			var $this = $(this),
				src = $this.siblings('img').attr('src'),
				id = '#' + $this.parent().attr('id');
			$savedHtml.find(id).attr('src', src);
			var markdown = toMarkdown($savedHtml.html(), {converters: [imageExtToM]})
			model.result(markdown);
			console.log('.js-ok');
		});
		this.listenTo(this.model,'change:md', function () {
			var md = this.model.get('md'),
				$html = $(converter.makeHtml(md)),
				$previewed = $html.clone(),
				$imgs =  $previewed.find('img');
			var date = new Date;
			$imgs.each(function () {
				var $this = $(this),
					src = $this.attr('src'),
					className = $this.attr('class'),
					id = $this.attr('id'),
					extensions =  classes.getAliasClassObj('img'),
					compiled = previewTemplate({src: src, className: className, id: id, extensions: extensions});
				$this.replaceWith(compiled);
			});
			this.render($previewed);
			$savedHtml = $html;
			date -= new Date;
			console.log(-date/1000 + 's ', $imgs.length);
		}, this)
	},
	render: function (result) {
		var $el = this.$el;
		$el.html(result)
	}
})

module.exports = View;
