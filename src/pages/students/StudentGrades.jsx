import React, { useState } from "react";
import Layout from "../../components/Layout";

const gradeHistoryData = [
  { subject: "Maths", grade: "A", term: "2025 - Term 1" },
  { subject: "Science", grade: "B", term: "2025 - Term 1" },
  { subject: "English", grade: "A+", term: "2025 - Term 1" },
  { subject: "History", grade: "B", term: "2025 - Term 2" },
  { subject: "Geography", grade: "A", term: "2025 - Term 2" },
];

const StudentGrades = () => {
  const [averageGrade, setAverageGrade] = useState("A");

  const calculateAverageGrade = () => {
    const grades = gradeHistoryData.map((data) => data.grade);
    // Assuming grades are mapped to their respective average values.
    const gradeValues = {
      "A+": 4.0,
      A: 3.5,
      "B+": 3.0,
      B: 2.5,
      "C+": 2.0,
      C: 1.5,
      "D": 1.0,
      "F": 0.0,
    };
    const totalGradeValue = grades.reduce((acc, grade) => acc + gradeValues[grade], 0);
    const averageValue = totalGradeValue / grades.length;

    // Find corresponding grade letter
    const averageLetter = Object.keys(gradeValues).find(
      (key) => gradeValues[key] === Math.round(averageValue * 2) / 2
    );
    setAverageGrade(averageLetter);
  };

  return (
    <Layout>
      <div className="innerContent">
        <div className="container">
          <h2 className="mb-4">Grades Overview</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="cardDash text-center">
                <i className="fa-solid fa-chart-bar cardIcon" />
                <h5>Average Grade</h5>
                <h3>{averageGrade}</h3>
                <button className="btn btn-primary" onClick={calculateAverageGrade}>
                  Calculate Average Grade
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="card p-3">
                <h5 className="mb-3">Grade History</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                      <th>Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeHistoryData.map((gradeData, index) => (
                      <tr key={index}>
                        <td>{gradeData.subject}</td>
                        <td>{gradeData.grade}</td>
                        <td>{gradeData.term}</td>
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

export default StudentGrades;
