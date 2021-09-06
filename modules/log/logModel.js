var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var logSchema = new Schema({
	'door' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'DoorLock'
	},
	'person' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Employee'
	}
});

module.exports = mongoose.model('log', logSchema);
