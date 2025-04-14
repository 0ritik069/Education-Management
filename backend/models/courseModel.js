// const pool = require('../config/db');
import pool from '../config/db.js'

const Course = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM courses');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ title, description }) => {
    const [result] = await pool.query(
      'INSERT INTO courses (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result.insertId;
  },

  update: async (id, { title, description }) => {
    const [result] = await pool.query(
      'UPDATE courses SET title = ?, description = ? WHERE id = ?',
      [title, description, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM courses WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

export default Course;
