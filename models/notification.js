const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationIPN = new Schema({
  topic: String,
  id: String,
  body: String,
  parms: String,
});

module.exports = mongoose.model("NotificationIPN", NotificationIPN);
