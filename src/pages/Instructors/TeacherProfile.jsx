import React, { useState } from "react";
import Layout from "../../components/Layout";

const TeacherProfile = () => {
  const [profile, setProfile] = useState({
    name: "Prof. Arvind Patel",
    email: "arvind.patel@example.com",
    phone: "9876543210",
    subject: "Physics",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Teacher Profile</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Edit Profile</div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={profile.subject}
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </div>
                    <div className="text-right mt-3">
                      {editing ? (
                        <button
                          type="button"
                          onClick={handleSave}
                          className="btn btn-success"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditing(true)}
                          className="btn btn-primary"
                        >
                          Edit Profile
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherProfile;
