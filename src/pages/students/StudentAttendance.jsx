import React from "react";
import Layout from "../../components/Layout";

const attendanceData = [
  { date: "2025-04-01", status: "Present" },
  { date: "2025-04-02", status: "Absent" },
  { date: "2025-04-03", status: "Present" },
  { date: "2025-04-04", status: "Present" },
  { date: "2025-04-05", status: "Absent" },
];

const StudentAttendance = () => {
  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter((d) => d.status === "Present").length;
  const attendancePercent = Math.round((presentDays / totalDays) * 100);

  return (
    <Layout>
      <div className="innerContent">
        <div className="container">
          <h2 className="mb-4">My Attendance</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="cardDash text-center">
                <i className="fa-solid fa-chart-pie cardIcon" />
                <h5>Total Attendance</h5>
                <h3>{attendancePercent}%</h3>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card p-3">
                <h5 className="mb-3">Attendance Record</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record, index) => (
                      <tr key={index}>
                        <td>{record.date}</td>
                        <td>
                          <span
                            className={`badge ${
                              record.status === "Present"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default StudentAttendance;
