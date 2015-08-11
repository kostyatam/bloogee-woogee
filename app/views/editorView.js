var Backbone = require('backbone'),
	model = require('../models/editorModel'),
	View;

View = Backbone.View.extend({
	tagName: 'textarea',
	className: 'editor__item entry-md',
	model: model,
	events: {
		'keyup': 'toHtml'
	},
	initialize: function (options) {
		this.listenTo(this.model,'change:html', function () {
			var html = this.model.get('html');
			this.$el.val(html);
		})
	},
	toHtml: function (e) {
		var textarea =  e.target;
		this.model.markdown(textarea.value);
	}
})

module.exports = View;
