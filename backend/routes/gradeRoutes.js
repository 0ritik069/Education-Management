import express from 'express';
const router = express.Router();

import {
  addGrade,
  getStudentGrades,
  getCourseGrades
} from '../controllers/gradeController.js'; 

router.post('/', addGrade);
router.get('/student/:student_id', getStudentGrades);
router.get('/course/:course_id', getCourseGrades);

export default router;
