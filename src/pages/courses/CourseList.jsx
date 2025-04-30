import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://192.168.1.82:5000/api/course/all");
      console.log("API response:", res.data); // Log the full response

      const courseList = Array.isArray(res.data.Courses_data)
        ? res.data.Courses_data // Corrected here
        : [];

      console.log("Fetched courses:", courseList);
      setCourses(courseList);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <Layout>
    <div className="page-inner">
      <div className="page-header">
        <h4 className="page-title">Courses</h4>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">All Courses</div>
            </div>
            <div className="card-body">
              {/* <p>Courses Count: {courses.length}</p> Debugging line */}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Course Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(courses) && courses.length > 0 ? (
                    courses.map((course, index) => {
                      console.log("Rendering course row:", course); 
                      return (
                        <tr key={course.id || index}>
                          <td>{index + 1}</td>
                          <td>{course.name}</td>
                          <td>{course.description}</td>
                          <td>
                            <button className="btn btn-sm btn-info">Edit</button>
                            <button className="btn btn-sm btn-danger ms-2">Delete</button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No courses found.
                      </td>
                    </tr>
                  )}
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

export default CoursesList;
