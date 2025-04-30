import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Welcome, Instructor!</h4>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Link to="/instructor/my-classes" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Assigned Classes</h4>
                        <p className="card-category">View all your classes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/instructor/mark-attendance" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Mark Attendance</h4>
                        <p className="card-category">Take class attendance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/instructor/upload-grades" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Upload Grades</h4>
                        <p className="card-category">Submit student marks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/instructor/notifications" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Messages</h4>
                        <p className="card-category">Communicate with students/admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InstructorDashboard;
