export default function Cta() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-black/10 p-8 sm:p-12 bg-[--color-primary] text-white grid gap-6 sm:gap-0 sm:grid-cols-[1fr_auto] items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to get started?</h3>
            <p className="mt-2 text-white/80">Bring your Figma, ship your product.</p>
          </div>
          <button className="h-11 px-6 rounded-md bg-[--color-accent] text-white justify-self-start sm:justify-self-end hover:opacity-90">Get Started</button>
        </div>
      </div>
    </section>
  );
}


