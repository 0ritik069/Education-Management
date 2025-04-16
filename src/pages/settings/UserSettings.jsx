import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const UserSettings = () => {
  return (
    <Layout>
      <div className="page-header mb-4">
        <h4 className="page-title">User Settings</h4>
      </div>

      <div>
        <div className="mb-3">
          <strong>Profile Settings</strong>
          <p>Manage your profile details.</p>
          <Link to="/settings/update-profile" className="btn btn-info">
            Update Profile
          </Link>
        </div>

        <div className="mb-3">
          <strong>Security</strong>
          <p>Change your password for security purposes.</p>
          <Link to="/settings/change-password" className="btn btn-warning">
            Change Password
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UserSettings;
