const mongoose = require("mongoose");

const csvSchema = mongoose.Schema({
  info: {
    name: String,
    data: String,
    contentType: String,
  },
});

module.exports = mongoose.model("csv", csvSchema);
