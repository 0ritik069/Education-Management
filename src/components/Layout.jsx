import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <TopNavbar />
        <div className="content">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
