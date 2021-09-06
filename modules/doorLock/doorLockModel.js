var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var doorLockSchema = new Schema({
	'uniqueId' : String,
	'name' : String,
	'authenticator' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Employee'
	},
	'category' : {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	'deletedAt' : Date
});

module.exports = mongoose.model('doorLock', doorLockSchema);
