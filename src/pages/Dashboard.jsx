import React from "react";
import schoolImg from "../assets/img/school.png"; 
import Layout from "../components/Layout";
const Dashboard = () => {
  return (
    <Layout>
    <div className="innerContent">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="LearnEfficient">
              <div className="box-body d-flex p-0">
                <div className="flex-grow-1 p-30 bg-img bg-none-md">
                  <div className="row">
                    <div className="col-12 col-xl-7">
                      <h1>Learn With Effectively With Us!</h1>
                      <p className="learnWith">Get 30% off every course on January.</p>
                      <div className="mt-45 d-md-flex align-items-center">
                        <div className="me-5">
                          <div className="d-flex align-items-center">
                            <div className="circle">
                              <i className="fa fa-graduation-cap" />
                            </div>
                            <div>
                              <h5 className="mb-0">Students</h5>
                              <p className="mb-0 text-white-70">75,000+</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className="circle">
                              <i className="fa fa-user" />
                            </div>
                            <div>
                              <h5 className="mb-0">Expert Mentors</h5>
                              <p className="mb-0 text-white-70">200+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-5">
                      <img src={schoolImg} alt="School" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4">
            <div className="haveKnow">
              <h3>Have More Knowledge to Share?</h3>
              <a href="course.html">
                <i className="fa fa-plus me-15" /> Create New Course
              </a>
              <div className="row">
                <div className="col-lg-6">
                  <div className="progressCard">
                    <p>Courses in Progress</p>
                    <h4>5</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="progressCard">
                    <p>Forum Discussion</p>
                    <h4>25</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards 1 */}
        <div className="row mt-4">
          {[
            { title: "Total Students", icon: "fa-users", value: "3280", note: "80% Increase in 20 Days" },
            { title: "New Students", icon: "fa-user", value: "280", note: "50% Increase in 25 Days" },
            { title: "Total Course", icon: "fa-graduation-cap", value: "28", note: "80% Increase in 20 Days" },
            { title: "Fees Collection", icon: "fa-dollar-sign", value: "25160$", note: "20% Increase in 20 Days" },
          ].map((card, i) => (
            <div className="col-lg-3" key={i}>
              <div className="cardDash">
                <div className="media">
                  <div>
                    <div className="cardIcon">
                      <i className={`fa-solid ${card.icon}`} />
                    </div>
                  </div>
                  <div className="media-body">
                    <p className="mb-1">{card.title}</p>
                    <h3>{card.value}</h3>
                    <div className="progress mb-2">
                      <div className="progress-bar progress-animated" style={{ width: "80%" }} />
                    </div>
                    <small>{card.note}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards 2 */}
        <div className="row mt-4">
          {[
            { title: "Parents' meeting", icon: "fa-handshake", value: "3280", note: "80% Increase in 20 Days" },
            { title: "Call register", icon: "fa-phone", value: "280", note: "50% Increase in 25 Days" },
            { title: "Sanction", icon: "fa-chart-pie", value: "28", note: "80% Increase in 20 Days" },
            { title: "Fees Collection", icon: "fa-dollar-sign", value: "25160$", note: "20% Increase in 20 Days" },
          ].map((card, i) => (
            <div className="col-lg-3" key={i}>
              <div className="cardDash">
                <div className="media">
                  <div>
                    <div className="cardIcon">
                      <i className={`fa-solid ${card.icon}`} />
                    </div>
                  </div>
                  <div className="media-body">
                    <p className="mb-1">{card.title}</p>
                    <h3>{card.value}</h3>
                    <div className="progress mb-2">
                      <div className="progress-bar progress-animated" style={{ width: "80%" }} />
                    </div>
                    <small>{card.note}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Dashboard;
