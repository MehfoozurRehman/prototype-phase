const router = require("express").Router();
const Teacher = require("../models/Teacher");

// create a new teacher
router.post("/create", async (req, res) => {
  const newTeacher = new Teacher(req.body);
  try {
    const savedTeacher = await newTeacher.save();
    res.status(200).json(savedTeacher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a teacher
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a teacher
router.delete("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    try {
      await teacher.delete();
      res.status(200).json("Teacher has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a teacher
router.put("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    try {
      await teacher.updateOne({ $set: req.body });
      res.status(200).json("Teacher has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
