import legacyDefault from '../assets/projects/legacy-of-trust.png'

export default function LegacyOfTrust({ imageSrc }) {
  const resolvedSrc = imageSrc || legacyDefault
  return (
    <section className="bg-[#0f2447] text-white py-16 lg:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-28 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src={resolvedSrc}
            alt="Outdoor seating by the pool with lush greenery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='pl-10'>
          <p className="uppercase tracking-[0.25em] text-sm text-[#B1A490] font-semibold font-sans">A LEGACY OF TRUST</p>
          <h2 className="mt-4 font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            Every project is
            <br />designed to deliver
            <br />elevated living everyday
          </h2>
          <p className="mt-10 text-[#F6E5CA] text-base leading-relaxed max-w-prose">
            Over the decades, Asta has built more than structures, we've built relationships founded on trust and delivery. Every project stands as a reflection of that promise, made to last and designed to uplift the lives within.
          </p>
          <a
            href="/projects"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded-md text-sm hover:bg-white hover:text-[#122549] transition"
          >
            EXPLORE PROJECTS
          </a>
        </div>
      </div>
    </section>
  )
}


