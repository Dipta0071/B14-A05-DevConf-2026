function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </div>

          <h1 className="text-lg font-bold text-gray-900">
            Dev <span className="text-pink-500">Stack</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-7 text-sm">
          <a href="#" className="font-medium text-pink-500">
            Home
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            About
          </a>

          <a href="#" className="text-gray-500 hover:text-pink-500">
            Contact
          </a>
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-5">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;