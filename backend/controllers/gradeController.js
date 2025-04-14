// const Grade = require('../models/gradeModel');
import Grade from "../models/gradeModel.js";

const addGrade = async (req, res) => {
  try {
    const id = await Grade.addGrade(req.body);
    res.status(201).json({ message: 'Grade added', id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add grade' });
  }
};

const getStudentGrades = async (req, res) => {
  try {
    const { student_id } = req.params;
    const grades = await Grade.getGradesByStudent(student_id);
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student grades' });
  }
};

const getCourseGrades = async (req, res) => {
  try {
    const { course_id } = req.params;
    const grades = await Grade.getGradesByCourse(course_id);
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course grades' });
  }
};

export {
  addGrade,
  getStudentGrades,
  getCourseGrades
};
