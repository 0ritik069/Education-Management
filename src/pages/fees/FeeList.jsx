import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const FeeList = () => {
  const [fees, setFees] = useState([
    {
      id: 1,
      student: "Ali Khan",
      amount: 5000,
      date: "2025-04-01",
      status: "Paid",
    },
    {
      id: 2,
      student: "Sara Ali",
      amount: 6000,
      date: "2025-04-05",
      status: "Pending",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this fee record?");
    if (confirmDelete) {
      setFees(fees.filter((fee) => fee.id !== id));
    }
  };

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Fees & Payments</h4>
        <Link to="/fees/add" className="btn btn-primary">
          + Add Fee
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td>{fee.id}</td>
                <td>{fee.student}</td>
                <td>₹{fee.amount}</td>
                <td>{fee.date}</td>
                <td>
                  <span
                    className={`badge ${
                      fee.status === "Paid" ? "bg-success" : "bg-warning text-dark"
                    }`}
                  >
                    {fee.status}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/fees/edit/${fee.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(fee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {fees.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No fee records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default FeeList;
