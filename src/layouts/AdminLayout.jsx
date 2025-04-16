import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main panel */}
      <div className="flex-1 bg-gray-100 min-h-screen pl-64 pt-16">
        {/* Navbar */}
        {/* <Navbar /> */}
        <TopNavbar/>

        {/* Page content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
