export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(124,58,237,0.15),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Build your next experience with Asta
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[--color-muted] max-w-2xl">
            Production-ready UI, crafted to match your design system. Ship faster with confidence.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="h-11 px-6 rounded-md bg-[--color-accent] text-white hover:opacity-90">Get Started</button>
            <button className="h-11 px-6 rounded-md border border-black/10 hover:border-black/20">Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}


