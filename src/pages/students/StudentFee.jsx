import React, { useState } from "react";
import Layout from "../../components/Layout";

const feeHistoryData = [
  { date: "2025-03-01", amount: 1500, status: "Paid" },
  { date: "2025-02-01", amount: 1500, status: "Paid" },
  { date: "2025-01-01", amount: 1500, status: "Pending" },
];

const StudentFee = () => {
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const totalFee = feeHistoryData.reduce((acc, curr) => acc + curr.amount, 0);
  const unpaidFee = feeHistoryData.filter((fee) => fee.status === "Pending").length;

  const handlePayFee = () => {
    setPaymentStatus("Paid");
    alert("Payment Successful!");
  };

  return (
    <Layout>
      <div className="innerContent">
        <div className="container">
          <h2 className="mb-4">Fee Payment</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="cardDash text-center">
                <i className="fa-solid fa-wallet cardIcon" />
                <h5>Total Fee</h5>
                <h3>₹{totalFee}</h3>
              </div>
            </div>

            <div className="col-md-6">
              <div className="cardDash text-center">
                <i className="fa-solid fa-credit-card cardIcon" />
                <h5>Status</h5>
                <h3>{paymentStatus}</h3>
                <button
                  className={`btn ${paymentStatus === "Paid" ? "btn-success" : "btn-warning"}`}
                  onClick={handlePayFee}
                  disabled={paymentStatus === "Paid"}
                >
                  {paymentStatus === "Paid" ? "Paid" : "Pay Now"}
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="card p-3">
                <h5 className="mb-3">Fee History</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeHistoryData.map((fee, index) => (
                      <tr key={index}>
                        <td>{fee.date}</td>
                        <td>₹{fee.amount}</td>
                        <td>
                          <span
                            className={`badge ${
                              fee.status === "Paid" ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {fee.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default StudentFee;
