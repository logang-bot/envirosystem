const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  filename: String,
  path: String,
  relativePath: String,
  timestamp: { type: Date, default: Date.now },
  fileSize: String,
  changeDate: [
    {
      date: Date,
      author: String,
    },
  ],
});

module.exports = mongoose.model("file", fileSchema);
