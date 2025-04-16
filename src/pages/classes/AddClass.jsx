import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const [form, setForm] = useState({
    title: "",
    instructor: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Class Added:", form);

    // Redirect to class list
    navigate("/classes");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Add Class / Course</h4>
      </div>

      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Class Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter class title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Instructor</label>
            <input
              type="text"
              className="form-control"
              name="instructor"
              value={form.instructor}
              onChange={handleChange}
              placeholder="Enter instructor name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter class description"
            />
          </div>

          <button type="submit" className="btn btn-success">Add Class</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddClass;
