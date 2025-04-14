// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
// const initTables = require('./migrations/initTables');
import initTables from './migrations/initTables.js';
// require('dotenv').config();
import dotenv from 'dotenv';
// const studentRoutes=require('./routes/studentRoutes');
import studentRoutes from './routes/studentRoutes.js';

// const courseRoutes=require('./routes/courseRoutes');
import courseRoutes from './routes/courseRoutes.js';
// const attendanceRoutes=require('./routes/attendanceRoutes');
import attendanceRoutes from './routes/attendanceRoutes.js'
// const gradeRoutes=require('./routes/gradeRoutes');
import gradeRoutes from './routes/gradeRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/students',studentRoutes);
app.use('/api/courses',courseRoutes);
app.use('/api/attendance',attendanceRoutes);
app.use('/api/grades',gradeRoutes);


// Test Route
app.get('/', (req, res) => {
  res.send('Education Management System API');
});

// Initialize Tables on Start
initTables();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
