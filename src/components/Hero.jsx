function Hero() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-orange-700">
          Your Daily Ritual
        </p>

        <h1 className="text-6xl font-bold leading-tight text-green-950">
          Coffee with Character.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Thoughtfully sourced beans, seasonal drinks,
          and a warm corner of the city made for slowing down.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-green-900 px-6 py-3 text-white">
            Explore Menu
          </button>

          <button className="rounded-full border border-gray-300 px-6 py-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;