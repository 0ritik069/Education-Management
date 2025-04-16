import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

const EditFee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    student: "",
    amount: "",
    date: "",
    status: "Paid",
  });

  // Simulate fetching existing fee data
  useEffect(() => {
    // This will be replaced with actual API call later
    const existingFee = {
      student: "Ali Khan",
      amount: "5000",
      date: "2025-04-15",
      status: "Paid",
    };

    setFormData(existingFee);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Fee:", formData);
    alert("Fee updated successfully!");
    navigate("/fees");
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Edit Fee</h4>
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

        <button type="submit" className="btn btn-success">
          Update Fee
        </button>
      </form>
    </Layout>
  );
};

export default EditFee;
