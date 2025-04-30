import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/img/kaiadmin/transLogo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });

  const roles = ["Student", "Instructor", "Reception", "Admin"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://192.168.1.82:5000/api/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
      });

      console.log("Registration successful:", res.data);
      alert("Registration successful!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Student",
      });
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="wrapper full-height bg-light">
      {/* Fixed Navbar */}
      <div
        className="main-header w-100"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1030,
        }}
      >
        <div className="logo-header d-flex align-items-center px-4" style={{ height: "70px" }}>
          <a href="/" className="logo d-inline-block">
            <img src={logo} alt="navbar brand" style={{ height: "60px" }} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="content" style={{ paddingTop: "90px" }}>
        <div className="container d-flex justify-content-center align-items-start">
          <div className="col-md-6 col-lg-5 mt-5 mb-5">
            <div className="card card-primary shadow border-0">
              <div className="card-header bg-primary text-white text-center py-3">
                <h3 className="fw-bold mb-0">Register</h3>
              </div>

              <div className="card-body px-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="fw-semibold">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="fw-semibold">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Re-enter password"
                      required
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="fw-semibold">Select Role</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100 fw-bold"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer text-center py-3 bg-light">
                <small>
                  <div className="text-black">Already have an account?</div>
                  <a href="/login" className="text-black fw-semibold">
                    Login
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
