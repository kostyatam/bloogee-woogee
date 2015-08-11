var Backbone = require('backbone'),
	Router = require('./routes'),
	router;
require('./styles/style.scss');

router = new Router;
Backbone.history.start()


