import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const InstructorList = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", subject: "Physics" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", subject: "Chemistry" },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this instructor?");
    if (confirmDelete) {
      setInstructors(instructors.filter((ins) => ins.id !== id));
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Instructors</h4>
        <Link to="/instructors/add" className="btn btn-primary">
          + Add Instructor
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((ins) => (
              <tr key={ins.id}>
                <td>{ins.id}</td>
                <td>{ins.name}</td>
                <td>{ins.email}</td>
                <td>{ins.subject}</td>
                <td>
                  <Link to={`/instructors/edit/${ins.id}`} className="btn btn-sm btn-info me-2">
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(ins.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {instructors.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">No instructors found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default InstructorList;
