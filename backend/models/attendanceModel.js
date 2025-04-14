// const pool = require('../config/db');
import pool from '../config/db.js'

const Attendance = {
  markAttendance: async ({ student_id, course_id, date, status }) => {
    const [result] = await pool.query(
      `INSERT INTO attendance (student_id, course_id, date, status) VALUES (?, ?, ?, ?)`,
      [student_id, course_id, date, status]
    );
    return result.insertId;
  },

  getAttendanceByStudent: async (student_id) => {
    const [rows] = await pool.query(
      `SELECT a.*, c.title AS course_title
       FROM attendance a
       JOIN courses c ON a.course_id = c.id
       WHERE a.student_id = ?`,
      [student_id]
    );
    return rows;
  },

  getAttendanceByCourse: async (course_id) => {
    const [rows] = await pool.query(
      `SELECT a.*, s.name AS student_name
       FROM attendance a
       JOIN students s ON a.student_id = s.id
       WHERE a.course_id = ?`,
      [course_id]
    );
    return rows;
  }
};

export default Attendance;
