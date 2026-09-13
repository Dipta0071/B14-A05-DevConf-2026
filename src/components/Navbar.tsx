import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-gray-950"
          >
            Dev<span className="text-pink-500">Stack</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 sm:flex">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="border-t border-gray-100 py-4 md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                Technologies
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                About
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Get Started
              </a>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}

export default Navbar;