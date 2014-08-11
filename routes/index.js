/*
 * GET home page.
 */
var Data = require('../models/Data');

exports.index = function(req, res) {
	res.render('index', {
		title : 'Notepad'
	});
};

exports.save = function(req, res) {
	var params = req.method === 'GET' ? req.query : req.body;
	console.log(req);
	var memono = params.memono ? params.memono : '';
	res.render('save', {
		title : 'Notepad',
		memoNo : memono
	});
};

exports.list = function(req, res) {
	res.render('list', {
		title : 'Notepad'
	});
};

exports.memo = function(req, res, err) {
	console.log('dddd');
	Data.Memo.find().select('title memo').exec(function(err, memos) {
		if (err) {
			console.err(err);
			throw err;
		}
		// console.log(memos);
		res.render('memo', {
			'obj' : memos,
			'title' : 'Notepad'
		});
	})
};

exports.insert = function(req, res) {
	Data.Memo({
		title : req.body.title,
		memo : req.body.memo,
		trnsmis_date : new Date()
	}).save();

	var params = req.method === 'GET' ? req.query : req.body;
	console.log(req);
	var memono = params.memono ? params.memono : '';
	res.render('save', {
		title : 'Notepad',
		memoNo : memono
	});
};