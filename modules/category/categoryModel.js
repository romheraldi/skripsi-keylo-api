var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var categorySchema = new Schema({
	'name' : String,
	'deletedAt' : Date
});

module.exports = mongoose.model('category', categorySchema);
