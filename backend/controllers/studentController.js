// const student = require('../models/studentModel');
import student from "../models/studentModel.js";



//get all users
const getAllStudents= async(req,res)=>{
    try{
        const students=await student.getAll();
        res.status(200).json(students);
    }
    catch(err){
        res.status(500).json({error:"Failed to fetch students"})
    }
}

//get student by id

const getStudentById = async (req, res) => {
    try {
        const singleStudent = await student.getById(req.params.id);
        if (!singleStudent) return res.status(400).json({ error: "Student Not Found" });
        res.status(200).json(singleStudent);
    } catch (err) {
        res.status(500).json({ error: "failed to fetch single student" });
    }
};


//create student
const createStudent = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // 👈 log here
        const id = await student.create(
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.profile_picture
        );
        res.status(201).json({ message: "Student Created", id });
    } catch (err) {
        console.error("Error creating student:", err); // 👈 log error
        res.status(500).json({ error: "Student Not created due to server error" });
    }
};


//update student

const updateStudent = async (req, res) => {
    try {
        console.log('Updating Student ID:', req.params.id);
        console.log('Update Data:', req.body);

        const updated = await student.update(req.params.id, req.body);

        if (!updated) {
            return res.status(400).json({ error: "Student Not Found" });
        }

        res.status(200).json({ message: "Student Updated Successfully" });

    } catch (err) {
        console.error("Update Error:", err); // 👈 see real error here
        res.status(500).json({ error: "Student Not update due to server error" });
    }
};


//delete student
const deleteStudent=async(req,res)=>{
    try{
        const deleteStudent=await student.delete(req.params.id);
        if(!deleteStudent) return res.status(500).json({message:"Student not found"});
        res.status(200).json({message:"Student Deleted Sucessfully"});
    }
    catch(err){
        res.status(500).json({error:"Student not delted Due to server error"});
    }
}

export {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

