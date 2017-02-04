// app/models/nerd.js
// grab the mongose module
var mongose = require('mongoose');

// define our nerd model
// module.exports allows us to pass	this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});