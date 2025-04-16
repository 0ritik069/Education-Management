import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

const EditAttendance = () => {
  const { id } = useParams(); 
  const [attendance, setAttendance] = useState({
    student: "",
    className: "",
    date: "",
    status: "Present",
  });

  const navigate = useNavigate();

  // Simulating fetching data based on attendance ID (will connect to API later)
  useEffect(() => {
    // Replace with actual API call to fetch data
    const fetchedAttendance = {
      student: "Ali Khan",
      className: "Maths",
      date: "2025-04-20",
      status: "Present",
    };

    setAttendance(fetchedAttendance);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate updating the attendance (later connect to API)
    console.log({ id, ...attendance });

    // Redirect back to the attendance list after submitting
    navigate("/attendance");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Edit Attendance</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="student">Student</label>
          <input
            type="text"
            id="student"
            className="form-control"
            value={attendance.student}
            onChange={(e) => setAttendance({ ...attendance, student: e.target.value })}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="className">Class</label>
          <input
            type="text"
            id="className"
            className="form-control"
            value={attendance.className}
            onChange={(e) => setAttendance({ ...attendance, className: e.target.value })}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={attendance.date}
            onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Status</label>
          <select
            className="form-control"
            value={attendance.status}
            onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Attendance
        </button>
      </form>
    </Layout>
  );
};

export default EditAttendance;
