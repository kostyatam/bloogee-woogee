var Backbone = require('backbone'),
	Model;

Model = Backbone.Model.extend({
	initialize: function (options) {

	},
	markdown: function (md) {	
		this.set('md', md);
	},
	result: function (html) {
		this.set('html', html);
	}
})

module.exports = new Model;