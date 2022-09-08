const mongoose = require("mongoose");

const TimeTableSchema = mongoose.Schema({
  t_id: String,
  time_id: String,
  day: String,
  month: Number,
  hour: Number,
});

module.exports = mongoose.model("TimeTable", TimeTableSchema);
