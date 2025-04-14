// const Attendance=require('../models/attendanceModel');
import Attendance from "../models/attendanceModel.js";

const markAttendance=async(req,res)=>{
    try{
        const id= Attendance.markAttendance(req.body);
    res.status(201).json({message:"Attendence Marked Sucessfully",id})
    }
    catch(err){
        res.status(500).json({error:"Internal Server error in mark Attendance "});
    }
}

const getAttendanceByStudent=async(req,res)=>{
    try{
        const student_id=req.params;
        const records=Attendance.getAttendanceByStudent(student_id);
        res.json(records);
    }
    catch(err){
        res.status(500).json({error:"Failed to Get the Attendance by Student"});
    }
}

const getAttendanceByCourse= async(req,res)=>{
    try{
        const course_id=req.params;
        const records=Attendance.getAttendanceByCourse(course_id);
        res.json(records);
    }
    catch(err){
        res.status(500).json({error:"Failed to get the Attendance by course"});
    }
}

export {markAttendance,getAttendanceByStudent,getAttendanceByCourse};






































// const Attendance = require('../models/attendanceModel');

// const markAttendance = async (req, res) => {
//   try {
//     const id = await Attendance.markAttendance(req.body);
//     res.status(201).json({ message: 'Attendance marked', id });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to mark attendance' });
//   }
// };

// const getStudentAttendance = async (req, res) => {
//   try {
//     const { student_id } = req.params;
//     const records = await Attendance.getAttendanceByStudent(student_id);
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch student attendance' });
//   }
// };

// const getCourseAttendance = async (req, res) => {
//   try {
//     const { course_id } = req.params;
//     const records = await Attendance.getAttendanceByCourse(course_id);
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch course attendance' });
//   }
// };

// module.exports = {
//   markAttendance,
//   getStudentAttendance,
//   getCourseAttendance
// };
