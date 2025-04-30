import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch instructors on mount
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://192.168.1.82:5000/api/teacher/find/all", {
          method: "GET",  
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response status:", res.status);  

        if (!res.ok) {
          throw new Error("Failed to fetch instructors");
        }

        const data = await res.json();
        console.log("Fetched instructors:", data); 
        setInstructors(data.Teachers);
      } catch (err) {
        console.error("Error fetching instructors:", err.message);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this instructor?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:5000/api/teacher/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete instructor");
      }

      setInstructors(instructors.filter((ins) => ins.id !== id));
    } catch (err) {
      console.error("Error deleting instructor:", err.message);
      alert(err.message);
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Instructors</h4>
        <Link to="/instructors/add" className="btn btn-primary">
          + Add Instructor
        </Link>
      </div>

      <div className="table-responsive">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.length > 0 ? (
                instructors.map((ins) => (
                  <tr key={ins.id}>
                    <td>{ins.id}</td>
                    <td>{ins.name}</td>
                    <td>{ins.email}</td>
                    <td>{ins.subjects || "-"}</td>
                    <td>
                      <Link to={`/instructors/edit/${ins.id}`} className="btn btn-sm btn-info me-2">
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(ins.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No instructors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default InstructorList;
