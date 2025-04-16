import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/students/StudentList";
import AddStudent from "./pages/students/AddStudent";
import EditStudent from "./pages/students/EditStudent";
import InstructorList from "./pages/instructors/InstructorList";
import AddInstructor from "./pages/Instructors/AddInstructor";
import EditInstructor from "./pages/Instructors/EditInstructor";
import ClassList from "./pages/classes/ClassList";
import AddClass from "./pages/classes/AddClass";
import EditClass from "./pages/students/EditClass";
import AttendanceList from "./pages/attendance/AttendanceList";
import AddAttendance from "./pages/attendance/AddAttendance";
import EditAttendance from "./pages/attendance/EditAttendance";
import ExamList from "./pages/exams/ExamList";
import AddExam from "./pages/exams/AddExam";
import EditExam from "./pages/exams/EditExam";
import FeeList from "./pages/fees/FeeList";
import AddFee from "./pages/fees/AddFee";
import EditFee from "./pages/fees/EditFee";
import BookList from "./pages/library/BookList";
import AddBook from "./pages/library/AddBook";
import EditBook from "./pages/library/EditBook";
import MessageList from "./pages/communication/MessageList";
import ComposeMessage from "./pages/communication/ComposeMessage";
import ViewMessage from "./pages/communication/ViewMessage";
import UserSettings from "./pages/settings/UserSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import UpdateProfile from "./pages/settings/UpdateProfile";


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Students */}
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
        <Route path="/instructors" element={<InstructorList />} />
        <Route path="/instructors/add" element={<AddInstructor />} />
        <Route path="instructors/edit/:id" element={<EditInstructor/>} /> 
        <Route path="/classes" element={<ClassList />} />
        <Route path="/classes/add" element={<AddClass />} />
        <Route path="/classes/edit/:id" element={<EditClass />} />
        <Route path="/attendance" element={<AttendanceList />} />
        <Route path="/attendance/add" element={<AddAttendance />} />
        <Route path="/attendance/edit/:id" element={<EditAttendance />} />
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/add" element={<AddExam />} />
        <Route path="/exams/edit/:id" element={<EditExam />} />
        <Route path="/fees" element={<FeeList />} />
        <Route path="/fees/add" element={<AddFee />} />
        <Route path="/fees/edit/:id" element={<EditFee />} />
        <Route path="/library/books" element={<BookList />} />
        <Route path="/library/books/add" element={<AddBook />} />
        <Route path="/library/books/edit/:id" element={<EditBook />} />
        <Route path="/communication/messages" element={<MessageList />} />
        <Route path="/communication/compose" element={<ComposeMessage />} />
        <Route path="/communication/view/:id" element={<ViewMessage />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/settings/update-profile" element={<UpdateProfile />} />

      </Routes>
    </Router>
  );
}

export default App;


      //   {/* User Settings */}
      //   <Route path="/settings" element={<UserSettings />} />
      //   <Route path="/settings/change-password" element={<ChangePassword />} />
      //   <Route path="/settings/update-profile" element={<UpdateProfile />} />
      // </Routes>
