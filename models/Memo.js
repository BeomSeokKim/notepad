var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

//mongoDB schema
exports.MemoSchema = {
	title: String,
	memo: String,
	trnsmis_date : Date
};