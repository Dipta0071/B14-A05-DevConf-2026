function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[520px] max-w-[1200px] items-center justify-between px-5">
        
        {/* Left Content */}
        <div className="max-w-[600px]">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-lg leading-7 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/hero.png"
            alt="Development stack illustration"
            className="w-[400px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;