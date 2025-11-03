export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-[--color-muted] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Asta. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[--color-accent]">Privacy</a>
          <a href="#" className="hover:text-[--color-accent]">Terms</a>
          <a href="#" className="hover:text-[--color-accent]">Contact</a>
        </div>
      </div>
    </footer>
  );
}


