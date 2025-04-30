import React, { useState } from "react";
import Layout from "../../components/Layout";

const MarkAttendance = () => {
  const students = [
    { id: 1, name: "Alice Sharma" },
    { id: 2, name: "Rohit Verma" },
    { id: 3, name: "Meena Joshi" },
  ];

  const [attendance, setAttendance] = useState({});

  const handleChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Attendance:", attendance);
    alert("Attendance submitted successfully!");
  };

  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Mark Attendance</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr className="bg-light">
                          <th>Student</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student) => (
                          <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>
                              <select
                                className="form-control"
                                onChange={(e) =>
                                  handleChange(student.id, e.target.value)
                                }
                                value={attendance[student.id] || ""}
                              >
                                <option value="">--Select--</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-end mt-3">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      Submit Attendance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarkAttendance;
