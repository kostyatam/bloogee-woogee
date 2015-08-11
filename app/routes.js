var Backbone = require('backbone'),
	editorPage = require('./views/editorPage'),
	router;

router = Backbone.Router.extend({
	currentView: null,
	globalContainer: $('body'),
	routes: {
		'editor': 'editor',
		'*path': 'otherwise'
	},
	editor: function () {
		this.currentView && this.currenntView.remove();
		currentView = new editorPage;
		currentView.render(this.globalContainer);
	},
	otherwise: function () {
		currentViews = [];
		this.navigate('editor', {trigger: true})
	}
})

module.exports = router;
