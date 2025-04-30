import React from "react";
import Layout from "../../components/Layout";

const notifications = [
  {
    id: 1,
    title: "Upcoming Staff Meeting",
    message: "All instructors must attend the meeting on Friday at 10 AM in Room 202.",
    date: "April 16, 2025",
  },
  {
    id: 2,
    title: "Exam Schedule Uploaded",
    message: "Mid-term exam schedule has been uploaded. Please check the exams section.",
    date: "April 15, 2025",
  },
  {
    id: 3,
    title: "Classroom Maintenance",
    message: "Classroom 4B will be under maintenance next week. Adjust your schedule accordingly.",
    date: "April 14, 2025",
  },
];

const InstructorNotifications = () => {
  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Notifications</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              {notifications.map((note) => (
                <div className="card card-pricing card-pricing-focus mb-3" key={note.id}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold text-primary m-0">{note.title}</h5>
                      <span className="text-muted small">{note.date}</span>
                    </div>
                    <p className="m-0">{note.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InstructorNotifications;
