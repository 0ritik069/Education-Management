import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const ClassList = () => {
  const classes = [
    { id: 1, title: "Frontend Development", instructor: "John Doe", description: "HTML, CSS, JavaScript" },
    { id: 2, title: "Backend Development", instructor: "Jane Smith", description: "Node.js, Express, MySQL" },
  ];

  const handleDelete = (id) => {
    // Simulate class deletion (this will later be connected to an API)
    console.log(`Deleting class with ID: ${id}`);
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Classes</h4>
        <Link to="/classes/add" className="btn btn-primary">
          + Add Class
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td>{classItem.id}</td>
                <td>{classItem.title}</td>
                <td>{classItem.instructor}</td>
                <td>{classItem.description}</td>
                <td>
                  <Link to={`/classes/edit/${classItem.id}`} className="btn btn-sm btn-info me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(classItem.id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ClassList;
