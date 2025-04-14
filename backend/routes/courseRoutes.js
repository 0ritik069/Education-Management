import express from 'express';
const router = express.Router();

import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/courseController.js'; 

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
