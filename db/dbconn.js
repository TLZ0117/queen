const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
module.exports = mongoose.createConnection("localhost","db110");