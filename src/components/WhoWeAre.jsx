import About from "./About";

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
            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-base uppercase tracking-[0.25em] text-white hover:text-white pr-44"
          >
            {/* <span className="inline-block w-8 h-px bg-white/40" aria-hidden="true"></span> */}
            <span aria-hidden="true">↓</span>
            <span>Scroll Down</span>
          </button>
        </div>
        
        <About />

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


