import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const ExamList = () => {
  const [exams, setExams] = useState([
    {
      id: 1,
      title: "Midterm Exam",
      subject: "Mathematics",
      date: "2025-05-10",
      duration: "2 hours",
    },
    {
      id: 2,
      title: "Final Exam",
      subject: "Science",
      date: "2025-06-15",
      duration: "3 hours",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this exam?");
    if (confirmDelete) {
      setExams(exams.filter((exam) => exam.id !== id));
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Exams</h4>
        <Link to="/exams/add" className="btn btn-primary">+ Add Exam</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.title}</td>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>{exam.duration}</td>
                <td>
                  <Link
                    to={`/exams/edit/${exam.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(exam.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {exams.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No exams available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ExamList;
