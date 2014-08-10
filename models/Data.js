var mongoose = require('mongoose');


	console.log('attempt to connect mongoDB(' + 'mongodb://192.168.1.5/notepad' +')');
	mongoose.connect('mongodb://192.168.1.5/notepad');

	var db = mongoose.connection;
	
	db.on('error', function(err) {
		console.log(err);
	});
	db.on('open', function() {
		console.log("connect mongodb!");
	});



exports.Memo = mongoose.model('Memo', mongoose.Schema(require('./Memo').MemoSchema), 'Memo');

