const router = require("express").Router();
const TimeTable = require("../models/TimeTable");

// create a new timetable
router.post("/create", async (req, res) => {
  const newTimeTable = new TimeTable(req.body);
  try {
    const savedTimeTable = await newTimeTable.save();
    res.status(200).json(savedTimeTable);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a timetable
router.get("/:id", async (req, res) => {
  try {
    const timetable = await TimeTable.findById(req.params.id);
    res.status(200).json(timetable);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all timetables
router.get("/", async (req, res) => {
  try {
    const timetables = await TimeTable.find();
    res.status(200).json(timetables);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a timetable
router.delete("/:id", async (req, res) => {
  try {
    const timetable = await TimeTable.findById(req.params.id);
    try {
      await timetable.delete();
      res.status(200).json("TimeTable has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a timetable
router.put("/:id", async (req, res) => {
  try {
    const timetable = await TimeTable.findById(req.params.id);
    try {
      await timetable.updateOne({ $set: req.body });
      res.status(200).json("TimeTable has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
