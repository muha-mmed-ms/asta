const features = [
  {
    title: "Design-accurate",
    desc: "Token-driven styles for exact font sizes, colors, and spacing.",
  },
  {
    title: "Performance-first",
    desc: "Vite + React with optimal bundle defaults and modern tooling.",
  },
  {
    title: "Composable",
    desc: "Clean, reusable components for rapid iteration and growth.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Features</h2>
          <p className="mt-3 text-[--color-muted]">What makes Asta stand out.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-black/10 p-6">
              <div className="h-10 w-10 rounded bg-[--color-accent]/15 mb-4"></div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[--color-muted]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


