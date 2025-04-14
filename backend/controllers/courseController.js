// const Course = require('../models/courseModel');
import Course from '../models/courseModel.js';

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.getAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.getById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

const createCourse = async (req, res) => {
  try {
    const id = await Course.create(req.body);
    res.status(201).json({ message: 'Course created', id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updated = await Course.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update course' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

export {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
