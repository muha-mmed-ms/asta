export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[--color-background]/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-[--color-primary]"></div>
          <span className="text-base font-semibold tracking-tight">Asta</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-[--color-accent]" href="#features">Features</a>
          <a className="hover:text-[--color-accent]" href="#about">About</a>
          <a className="hover:text-[--color-accent]" href="#testimonials">Testimonials</a>
          <a className="hover:text-[--color-accent]" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-md border border-black/10 hover:border-black/20">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-md bg-[--color-accent] text-white hover:opacity-90">Get Started</button>
        </div>
      </div>
    </header>
  );
}


