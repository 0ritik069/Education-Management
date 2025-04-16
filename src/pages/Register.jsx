import React from "react";
import logo from  "../assets/img/kaiadmin/transLogo.png";
const Register = () => {
  return (
    <div className="wrapper">
      <div className="main-header">
        <div className="logo-header" data-background-color="dark">
          <a href="/" className="logo">
            <img
              src={logo}
              alt="navbar brand"
              className="navbar-brand"
              height="70"
            />
          </a>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="card p-4" style={{ width: "400px" }}>
          <h3 className="text-center mb-4">Register</h3>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
