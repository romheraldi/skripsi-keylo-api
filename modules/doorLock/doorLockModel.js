let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let Employee = require('../employee/employeeModel');
let Category = require('../category/categoryModel');

let doorLockSchema = new Schema({
	'uniqueId' : String,
	'name' : String,
	'authenticator' : {
	 	type: Schema.Types.ObjectId,
	 	ref: Employee
	},
	'category' : {
		type: Schema.Types.ObjectId,
		ref: Category
	},
	'deletedAt' : Date
});

module.exports = mongoose.model('doorLock', doorLockSchema);
