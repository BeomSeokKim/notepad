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
	res.render('save', {
		title : 'Save'
	});
};


exports.list = function(req, res) {
	res.render('list', {
		title : 'List'
	});
};


exports.memo = function(req,res,err){   
    Data.Memo.find().select('title memo').exec(function(err,memos){
        if(err){
            console.err(err);
            throw err;
        }
        //console.log(memos);
        res.send(memos);
})};


exports.insert = function(req, res) {
	Data.Memo({
		title : req.body.title,
		memo : req.body.memo
	}).save();
	res.render('save', {
		title : 'Save'
	});
};