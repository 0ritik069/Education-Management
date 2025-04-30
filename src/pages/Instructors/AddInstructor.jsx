import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualifications: "",  
    subjects: "",        
    experience: "",     
    joining_date: "",    
    department: "",     
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://192.168.1.82:5000/api/teacher/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add teacher");
      }

      alert("Teacher added successfully!");
      navigate("/instructors");
    } catch (err) {
      console.error("Error adding instructor:", err.message);
      alert(err.message);
    }
  };

  return (
    <Layout>
      <div className="card p-4">
        <h4 className="mb-4">Add Instructor</h4>
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
            <label>Qualifications</label>
            <input
              type="text"
              name="qualifications"
              className="form-control"
              value={formData.qualifications}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Subjects</label>
            <input
              type="text"
              name="subjects"
              className="form-control"
              value={formData.subjects}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Joining Date</label>
            <input
              type="date"
              name="joining_date"
              className="form-control"
              value={formData.joining_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save Instructor
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddInstructor;
