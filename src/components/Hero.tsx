import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 py-14 md:flex-row md:justify-between md:py-20 lg:py-24">

        {/* Left Content */}
        <div className="w-full max-w-[600px] text-center md:text-left">

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">

            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-[540px] text-sm leading-7 text-slate-500 sm:text-base md:mx-0 md:text-lg">
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put
            together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">

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
        <div className="w-full max-w-[360px] md:max-w-[380px] lg:max-w-[430px]">

          <img
            src={bannerStack}
            alt="Development technology stack"
            className="mx-auto w-full object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;