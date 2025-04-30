import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Admin Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Student Dashboard
import StudentDashboard from "./pages/dashboard/StudentDashboard";

// Students (Admin)
import StudentList from "./pages/students/StudentList";
import AddStudent from "./pages/students/AddStudent";
import EditStudent from "./pages/students/EditStudent";

// Instructors (Admin)
import InstructorList from "./pages/instructors/InstructorList";
import AddInstructor from "./pages/Instructors/AddInstructor";
import EditInstructor from "./pages/Instructors/EditInstructor";

// Classes (Admin)
import ClassList from "./pages/classes/ClassList";
import AddClass from "./pages/classes/AddClass";
import EditClass from "./pages/students/EditClass";

// Attendance (Admin)
import AttendanceList from "./pages/attendance/AttendanceList";
import AddAttendance from "./pages/attendance/AddAttendance";
import EditAttendance from "./pages/attendance/EditAttendance";

// Exams (Admin)
import ExamList from "./pages/exams/ExamList";
import AddExam from "./pages/exams/AddExam";
import EditExam from "./pages/exams/EditExam";

// Fees (Admin)
import FeeList from "./pages/fees/FeeList";
import AddFee from "./pages/fees/AddFee";
import EditFee from "./pages/fees/EditFee";

// Library (Admin)
import BookList from "./pages/library/BookList";
import AddBook from "./pages/library/AddBook";
import EditBook from "./pages/library/EditBook";

// Communication (Admin)
import MessageList from "./pages/communication/MessageList";
import ComposeMessage from "./pages/communication/ComposeMessage";
import ViewMessage from "./pages/communication/ViewMessage";

// Settings (Admin)
import UserSettings from "./pages/settings/UserSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import UpdateProfile from "./pages/settings/UpdateProfile";

// Student Pages
import StudentAttendance from "./pages/students/StudentAttendance";
import StudentGrades from "./pages/students/StudentGrades";
import StudentFee from "./pages/students/StudentFee";
import StudentProfile from "./pages/students/StudentProfile";

// Instructor Pages
import InstructorMyClasses from "./pages/Instructors/InstructorMyClasses";
import MarkAttendance from "./pages/Instructors/MarkAttendance";

import InstructorNotifications from "./pages/Instructors/InstructorNotifications";
import TeacherProfile from "./pages/Instructors/TeacherProfile";
import UploadGrades from "./pages/Instructors/UploadGrades";
import InstructorDashboard from "./pages/dashboard/InstructorDashboard";
import ReceptionistDashboard from "./pages/dashboard/ReceptionistDashboard";
import CoursesList from "./pages/courses/CourseList";
import EditCourse from "./pages/courses/EditCourse";
import AddCourse from "./pages/courses/AddCourse";
import PlacementTestRegistration from "./pages/PlacementTest/PlacementTestRegistration";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Instructor Dashboard */}
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />

        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />

        {/* Students (Admin) */}
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />

        {/* Instructors (Admin) */}
        <Route path="/instructors" element={<InstructorList />} />
        <Route path="/instructors/add" element={<AddInstructor />} />
        <Route path="/instructors/edit/:id" element={<EditInstructor />} />

        {/* Classes (Admin) */}
        <Route path="/classes" element={<ClassList />} />
        <Route path="/classes/add" element={<AddClass />} />
        <Route path="/classes/edit/:id" element={<EditClass />} />

        {/* Attendance (Admin) */}
        <Route path="/attendance" element={<AttendanceList />} />
        <Route path="/attendance/add" element={<AddAttendance />} />
        <Route path="/attendance/edit/:id" element={<EditAttendance />} />

        {/* Exams (Admin) */}
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/add" element={<AddExam />} />
        <Route path="/exams/edit/:id" element={<EditExam />} />

        {/* Fees (Admin) */}
        <Route path="/fees" element={<FeeList />} />
        <Route path="/fees/add" element={<AddFee />} />
        <Route path="/fees/edit/:id" element={<EditFee />} />
        {/* Courses  */}
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/add" element={<AddCourse />} />
        <Route path="/courses/edit/:id" element={<EditCourse />} />


        {/* Library (Admin) */}
        <Route path="/library/books" element={<BookList />} />
        <Route path="/library/books/add" element={<AddBook />} />
        <Route path="/library/books/edit/:id" element={<EditBook />} />

        {/* Communication (Admin) */}
        <Route path="/communication/messages" element={<MessageList />} />
        <Route path="/communication/compose" element={<ComposeMessage />} />
        <Route path="/communication/view/:id" element={<ViewMessage />} />

        {/* Settings (Admin) */}
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/settings/update-profile" element={<UpdateProfile />} />

        {/* Student Dashboard Pages */}
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/grades" element={<StudentGrades />} />
        <Route path="/fee" element={<StudentFee />} />
        <Route path="/profile" element={<StudentProfile />} />

        {/* Instructor Pages */}
        <Route path="/instructor/my-classes" element={<InstructorMyClasses />} />
        <Route path="/instructor/mark-attendance" element={<MarkAttendance />} />

        <Route path="/instructor/notifications" element={<InstructorNotifications />} />
        <Route path="/instructor/profile" element={<TeacherProfile />} />
        <Route path="/instructor/upload-grades" element={<UploadGrades />} />


        <Route path="/placement-test-registration" element={<PlacementTestRegistration />} />

{/* 
        // Inside <Routes>:
<Route path="/marks" element={<MarksList />} />
<Route path="/marks/add" element={<AddMarks />} />
<Route path="/marks/edit/:id" element={<EditMarks />} /> */}
      </Routes>
    </Router>
  );
}

export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Auth Pages
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

// // Admin Dashboard
// import Dashboard from "./pages/dashboard/Dashboard";

// // Student Dashboard
// import StudentDashboard from "./pages/dashboard/StudentDashboard";

// // Students (Admin)
// import StudentList from "./pages/students/StudentList";
// import AddStudent from "./pages/students/AddStudent";
// import EditStudent from "./pages/students/EditStudent";

// // Instructors (Admin)
// import InstructorList from "./pages/instructors/InstructorList";
// import AddInstructor from "./pages/Instructors/AddInstructor";
// import EditInstructor from "./pages/Instructors/EditInstructor";

// // Classes (Admin)
// import ClassList from "./pages/classes/ClassList";
// import AddClass from "./pages/classes/AddClass";
// import EditClass from "./pages/students/EditClass";

// // Attendance (Admin)
// import AttendanceList from "./pages/attendance/AttendanceList";
// import AddAttendance from "./pages/attendance/AddAttendance";
// import EditAttendance from "./pages/attendance/EditAttendance";

// // Exams (Admin)
// import ExamList from "./pages/exams/ExamList";
// import AddExam from "./pages/exams/AddExam";
// import EditExam from "./pages/exams/EditExam";

// // Fees (Admin)
// import FeeList from "./pages/fees/FeeList";
// import AddFee from "./pages/fees/AddFee";
// import EditFee from "./pages/fees/EditFee";

// // Library (Admin)
// import BookList from "./pages/library/BookList";
// import AddBook from "./pages/library/AddBook";
// import EditBook from "./pages/library/EditBook";

// // Communication (Admin)
// import MessageList from "./pages/communication/MessageList";
// import ComposeMessage from "./pages/communication/ComposeMessage";
// import ViewMessage from "./pages/communication/ViewMessage";

// // Settings (Admin)
// import UserSettings from "./pages/settings/UserSettings";
// import ChangePassword from "./pages/settings/ChangePassword";
// import UpdateProfile from "./pages/settings/UpdateProfile";

// // Student Pages
// import StudentAttendance from "./pages/students/StudentAttendance";
// import StudentGrades from "./pages/students/StudentGrades";
// import StudentFee from "./pages/students/StudentFee";
// import StudentProfile from "./pages/students/StudentProfile";

// // Instructor Pages
// import InstructorMyClasses from "./pages/Instructors/InstructorMyClasses";
// import MarkAttendance from "./pages/Instructors/MarkAttendance";

// import InstructorNotifications from "./pages/Instructors/InstructorNotifications"; 
// import TeacherProfile from "./pages/Instructors/TeacherProfile"; 
// import UploadGrades from "./pages/Instructors/UploadGrades"; 
// import InstructorDashboard from "./pages/dashboard/InstructorDashboard";
// import ReceptionistDashboard from "./pages/dashboard/ReceptionistDashboard";

// // PrivateRoute Component (For protecting routes based on user role)
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Admin Dashboard */}
//         <Route
//           path="/"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />

//         {/* Student Dashboard */}
//         <Route
//           path="/student-dashboard"
//           element={
//             <PrivateRoute allowedRoles={["Student"]}>
//               <StudentDashboard />
//             </PrivateRoute>
//           }
//         />

//         {/* Instructor Dashboard */}
//         <Route
//           path="/instructor-dashboard"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <InstructorDashboard />
//             </PrivateRoute>
//           }
//         />

//         {/* Receptionist Dashboard */}
//         <Route
//           path="/receptionist-dashboard"
//           element={
//             <PrivateRoute allowedRoles={["Receptionist"]}>
//               <ReceptionistDashboard />
//             </PrivateRoute>
//           }
//         />

//         {/* Students (Admin) */}
//         <Route
//           path="/students"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <StudentList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/students/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddStudent />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/students/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditStudent />
//             </PrivateRoute>
//           }
//         />

//         {/* Instructors (Admin) */}
//         <Route
//           path="/instructors"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <InstructorList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/instructors/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddInstructor />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/instructors/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditInstructor />
//             </PrivateRoute>
//           }
//         />

//         {/* Classes (Admin) */}
//         <Route
//           path="/classes"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <ClassList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/classes/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddClass />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/classes/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditClass />
//             </PrivateRoute>
//           }
//         />

//         {/* Attendance (Admin) */}
//         <Route
//           path="/attendance"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AttendanceList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/attendance/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddAttendance />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/attendance/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditAttendance />
//             </PrivateRoute>
//           }
//         />

//         {/* Exams (Admin) */}
//         <Route
//           path="/exams"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <ExamList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/exams/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddExam />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/exams/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditExam />
//             </PrivateRoute>
//           }
//         />

//         {/* Fees (Admin) */}
//         <Route
//           path="/fees"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <FeeList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/fees/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddFee />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/fees/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditFee />
//             </PrivateRoute>
//           }
//         />

//         {/* Library (Admin) */}
//         <Route
//           path="/library/books"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <BookList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/library/books/add"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <AddBook />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/library/books/edit/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <EditBook />
//             </PrivateRoute>
//           }
//         />

//         {/* Communication (Admin) */}
//         <Route
//           path="/communication/messages"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <MessageList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/communication/compose"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <ComposeMessage />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/communication/view/:id"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <ViewMessage />
//             </PrivateRoute>
//           }
//         />

//         {/* Settings (Admin) */}
//         <Route
//           path="/settings"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <UserSettings />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/settings/change-password"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <ChangePassword />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/settings/update-profile"
//           element={
//             <PrivateRoute allowedRoles={["Admin"]}>
//               <UpdateProfile />
//             </PrivateRoute>
//           }
//         />

//         {/* Student Dashboard Pages */}
//         <Route
//           path="/student/attendance"
//           element={
//             <PrivateRoute allowedRoles={["Atudent"]}>
//               <StudentAttendance />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/grades"
//           element={
//             <PrivateRoute allowedRoles={["Student"]}>
//               <StudentGrades />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/fee"
//           element={
//             <PrivateRoute allowedRoles={["Student"]}>
//               <StudentFee />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute allowedRoles={["Student"]}>
//               <StudentProfile />
//             </PrivateRoute>
//           }
//         />

//         {/* Instructor Pages */}
//         <Route
//           path="/instructor/my-classes"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <InstructorMyClasses />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/instructor/mark-attendance"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <MarkAttendance />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/instructor/notifications"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <InstructorNotifications />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/instructor/profile"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <TeacherProfile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/instructor/upload-grades"
//           element={
//             <PrivateRoute allowedRoles={["Instructor"]}>
//               <UploadGrades />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





































