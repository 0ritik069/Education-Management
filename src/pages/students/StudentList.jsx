import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const StudentList = () => {
  // Step 1: Move student data to state
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", email: "ali@example.com", course: "Maths" },
    { id: 2, name: "Sara Ali", email: "sara@example.com", course: "Science" },
  ]);

  // Step 2: Delete handler
  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    if (confirmed) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Students</h4>
        <Link to="/students/add" className="btn btn-primary">
          + Add Student
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <Link to={`/students/edit/${student.id}`} className="btn btn-sm btn-info me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default StudentList;
