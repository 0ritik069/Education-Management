import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState([
    { id: 1, student: "Ali Khan", className: "Maths", date: "2025-04-20", status: "Present" },
    { id: 2, student: "Sara Ali", className: "Science", date: "2025-04-21", status: "Absent" },
  ]);

  const handleDelete = (id) => {
    // Simulate deleting an attendance (later connect to API)
    setAttendanceList(attendanceList.filter((attendance) => attendance.id !== id));
    console.log(`Attendance with ID ${id} has been deleted.`);
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Attendance</h4>
        <Link to="/attendance/add" className="btn btn-primary">
          + Add Attendance
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((attendance) => (
              <tr key={attendance.id}>
                <td>{attendance.id}</td>
                <td>{attendance.student}</td>
                <td>{attendance.className}</td>
                <td>{attendance.date}</td>
                <td>{attendance.status}</td>
                <td>
                  <Link to={`/attendance/edit/${attendance.id}`} className="btn btn-sm btn-info me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(attendance.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AttendanceList;
