export default function WhoWeAre({ imageSrc = "/images/whoweare.png" }) {
  return (
    <section className="relative overflow-hidden bg-[#0f2447] text-white">
      <div className="mx-auto pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="flex justify-between items-end mb-10 px-28">
          <h1 className="font-heading font-normal text-[36px] sm:text-[48px] lg:text-6xl leading-tight">
            A new standard
            <br />
            of refined living
          </h1>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-base uppercase tracking-[0.25em] text-white hover:text-white pr-44"
          >
            {/* <span className="inline-block w-8 h-px bg-white/40" aria-hidden="true"></span> */}
            <span aria-hidden="true">↓</span>
            <span>Scroll Down</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start overflow-hidden">
          {/* Left: Headline + Visual */}
          <div className="relative">

            {/* Visual */}
            <div className=" relative">
              <div className="absolute right-[180px] bottom-[-175px] w-[560px] h-[560px] rounded-full bg-[#B2862D] hidden md:block" aria-hidden="true"></div>
              <img
                src={imageSrc}
                alt="Who we are visual"
                className="relative z-10 w-[560px] h-[690px] max-w-full object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="relative pl-20 pt-20">
            <div className="relative pl-12">
              <span className="absolute left-0 top-[-6px] w-10 h-10 rounded-full bg-white/10" aria-hidden="true"></span>
              <span className="absolute left-2 top-[-2px] text-white/30 text-3xl leading-none" aria-hidden="true">“</span>
              <p className="uppercase font-sans tracking-[0.25em] text-[11px] text-white/70">Who we are</p>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-5xl">
              Homes, commercial spaces
              <br />
              and hospitality
            </h2>
            <p className="mt-5 font-sans text-sm leading-6 text-[#F6E5CA] max-w-prose">
              <strong className="font-sans">Asta Properties</strong> is a Chennai-based real estate and hospitality company, founded by Vikram Agarwal, backed by over four decades of trust and nearly 30 years of experience in property development. We build structurally strong, functionally efficient residential, commercial, and hospitality projects that are consistently delivered on time. As pioneers of Chennai’s real estate growth, our portfolio includes landmark residences, commercial spaces, and hospitality ventures such as Park Plaza and Radisson Blu in Egmore, developed and owned by the group under global hotel brands
            </p>
            <button className="mt-8 inline-flex items-center h-11 px-6 rounded-md border border-white/30 hover:border-white/60">
              MORE ABOUT US
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative z-[9999] mt-30 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center px-10">
          <div className="flex items-center justify-center gap-3">
            <div className="font-heading text-6xl">40+</div>
            <div className=" text-sm font-normal uppercase tracking-widest text-white/70 text-left">Years of<br />Legacy</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="font-heading text-6xl">100%</div>
            <div className=" text-sm font-normal uppercase tracking-widest text-white/70 text-left">On-time<br />Delivery</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="font-heading text-6xl">900+</div>
            <div className=" text-sm font-normal uppercase tracking-widest text-white/70 text-left">Residences<br />Delivered</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="font-heading text-6xl">3M+</div>
            <div className=" text-sm font-normal uppercase tracking-widest text-white/70 text-left">Sq. Ft.<br />Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}


