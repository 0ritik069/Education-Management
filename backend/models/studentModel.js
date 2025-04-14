// const pool=require('../config/db');
import pool from "../config/db.js";
const student={
    getAll: async()=>{
        const [rows]=await pool.query('Select * from students');
        return rows;
    },

    getById: async(id)=>{
        const [rows]=await pool.query('Select * from students where id=?',[id]);
        return rows[0];
    },

    create:async(name,email,phone,profile_picture)=>{
        const[result]=await pool.query('Insert into students (name,email,phone,profile_picture) Values(?,?,?,?)',[name,email,phone,profile_picture]);
        return result.insertId;
    },

    update: async (id, { name, email, phone, profile_picture }) => {
        const [result] = await pool.query(
            'UPDATE students SET name = ?, email = ?, phone = ?, profile_picture = ? WHERE id = ?',
            [name, email, phone, profile_picture, id]
        );
        return result.affectedRows;
    },
    

    delete:async(id)=>{
        const[result]=await pool.query('Delete from students where id=?',[id]);
        return result.affectedRows;
    },
};

export default student;





















