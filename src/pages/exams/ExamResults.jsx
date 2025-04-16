import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const ExamResults = () => {
  const [results, setResults] = useState([
    { id: 1, student: "Ali Khan", examName: "Maths Final Exam", score: 85 },
    { id: 2, student: "Sara Ali", examName: "Science Midterm", score: 90 },
  ]);

  return (
    <Layout>
      <div className="page-header d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">Exam Results</h4>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Exam Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.student}</td>
                <td>{result.examName}</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ExamResults;
