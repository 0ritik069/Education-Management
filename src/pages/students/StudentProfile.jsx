import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import studentImg from "../../assets/img/profile.jpg";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`http://localhost:5000/api/students/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch student profile");
        }

        setStudent(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <Layout><p>Loading profile...</p></Layout>;
  if (!student) return <Layout><p>Student not found.</p></Layout>;

  return (
    <Layout>
      <div className="innerContent">
        <div className="container">
          <h2 className="mb-4">My Profile</h2>

          <div className="row">
            {/* Left: Student photo + basic info */}
            <div className="col-md-4">
              <div className="card text-center p-3">
                <img
                  src={student.imageUrl || studentImg}
                  alt="student"
                  className="img-fluid rounded-circle mb-3"
                  width="120"
                />
                <h5>{student.name}</h5>
                <p>Class: {student.className || "N/A"}</p>
                <p>Roll No: {student.rollNo || "N/A"}</p>
                <p>Reg. No: {student.registrationNo || "N/A"}</p>
                <button className="btn btn-primary mt-2">
                  <i className="fa fa-id-card me-2"></i>Download ID Card
                </button>
              </div>
            </div>

            {/* Right: Full Details */}
            <div className="col-md-8">
              <div className="card p-4">
                <h5 className="mb-3">Personal Information</h5>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <strong>Full Name:</strong>
                    <p>{student.name}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <strong>Email:</strong>
                    <p>{student.email}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <strong>Phone:</strong>
                    <p>{student.phone || "N/A"}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <strong>Date of Birth:</strong>
                    <p>{student.dob || "N/A"}</p>
                  </div>
                  <div className="col-12 mb-3">
                    <strong>Address:</strong>
                    <p>{student.address || "N/A"}</p>
                  </div>
                </div>

                <h5 className="mt-4 mb-3">Parent/Guardian Details</h5>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <strong>Father's Name:</strong>
                    <p>{student.fatherName || "N/A"}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <strong>Mother's Name:</strong>
                    <p>{student.motherName || "N/A"}</p>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <strong>Guardian Contact:</strong>
                    <p>{student.guardianPhone || "N/A"}</p>
                  </div>
                </div>

                <h5 className="mt-4 mb-3">Uploaded Documents</h5>
                <ul className="list-group">
                  {student.documents?.length > 0 ? (
                    student.documents.map((doc, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {doc.name}
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No documents uploaded.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
