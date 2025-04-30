import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-100">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        {/* Left nav */}
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Licenses
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="copyright">
          2024, made with <i className="fa fa-heart heart text-danger" /> by{" "}
          <a href="http://www.themekita.com">Hi Five Learning Center</a>
        </div>

        {/* Distribution Note */}
        <div>
          Distributed by{" "}
          <a target="_blank" rel="noreferrer" href="#">
            Hi Five
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
