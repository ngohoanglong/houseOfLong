let request = require('request');
let corona = require('./corona');
module.exports = function(app) {
	app.use('/api', function(req, res) {
		res.set(
			'Content-Type',
			'application/json'
		);
		corona().then(data =>
			res.send(data)
		);
	});
};
