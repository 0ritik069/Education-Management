export default function Navbar() {
    return (
      <header className="w-full bg-white shadow fixed top-0 left-64 h-16 flex items-center px-6 z-50 justify-between">
        {/* Left side - Search */}
        <div className="hidden md:flex items-center space-x-2 w-1/3">
          <button className="text-gray-500">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-3 py-1 rounded outline-none w-full"
          />
        </div>
  
        {/* Right side - Icons & Profile */}
        <div className="flex items-center gap-6">
          <button className="relative text-gray-600 hover:text-black">
            <i className="fa fa-envelope"></i>
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <button className="relative text-gray-600 hover:text-black">
            <i className="fa fa-bell"></i>
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">4</span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/assets/img/profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold">Hi,</p>
              <p className="text-gray-500 -mt-1">Hizrian</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
  