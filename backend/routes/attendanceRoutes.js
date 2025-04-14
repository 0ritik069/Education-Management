import express from 'express';
const router = express.Router();

import {
  markAttendance,
  getAttendanceByStudent,
  getAttendanceByCourse
} from '../controllers/attendanceController.js'; // ✅ include `.js`

router.post('/', markAttendance);
router.get('/student/:student_id', getAttendanceByStudent);
router.get('/course/:course_id', getAttendanceByCourse);

export default router;
