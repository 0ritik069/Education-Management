// import React from "react";
// import Sidebar from "./Sidebar";
// import TopNavbar from "./TopNavbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="wrapper flex min-h-screen">
//       {/* Sidebar with fixed width */}
//       <div className="w-[80px] lg:w-[250px]">
//         <Sidebar />
//       </div>

//       {/* Main panel fills the rest */}
//       <div className="main-panel flex-1 flex flex-col">
//         <TopNavbar />

//         <div className="content flex-1">
//           <div className="container-fluid p-4">
//             {children}
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;




import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper flex min-h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-[80px] lg:w-[250px]">
        <Sidebar />
      </div>

      {/* Main panel with full height and vertical layout */}
      <div className="main-panel flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Page content that expands to push footer down */}
        <div className="content flex-1">
          <div className="container-fluid p-4">{children}</div>
        </div>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
