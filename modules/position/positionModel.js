let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let positionSchema = new Schema({
	'name' : String,
	'deletedAt' : Date
});

module.exports = mongoose.model('position', positionSchema);
