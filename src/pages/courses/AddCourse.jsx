import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure the endpoint URL matches the backend URL for adding a course
      const res = await axios.post("http://192.168.1.82:5000/api/course/add", formData);
      alert("Course added successfully!");
      // Optionally clear form
      setFormData({ name: "", description: "" });
      // Redirect to course list or another page if needed
       navigate("/courses"); // Uncomment if you want to redirect after adding
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Layout>
    <div className="page-inner">
      <div className="page-header">
        <h4 className="page-title">Add New Course</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter course name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter course description"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Add Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AddCourse;
