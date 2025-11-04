import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Prevent body scroll when menu is open and reset logo error
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setLogoError(false); // Reset logo error when menu opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#projects', label: 'Projects' },
    { path: '#contact', label: 'Contact' },
  ];
  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark shadow-lg' : 'bg-transparent'
        } ${isMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
    >
      <nav className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="z-50">
            <img
              src="/images/logo-white.png"
              alt="ASTA Properties"
              className="w-auto h-8 sm:h-10 md:h-12 lg:h-14"
              onError={() => setLogoError(true)}
            />
          </a>
            {/* Hamburger Menu Button - Hidden when menu is open */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
        </nav>
      </header>
      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary-dark z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: '#12193A' }}
      >
        <div className="relative h-full w-full">
          {/* Header Bar with Logo and Close Button */}
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-12 lg:pl-24 xl:pl-40 lg:pr-12 h-16 sm:h-20">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/images/logo-white.png"
                alt="ASTA Properties"
                className="w-auto h-8 sm:h-10 md:h-12 lg:h-14"
                onError={() => setLogoError(true)}
              />
            </a>
            {/* Close Button (X) - Only in menu overlay */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-accent-beige transition-colors duration-300 w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {/* Menu Items - Left Side */}
          <div className="absolute left-0 top-0 h-full w-full flex items-center">
            <div className="pl-10 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-50 pr-6 sm:pr-8">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-accent-beige transition-colors duration-300 font-heading font-normal leading-none tracking-normal text-[32px] sm:text-[36px] md:text-[40px]"
                    style={{
                      fontWeight: 400,
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      marginBottom: index < navLinks.length - 1 ? '1.5rem' : '0',
                      animationDelay: `${index * 0.1}s`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                    }}
              >
                {link.label}
              </a>
            ))}
              </nav>
            </div>
          </div>
          {/* City Skyline Illustration - Bottom Right */}
          <div
            className="absolute bottom-0 -right-20 sm:right-0 w-full md:w-1/2 lg:w-2/3 opacity-80"
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              opacity: isMenuOpen ? 0.8 : 0,
              transition: 'opacity 0.8s ease 0.3s',
            }}
          >
            <div style={{ width: '100%', height: 'auto', maxHeight: '100%' }}>
              <img
                src="/images/Group.svg"
                alt="City Skyline"
                className="w-full h-full object-contain"
                style={{ objectPosition: 'bottom right' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Header;