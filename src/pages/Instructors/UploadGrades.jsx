import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const UploadGrades = () => {
  const students = [
    { id: 1, name: "Alice Sharma" },
    { id: 2, name: "Rohit Verma" },
    { id: 3, name: "Meena Joshi" },
  ];

  const [grades, setGrades] = useState({});
  const [teacherId, setTeacherId] = useState(null);

  // Simulating values – replace with actual values if fetched from API or context
  const classId = 22;
  const subject = "python";
  const totalMarks = 100;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.Id) {
      setTeacherId(user.Id);
    }
  }, []);

  const handleGradeChange = (studentId, grade) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: grade,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token || !teacherId) {
      alert("Please log in as an instructor.");
      return;
    }

    for (const [studentId, marks] of Object.entries(grades)) {
      const numericMarks = parseInt(marks);
      const grade =
        numericMarks >= 90
          ? "A"
          : numericMarks >= 80
          ? "B"
          : numericMarks >= 70
          ? "C"
          : numericMarks >= 60
          ? "D"
          : "F";

      const data = {
        class_id: classId,
        student_id: parseInt(studentId),
        teacher_id: teacherId,
        subject: subject,
        marks_obtained: numericMarks,
        total_marks: totalMarks,
        grade: grade,
      };

      try {
        const response = await fetch("http://192.168.1.82:5000/api/marks/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Submission failed:", errorData);
          throw new Error("Failed to submit grade for student ID " + studentId);
        }
      } catch (error) {
        console.error("Error submitting grades:", error.message);
        alert("Something went wrong while submitting grades.");
        return;
      }
    }

    alert("All grades submitted successfully!");
    setGrades({});
  };

  return (
    <Layout>
      <div className="innerContent">
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Submit Exam Grades</h4>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Enter Marks for Students</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grades[student.id] || ""}
                            onChange={(e) =>
                              handleGradeChange(student.id, e.target.value)
                            }
                            className="form-control"
                            placeholder="Marks"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-right mt-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit Grades
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UploadGrades;
