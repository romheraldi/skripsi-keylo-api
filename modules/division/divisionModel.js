let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let divisionSchema = new Schema({
	'name' : String,
	'deletedAt' : Date
});

module.exports = mongoose.model('division', divisionSchema);
