import React from "react";
import profile from "../assets/img/profile.jpg";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom container-fluid"
      style={{
        position: "fixed",
        top: 0,

        right: 0,

        zIndex: 1030,
        backgroundColor: "#ffffff",
        height: "70px",
        padding: "10px 20px",
        width: "calc(100% - 50px)", marginLeft: "75px"
      }}
    >
      <div className="container-fluid">
        {/* Search Bar (Desktop) */}
        <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
          <div className="input-group">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-search pe-1">
                <i className="fa fa-search search-icon" />
              </button>
            </div>
            <input type="text" placeholder="Search ..." className="form-control" />
          </div>
        </nav>

        {/* Navbar Icons */}
        <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
          {/* Search icon for mobile */}
          <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <i className="fa fa-search" />
            </a>
            <ul className="dropdown-menu dropdown-search animated fadeIn">
              <form className="navbar-left navbar-form nav-search">
                <div className="input-group">
                  <input type="text" placeholder="Search ..." className="form-control" />
                </div>
              </form>
            </ul>
          </li>

          {/* Messages */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" id="messageDropdown" data-bs-toggle="dropdown" href="#">
              <i className="fa fa-envelope" />
            </a>
            <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages <a href="#" className="small">Mark all as read</a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    {["jm_denis", "chadengle", "mlane", "talha"].map((img, i) => (
                      <a href="#" key={i}>
                        <div className="notif-img">
                          <img src={`/assets/img/${img}.jpg`} alt="Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">User</span>
                          <span className="block">Message preview...</span>
                          <span className="time">Just now</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="#">
                  See all messages <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </li>

          {/* Notifications */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" id="notifDropdown" data-bs-toggle="dropdown" href="#">
              <i className="fa fa-bell" />
              <span className="notification">4</span>
            </a>
            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
              <li>
                <div className="dropdown-title">You have 4 new notifications</div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    {[...Array(4)].map((_, i) => (
                      <a href="#" key={i}>
                        <div className="notif-icon notif-primary">
                          <i className="fa fa-user-plus" />
                        </div>
                        <div className="notif-content">
                          <span className="block">Notification text</span>
                          <span className="time">Few moments ago</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="#">
                  See all notifications <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </li>

          {/* Quick Actions */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link" data-bs-toggle="dropdown" href="#">
              <i className="fas fa-layer-group" />
            </a>
            <div className="dropdown-menu quick-actions animated fadeIn">
              <div className="quick-actions-header">
                <span className="title mb-1">Quick Actions</span>
                <span className="subtitle op-7">Shortcuts</span>
              </div>
              <div className="quick-actions-scroll scrollbar-outer">
                <div className="quick-actions-items">
                  <div className="row m-0">
                    {[
                      { icon: "far fa-calendar-alt", text: "Calendar", bg: "bg-danger" },
                      { icon: "fas fa-map", text: "Maps", bg: "bg-warning" },
                      { icon: "fas fa-file-excel", text: "Reports", bg: "bg-info" },
                      { icon: "fas fa-envelope", text: "Emails", bg: "bg-success" },
                      { icon: "fas fa-file-invoice-dollar", text: "Invoice", bg: "bg-primary" },
                      { icon: "fas fa-credit-card", text: "Payments", bg: "bg-secondary" },
                    ].map((item, i) => (
                      <a className="col-6 col-md-4 p-0" href="#" key={i}>
                        <div className="quick-actions-item">
                          <div className={`avatar-item ${item.bg} rounded-circle`}>
                            <i className={item.icon} />
                          </div>
                          <span className="text">{item.text}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Profile */}
          <li className="nav-item topbar-user dropdown hidden-caret">
            <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#">
              <div className="avatar-sm">
                <img src={profile} alt="profile" className="avatar-img rounded-circle" />
              </div>
              <span className="profile-username">
                <span className="op-7">Hi,</span> <span className="fw-bold">Ritik</span>
              </span>
            </a>
            <ul className="dropdown-menu dropdown-user animated fadeIn">
              <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img src={profile} alt="profile" className="avatar-img rounded" />
                    </div>
                    <div className="u-text">
                      <h4>Ritik</h4>
                      <p className="text-muted">ritik@gmail.com</p>
                      <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">My Profile</a>
                  <a className="dropdown-item" href="#">My Balance</a>
                  <a className="dropdown-item" href="#">Inbox</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Account Setting</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
