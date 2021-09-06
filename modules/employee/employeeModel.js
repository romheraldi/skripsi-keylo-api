let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let employeeSchema = new Schema({
	'fullName' : String,
	'sureName' : String,
	'division' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Division'
	},
	'position' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Position'
	},
	'deletedAt' : Date
});

module.exports = mongoose.model('employee', employeeSchema);
