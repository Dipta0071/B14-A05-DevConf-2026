import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-10 px-5 py-20 md:py-24">

        {/* Left Content */}
        <div className="max-w-[600px]">

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[540px] text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-[380px] lg:w-[430px]">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;