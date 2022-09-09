const mongoose = require("mongoose");

const TimeTableSchema = mongoose.Schema({
  t_id: String,
  day: Array,
  month: Number,
  hour: Number,
});

module.exports = mongoose.model("TimeTable", TimeTableSchema);
