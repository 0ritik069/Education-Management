import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const AddAttendance = () => {
  const [student, setStudent] = useState("");
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate adding the attendance (later connect to API)
    console.log({ student, className, date, status });

    // Redirect back to the attendance list after submitting
    navigate("/attendance");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Add Attendance</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="student">Student</label>
          <input
            type="text"
            id="student"
            className="form-control"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="className">Class</label>
          <input
            type="text"
            id="className"
            className="form-control"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Attendance
        </button>
      </form>
    </Layout>
  );
};

export default AddAttendance;
