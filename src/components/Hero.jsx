import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const {pathname} = useLocation();
  console.log(pathname);
  const imgSrc = pathname === '/' ? '/images/hero.jpg' : '/images/project-president.jpg';
  return (
    <section className="relative min-h-[90vh]">
      <img src={imgSrc} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />

      {/* <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-32 ml-40 px-2 py-3 flex items-center justify-between text-white">
          <a href="#" className="flex items-center gap-3 select-none">
            <img src="src/assets/logo.svg" alt="ASTA" className="h-16 w-auto hidden sm:block" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            className="p-2 rounded-md active:scale-95 transition focus:outline-none"
          >
            {menuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary border-none" />}
          </button>
        </div>

        {menuOpen && (
          <>
      
            <button aria-label="Close" onClick={() => setMenuOpen(false)} className="absolute inset-0 -z-10" />
            <nav className="absolute right-6 top-[72px] bg-white/95 text-gray-900 rounded-md shadow-xl w-56 overflow-hidden">
              <a href="#features" className="block px-4 py-3 hover:bg-gray-100">Features</a>
              <a href="#about" className="block px-4 py-3 hover:bg-gray-100">About</a>
              <a href="#testimonials" className="block px-4 py-3 hover:bg-gray-100">Testimonials</a>
              <a href="#contact" className="block px-4 py-3 hover:bg-gray-100">Contact</a>
            </nav>
          </>
        )}
      </div> */}
    </section>

  );
}


