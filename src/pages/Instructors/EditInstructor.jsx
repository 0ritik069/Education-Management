import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";

const EditInstructor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data for demonstration (replace with API later)
  const dummyData = {
    1: { name: "Dr. Ayesha", email: "ayesha@example.com", subject: "Physics" },
    2: { name: "Mr. Imran", email: "imran@example.com", subject: "History" },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  useEffect(() => {
    // Simulate fetching from backend
    const data = dummyData[id];
    if (data) {
      setFormData(data);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Instructor:", formData);
    // In real app: Send update request to backend here
    navigate("/instructors");
  };

  return (
    <Layout>
      <div className="card p-4">
        <h4 className="mb-4">Edit Instructor</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Instructor
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditInstructor;
