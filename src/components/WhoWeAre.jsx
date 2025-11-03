export default function WhoWeAre({ imageSrc = "/images/hero.jpg" }) {
  return (
    <section className="relative overflow-hidden bg-[#0f2447] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Visual */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-40 bottom-0 hidden md:block w-[520px] h-[520px] rounded-full bg-[#b89c2d]" aria-hidden="true"></div>
          <img src={imageSrc} alt="Who we are visual" className="relative z-10 w-full max-w-xl rounded-lg object-cover shadow-xl" />
        </div>

        {/* Right: Copy */}
        <div className="order-1 lg:order-2">
          <h1 className="font-heading text-4xl sm:text-5xl leading-tight">A new standard of refined living</h1>
          <div className="mt-10">
            <p className="uppercase tracking-[0.2em] text-xs text-white/70">Who we are</p>
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl">Homes, commercial spaces and hospitality</h2>
            <p className="mt-4 font-sans text-white/80 max-w-prose">
              Asta Properties is a Chennai-based real estate and hospitality company with over four decades of trust and nearly 30 years of experience in
              property development. We build structurally strong, functionally efficient residential, commercial, and hospitality projects delivered on time.
            </p>
            <button className="mt-8 inline-flex items-center h-11 px-5 rounded-md ring-1 ring-white/30 hover:ring-white/60">
              More about us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


