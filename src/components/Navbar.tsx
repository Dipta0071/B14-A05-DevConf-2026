function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-gray-950"
        >
          Dev<span className="text-pink-500">Stack</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            Technologies
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            About
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-gray-950 sm:block"
          >
            GitHub
          </a>

          <a
            href="#technologies"
            className="rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;