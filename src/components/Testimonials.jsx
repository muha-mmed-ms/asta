const testimonials = [
  {
    quote:
      "The build matched our Figma perfectly. It saved weeks of frontend work.",
    author: "Product Lead",
  },
  {
    quote: "Clean components and great developer experience.",
    author: "Senior Engineer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What people say</h2>
          <p className="mt-3 text-[--color-muted]">Real feedback from teams who shipped with Asta.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-lg border border-black/10 p-6 bg-white">
              <blockquote className="text-base">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-[--color-muted]">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


