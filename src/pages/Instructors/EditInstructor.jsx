import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";

const EditInstructor = () => {
  const { id } = useParams();
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
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://192.168.1.82:5000"; // You can change this to the correct URL if needed

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/teacher/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch instructor");

        // Format the joining date to 'YYYY-MM-DD' if necessary
        setFormData({
          ...data.teacher,
          joining_date: data.teacher.joining_date?.split("T")[0] || "",
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching instructor:", error);
        alert(error.message);
        setLoading(false);
      }
    };

    fetchInstructor();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/teacher/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update");

      alert("Instructor updated successfully");
      navigate("/instructors");
    } catch (error) {
      console.error("Error updating instructor:", error);
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this instructor?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${BASE_URL}/api/teacher/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");

      alert("Instructor deleted successfully");
      navigate("/instructors");
    } catch (error) {
      console.error("Error deleting instructor:", error);
      alert(error.message);
    }
  };

  // Show a loading state until the data is fetched
  if (loading) {
    return <Layout><p>Loading...</p></Layout>;
  }

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
            <label>Qualifications</label>
            <input
              type="text"
              name="qualifications"
              className="form-control"
              value={formData.qualifications}
              onChange={handleChange}
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
            />
          </div>

          <div className="form-group mb-3">
            <label>Experience (years)</label>
            <input
              type="number"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
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
            />
          </div>

          <div className="form-group mb-4">
            <label>Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Update Instructor
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete Instructor
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditInstructor;
