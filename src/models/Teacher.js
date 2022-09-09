const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  t_id: String,
  working_days: Array,
});

module.exports = mongoose.model("Teacher", teacherSchema);
