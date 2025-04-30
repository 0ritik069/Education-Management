import React, { useState, useEffect } from "react";
import logo from "../assets/img/kaiadmin/transLogo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [openMenu, setOpenMenu] = useState({
    students: false,
    instructors: false,
    courses: false,
    fee: false,
    books: false,
  });

  const [role, setRole] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setRole(parsedUser.Role.toLowerCase());
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleLockToggle = () => {
    setIsSidebarLocked((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isSidebarLocked) setIsSidebarHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isSidebarLocked) setIsSidebarHovered(false);
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
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <Link to="/" className="logo">
            <img src={logo} alt="navbar brand" className="navbar-brand" height="20" />
          </Link>
          <button
            className="topbar-toggler more"
            onClick={handleLockToggle}
            style={{ zIndex: 10 }}
          >
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>

      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">

            <li className="nav-item active">
              <Link to="/">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-section">
              {(isSidebarHovered || isSidebarLocked) && (
                <h4 className="text-section">Menu</h4>
              )}
            </li>

            {/* Admin Only */}
            {role === "admin" && (
              <>
                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("students")}>
                    <i className="fas fa-user-graduate"></i>
                    <p>Manage Students</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.students ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/students"><span className="sub-item">Student List</span></Link></li>
                      <li><Link to="/students/add"><span className="sub-item">Add Student</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("instructors")}>
                    <i className="fas fa-chalkboard-teacher"></i>
                    <p>Manage Instructors</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.instructors ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/instructors"><span className="sub-item">Instructor List</span></Link></li>
                      <li><Link to="/instructors/add"><span className="sub-item">Add Instructor</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("courses")}>
                    <i className="fas fa-book"></i>
                    <p>Manage Courses</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.courses ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/courses"><span className="sub-item">Course List</span></Link></li>
                      <li><Link to="/courses/add"><span className="sub-item">Add Course</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("fee")}>
                    <i className="fas fa-money-check-alt"></i>
                    <p>Fee & Payment</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.fee ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/fees"><span className="sub-item">Payment List</span></Link></li>
                      <li><Link to="/fees/add"><span className="sub-item">Add Payment</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("books")}>
                    <i className="fas fa-book-reader"></i>
                    <p>Manage Books</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.books ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/library/books"><span className="sub-item">Book List</span></Link></li>
                      <li><Link to="/library/books/add"><span className="sub-item">Add Book</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/reports">
                    <i className="fas fa-chart-line"></i>
                    <p>Reports</p>
                  </Link>
                </li>
              </>
            )}

            {/* Receptionist */}
            {role === "reception" && (
              <>
                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("students")}>
                    <i className="fas fa-user-graduate"></i>
                    <p>Manage Students</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.students ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/students"><span className="sub-item">Student List</span></Link></li>
                      <li><Link to="/students/add"><span className="sub-item">Add Student</span></Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" onClick={() => toggleMenu("fee")}>
                    <i className="fas fa-money-check-alt"></i>
                    <p>Fee & Payment</p>
                    <span className="caret" />
                  </a>
                  <div className={`collapse ${openMenu.fee ? "show" : ""}`}>
                    <ul className="nav nav-collapse">
                      <li><Link to="/fees"><span className="sub-item">Payment List</span></Link></li>
                      <li><Link to="/fees/add"><span className="sub-item">Add Payment</span></Link></li>
                    </ul>
                  </div>
                </li>
              </>
            )}

            {/* Instructor */}
            {role === "instructor" && (
              <li className="nav-item">
                <a href="#" onClick={() => toggleMenu("courses")}>
                  <i className="fas fa-book"></i>
                  <p>Manage Courses</p>
                  <span className="caret" />
                </a>
                <div className={`collapse ${openMenu.courses ? "show" : ""}`}>
                  <ul className="nav nav-collapse">
                    <li><Link to="/courses"><span className="sub-item">Course List</span></Link></li>
                    <li><Link to="/courses/add"><span className="sub-item">Add Course</span></Link></li>
                  </ul>
                </div>
              </li>
            )}

            {/* Student */}
            {role === "student" && (
              <>
                <li className="nav-item">
                  <Link to="/my-courses">
                    <i className="fas fa-book"></i>
                    <p>My Courses</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/placement">
                    <i className="fas fa-clipboard-check"></i>
                    <p>Placement Test</p>
                  </Link>
                </li>
              </>
            )}

            {/* Common for all */}
            <li className="nav-item">
              <Link to="/placement-test-registration">
                <i className="fas fa-clipboard-list"></i>
                <p>Placement Test Registration</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
















