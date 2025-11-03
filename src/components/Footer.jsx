import Logo from '../assets/logo2.svg'

export default function Footer() {
  return (
    <footer className="bg-primary text-white w-full">
      <div className=" mx-auto px-6 sm:px-8 lg:px-28 py-12 lg:py-16">
        {/* Top row */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center sm:items-start gap-4">
            
            {/* Wordmark from assets */}
            <img src={Logo} alt="Asta" className="h-16 sm:h-20 w-auto select-none" draggable="false" />
          </div>

          {/* Right half: contact + policies (two columns even on small screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center sm:justify-start gap-8 md:gap-12">
            {/* Contact */}
            <div className="space-y-2 text-center sm:text-left">
              <a
                href="mailto:info@astaproperties.com"
                className="block text-white/85 hover:text-white underline underline-offset-4 decoration-white/50 transition-colors"
              >
                info@astaproperties.com
              </a>
              <a
                href="tel:+917550022222"
                className="block text-white/85 hover:text-white underline underline-offset-4 decoration-white/50 transition-colors"
              >
                +91 7550022222
              </a>
            </div>

            {/* Policies */}
            <div className="space-y-2 text-center sm:text-left">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/15 pt-8 flex flex-col flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="size-10 sm:w-16 sm:h-16 flex items-center justify-center border border-white/25 hover:border-white/40 transition-colors rounded-full"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="size-10 sm:w-16 sm:h-16 flex items-center justify-center border border-white/25 hover:border-white/40 transition-colors rounded-full"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/65 text-sm text-center sm:text-right">
            © 2025 AstaProperties, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}


