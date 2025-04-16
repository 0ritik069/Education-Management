import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const MessageList = () => {
  const messages = [
    { id: 1, sender: "John Doe", subject: "Important Notice", date: "2025-04-16" },
    { id: 2, sender: "Jane Smith", subject: "Course Update", date: "2025-04-15" },
  ];

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Messages</h4>
        <Link to="/communication/compose" className="btn btn-primary">
          + Compose Message
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.sender}</td>
                <td>{message.subject}</td>
                <td>{message.date}</td>
                <td>
                  <Link to={`/communication/view/${message.id}`} className="btn btn-sm btn-info me-2">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default MessageList;
