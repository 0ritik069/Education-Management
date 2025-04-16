import React from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";

const ViewMessage = () => {
  const { id } = useParams();
  // In a real scenario, you'd fetch the message details by ID from the API.
  const message = {
    id: id,
    sender: "John Doe",
    subject: "Important Notice",
    message: "Please attend the meeting tomorrow at 10 AM.",
    date: "2025-04-16",
  };

  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">Message Details</h4>
      </div>

      <div>
        <p><strong>Sender:</strong> {message.sender}</p>
        <p><strong>Subject:</strong> {message.subject}</p>
        <p><strong>Date:</strong> {message.date}</p>
        <p><strong>Message:</strong> {message.message}</p>
      </div>
    </Layout>
  );
};

export default ViewMessage;
