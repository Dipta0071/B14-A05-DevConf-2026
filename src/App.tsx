import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Technology Explorer */}
      <TechnologySection />

      {/* About Section */}
      <section
        id="about"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-[1000px] px-5">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
              About DevStack
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Build With the{" "}
              <span className="text-pink-500">
                Right Tools
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              DevStack helps developers explore modern
              technologies and create a personalized stack
              based on their project requirements.
            </p>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* Explore */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-lg">
                🔎
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Explore
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Discover popular frontend, backend,
                database, and development tools.
              </p>

            </div>

            {/* Compare */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-lg">
                ⚖️
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Compare
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Compare technologies by category,
                level, rating, and use case.
              </p>

            </div>

            {/* Build */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-lg">
                🚀
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Build
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Create your own personalized technology
                stack for your next project.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">

        <div className="mx-auto max-w-[1200px] px-5 py-12">

          {/* Footer Top */}
          <div className="flex flex-col justify-between gap-8 md:flex-row">

            {/* Brand */}
            <div className="max-w-sm">

              <h3 className="text-xl font-extrabold text-white">
                Dev
                <span className="text-pink-500">
                  Stack
                </span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Explore modern technologies and build the
                ideal development stack for your next project.
              </p>

            </div>

            {/* Footer Links */}
            <div className="flex gap-12">

              {/* Navigation */}
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Navigation
                </h4>

                <div className="mt-4 flex flex-col gap-3">

                  <a
                    href="#home"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Home
                  </a>

                  <a
                    href="#technologies"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Technologies
                  </a>

                  <a
                    href="#about"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    About
                  </a>

                </div>
              </div>

              {/* Project */}
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Project
                </h4>

                <div className="mt-4 flex flex-col gap-3">

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    GitHub
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-slate-800 pt-6">

            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

              <p>
                © 2026 DevStack. All rights reserved.
              </p>

              <p>
                Built with React + TypeScript + Tailwind CSS
              </p>

            </div>

          </div>

        </div>

      </footer>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;