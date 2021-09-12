let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let Position = require('../position/positionModel');
let Division = require('../division/divisionModel');

let employeeSchema = new Schema({
	'fullName' : String,
	'sureName' : String,
	'email' : String,
	'password' : String,
	'division' : {
	 	type: Schema.Types.ObjectId,
	 	ref: Division
	},
	'position' : {
	 	type: Schema.Types.ObjectId,
	 	ref: Position
	},
	'deletedAt' : Date
});

module.exports = mongoose.model('employee', employeeSchema);
