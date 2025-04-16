import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const AddExam = () => {
  const [examData, setExamData] = useState({
    name: "",
    date: "",
    status: "Scheduled",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, we would connect to the API to save the exam data.
    console.log("Exam Added:", examData);
    navigate("/exams");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Add Exam</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exam Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={examData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Exam Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={examData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            name="status"
            value={examData.status}
            onChange={handleChange}
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Exam
        </button>
      </form>
    </Layout>
  );
};

export default AddExam;
