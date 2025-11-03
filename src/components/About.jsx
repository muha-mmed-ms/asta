export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Asta</h2>
          <p className="mt-4 text-[--color-muted] text-base">
            A platform to turn your Figma design into a faithful, production-quality React app. We align
            typography, color, and spacing using theme tokens for accuracy.
          </p>
        </div>
        <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-[--color-accent]/15 to-transparent"></div>
      </div>
    </section>
  );
}


