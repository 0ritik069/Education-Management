import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy pre-filled data (simulate fetching from DB)
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    // Simulate fetching student data using ID
    const dummyData = {
      1: { name: "Ali Khan", email: "ali@example.com", course: "Maths" },
      2: { name: "Sara Ali", email: "sara@example.com", course: "Science" },
    };

    if (dummyData[id]) {
      setStudent(dummyData[id]);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate updating student
    console.log("Updated student:", student);

    // Redirect to student list
    navigate("/students");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Edit Student</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            name="course"
            value={student.course}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Update Student
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default EditStudent;
