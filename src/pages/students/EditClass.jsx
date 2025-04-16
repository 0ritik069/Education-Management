import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

const EditClass = () => {
  const { id } = useParams(); // Get class ID from route
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    instructor: "",
    description: "",
  });

  useEffect(() => {
    // Simulate fetching existing data for class with ID
    const existingClass = {
      title: "Frontend Development",
      instructor: "John Doe",
      description: "Learn HTML, CSS, and JavaScript basics.",
    };

    setForm(existingClass);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Class:", form);
    navigate("/classes");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Edit Class</h4>
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
            />
          </div>

          <button type="submit" className="btn btn-primary">Update Class</button>
        </form>
      </div>
    </Layout>
  );
};

export default EditClass;
