var Backbone = require('backbone'),
	editorView = require('./editorView'),
	previewView =  require('./previewView');

View = Backbone.View.extend({
	className: 'editor',
	views: [],
	render: function (container) {
		var editor = new editorView(),
			preview = new previewView();

		this.views.push(editor, preview);

		this.$el
			.append(editor.$el)
			.append(preview.$el);

		this.views.map(function (view) {
			view.render();
		});
		container.html(this.$el);
	},
	remove: function () {
		this.views.map(function (view) {
			view.remove();
		})
		Backbone.View.remove.apply(this);
	}
})

module.exports = View;