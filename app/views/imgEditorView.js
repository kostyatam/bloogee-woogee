var Backbone = require('backbone'),
	previewTemplate = require('../templates/preview.ejs');

View = Backbone.View.extend({
	tagName: 'img',

	className: 'img-editor',

	template: previewTemplate,

	initialize: function ($img) {
		this.src = $img.attr('src');
		this.classes = $img.attr('class');
		this.id = $img.attr('id');
		this.node = $img;
	},

	render: function () {
		var compiled = previewTemplate({src: src, classes: classes, id: id});
		this.node.replaceWith(compiled);
	}
})