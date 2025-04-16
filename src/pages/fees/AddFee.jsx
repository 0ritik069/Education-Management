import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const AddFee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    student: "",
    amount: "",
    date: "",
    status: "Paid",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Fee:", formData);
    alert("Fee added successfully!");
    navigate("/fees");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Add Fee</h4>
      </div>

      <form className="card p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            name="student"
            value={formData.student}
            onChange={handleChange}
            required
            placeholder="Enter student name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Fee
        </button>
      </form>
    </Layout>
  );
};

export default AddFee;
