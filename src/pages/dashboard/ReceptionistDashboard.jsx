import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const ReceptionistDashboard = () => {
  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Welcome, Receptionist!</h4>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Link to="/students" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Manage Students</h4>
                        <p className="card-category">View and edit student information</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/fees" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Fee Management</h4>
                        <p className="card-category">Manage student fees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/library/books" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Library</h4>
                        <p className="card-category">Manage library books</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/communication/messages" className="card card-stats card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-stats">
                      <div className="numbers">
                        <h4 className="card-title">Messages</h4>
                        <p className="card-category">Communicate with staff and students</p>
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

export default ReceptionistDashboard;
