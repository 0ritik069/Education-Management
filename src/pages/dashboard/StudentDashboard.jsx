import React from "react";
import Layout from "../../components/Layout";
// import studentImg from "../../assets/img/student.png";

const StudentDashboard = () => {
  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Welcome,Student 👋</h4>
          </div>

          {/* Profile & Stats */}
          <div className="row">
            <div className="col-md-4">
              <div className="card card-profile text-center">
                {/* <img src={studentImg} className="card-img-top rounded-circle mx-auto mt-3" alt="student" width="100" /> */}
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Welcome Ritik</h5>
                  <p className="text-muted mb-0">Class: 10th A</p>
                  <p className="text-muted">Roll No: 2024-0123</p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card card-stats card-round text-center">
                    <div className="card-body">
                      <i className="fas fa-book-open cardIcon"></i>
                      <h5 className="card-title">Enrolled Courses</h5>
                      <h3 className="fw-bold">5</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-stats card-round text-center">
                    <div className="card-body">
                      <i className="fas fa-calendar-days cardIcon"></i>
                      <h5 className="card-title">Upcoming Classes</h5>
                      <h3 className="fw-bold">3</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-6">
                  <div className="card card-stats card-round text-center">
                    <div className="card-body">
                      <i className="fas fa-file-invoice-dollar cardIcon"></i>
                      <h5 className="card-title">Fee Status</h5>
                      <h3 className="fw-bold text-success">Paid</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-stats card-round text-center">
                    <div className="card-body">
                      <i className="fas fa-chart-line cardIcon"></i>
                      <h5 className="card-title">Progress</h5>
                      <h3 className="fw-bold">78%</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Today's Attendance</h5>
                  <p className="text-success fw-bold fs-4">✔ Present</p>
                  <p className="text-muted">Marked at 09:05 AM</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Overall Attendance</h5>
                  <p className="fw-bold fs-4">89%</p>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <p className="text-muted mt-2">Based on last 6 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grades & Performance */}
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Latest Grades</h5>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Test</th>
                          <th>Score</th>
                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mathematics</td>
                          <td>Midterm</td>
                          <td>88/100</td>
                          <td>B+</td>
                        </tr>
                        <tr>
                          <td>Science</td>
                          <td>Quiz 3</td>
                          <td>92/100</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>Assignment</td>
                          <td>85/100</td>
                          <td>B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title mb-3">Quick Actions</h5>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn btn-primary">
                      <i className="fa fa-file-download me-2"></i>Download Fee Receipt
                    </button>
                    <button className="btn btn-success">
                      <i className="fa fa-book me-2"></i>View Timetable
                    </button>
                    <button className="btn btn-warning text-white">
                      <i className="fa fa-envelope me-2"></i>Contact Instructor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
