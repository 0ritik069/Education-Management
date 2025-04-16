import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const EditExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [examData, setExamData] = useState({
    title: "",
    subject: "",
    date: "",
    duration: "",
  });

  // Simulate fetching exam data
  useEffect(() => {
    // You'd replace this with a real fetch call
    const dummyExam = {
      title: "Midterm Exam",
      subject: "Mathematics",
      date: "2025-05-10",
      duration: "2 hours",
    };
    setExamData(dummyExam);
  }, [id]);

  const handleChange = (e) => {
    setExamData({
      ...examData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Exam Data:", examData);

    // Simulate update then redirect
    navigate("/exams");
  };

  return (
    <Layout>
      <div className="page-header mb-4 d-flex justify-content-between align-items-center">
        <h4 className="page-title">Edit Exam</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Exam Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={examData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            value={examData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={examData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Duration</label>
          <input
            type="text"
            className="form-control"
            name="duration"
            value={examData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Exam
        </button>
      </form>
    </Layout>
  );
};

export default EditExam;
