import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/kaiadmin/transLogo.png";

const   Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://192.168.1.82:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login response:", res.data);

      const user = res.data?.User; 
      const token = res.data?.token;

      if (!user || !user.Role || !token) {
        alert("Invalid response from server.");
        return;
      }

      // Save token and user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");

      // Redirect based on user role
      switch (user.Role) {
        case "Student":
          navigate("/student-dashboard");
          break;
        case "Instructor":
          navigate("/instructor-dashboard");
          break;
        case "Reception":
          navigate("/receptionist-dashboard");
          break;
        case "Admin":
          navigate("/");
          break;
        default:
          navigate("/login");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed!");
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
                <h3 className="fw-bold mb-0">Login</h3>
              </div>

              <div className="card-body px-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
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

                  <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary btn-block w-100 fw-bold">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div className="card-footer text-center py-3 bg-light">
                <small>
                  <div className="text-black">Don't have an account?</div>
                  <a href="/register" className="text-black fw-semibold">
                    Register
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

export default Login;
