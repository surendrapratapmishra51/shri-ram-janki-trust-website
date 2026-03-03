import React, { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Service', path: '#service' },
    { name: 'Contact Us', path: '#contact' }
  ]

  return (
    <nav className="bg-red-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo/Brand - Left Side (Mobile me left me rahega) */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            BABHNAN
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-white/90 hover:text-white text-base lg:text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Donate Button - Right Side (Desktop) */}
          <button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-5 py-2 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm lg:text-base">
            Donate Now
          </button>

          {/* Hamburger Menu Button - Right Side Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-red-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="py-2 space-y-1 border-t border-red-800">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="block py-2.5 px-4 text-white hover:text-white hover:bg-red-800 font-medium rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Donate Button */}
            <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-4 py-2.5 rounded-md transition-all duration-200">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}