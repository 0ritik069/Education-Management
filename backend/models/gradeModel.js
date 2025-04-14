// const pool = require('../config/db');
import pool from '../config/db.js'

const Grade = {
  addGrade: async ({ student_id, course_id, test_name, score, grade }) => {
    const [result] = await pool.query(
      `INSERT INTO grades (student_id, course_id, test_name, score, grade)
       VALUES (?, ?, ?, ?, ?)`,
      [student_id, course_id, test_name, score, grade]
    );
    return result.insertId;
  },

  getGradesByStudent: async (student_id) => {
    const [rows] = await pool.query(
      `SELECT g.*, c.title AS course_title
       FROM grades g
       JOIN courses c ON g.course_id = c.id
       WHERE g.student_id = ?`,
      [student_id]
    );
    return rows;
  },

  getGradesByCourse: async (course_id) => {
    const [rows] = await pool.query(
      `SELECT g.*, s.name AS student_name
       FROM grades g
       JOIN students s ON g.student_id = s.id
       WHERE g.course_id = ?`,
      [course_id]
    );
    return rows;
  }
};

export default Grade;
