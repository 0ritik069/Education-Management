import React, { useState } from "react";
import logo from "../assets/img/kaiadmin/transLogo.png";

const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);

  const handleLockToggle = () => {
    setIsSidebarLocked((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isSidebarLocked) {
      setIsSidebarHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarLocked) {
      setIsSidebarHovered(false);
    }
  };

  const sidebarClasses = [
    "sidebar",
    (isSidebarLocked || isSidebarHovered) ? "sidebar-open" : "",
  ].join(" ");

  return (
    <div
      className={sidebarClasses}
      data-background-color="dark"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <a href="/" className="logo">
            <img
              src={logo}
              alt="navbar brand"
              className="navbar-brand"
              height="70"
            />
          </a>

          <button
            className="topbar-toggler more"
            onClick={handleLockToggle}
            style={{ zIndex: 10 }}
          >
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <a href="#dashboard">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </a>
            </li>

            <li className="nav-section">
              {(isSidebarHovered || isSidebarLocked) && (
                <h4 className="text-section">Components</h4>
              )}
            </li>

            {/* Collapsible Menu Items Start */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#students">
                <i className="fas fa-layer-group"></i>
                <p>Manage Students</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="students">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Avatars</span></a></li>
                  <li><a href="#"><span className="sub-item">Buttons</span></a></li>
                  <li><a href="#"><span className="sub-item">Grid System</span></a></li>
                  <li><a href="#"><span className="sub-item">Panels</span></a></li>
                  <li><a href="#"><span className="sub-item">Notifications</span></a></li>
                  <li><a href="#"><span className="sub-item">Sweet Alert</span></a></li>
                  <li><a href="#"><span className="sub-item">Font Awesome Icons</span></a></li>
                  <li><a href="#"><span className="sub-item">Simple Line Icons</span></a></li>
                  <li><a href="#"><span className="sub-item">Typography</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#instructors">
                <i className="fas fa-people-arrows" />
                <p>Manage Instructors</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="instructors">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Sidebar Style 2</span></a></li>
                  <li><a href="#"><span className="sub-item">Icon Menu</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#fee">
                <i className="fa-solid fa-money-bill" />
                <p>Fee & Payment</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="fee">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Sidebar Style 2</span></a></li>
                  <li><a href="#"><span className="sub-item">Icon Menu</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#courses">
                <i className="fa-solid fa-chart-pie"></i>
                <p>Manage Courses</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="courses">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Basic Table</span></a></li>
                  <li><a href="#"><span className="sub-item">Datatables</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#books">
                <i className="fas fa-book-reader" />
                <p>Manage Books</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="books">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Google Maps</span></a></li>
                  <li><a href="#"><span className="sub-item">Jsvectormap</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#placement">
                <i className="far fa-chart-bar" />
                <p>Placement Test</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="placement">
                <ul className="nav nav-collapse">
                  <li><a href="#"><span className="sub-item">Chart Js</span></a></li>
                  <li><a href="#"><span className="sub-item">Sparkline</span></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a href="#reports">
                <i className="fas fa-file-alt"></i>
                <p>Reports</p>
              </a>
            </li>
            {/* Collapsible Menu Items End */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
