import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams(); // 🟢 ID from route
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // 🔄 Fetch course details by ID
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://192.168.1.82:5000/api/courses/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };

    fetchCourse();
  }, [id]);

  // 🖊️ Input change
  const handleChange = (e) => {
    const { nam, value } = e.target;
    setFormData((prev) => ({ ...prev, [nam]: value }));
  };

  // ✅ Update course
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/courses/${id}`, formData);
      alert("Course updated successfully!");
      navigate("/courses"); // ⏩ redirect to course list
    } catch (err) {
      console.error("Error updating course:", err);
      alert("Update failed.");
    }
  };

  return (
    <div className="page-inner">
      <div className="page-header">
        <h4 className="page-title">Edit Course</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Course name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Update Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
