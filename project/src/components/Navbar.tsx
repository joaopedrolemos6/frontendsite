import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo + Texto */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 md:h-12 mr-2"
            />
            <span
              className={`font-bold text-xl md:text-2xl ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              LICITUM
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {['services', 'about', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-dark hover:text-primary'
                    : 'text-white hover:text-gray-metal'
                } capitalize`}
              >
                {item === 'testimonials'
                  ? 'Depoimentos'
                  : item === 'services'
                  ? 'Serviços'
                  : item === 'about'
                  ? 'Sobre'
                  : 'Contato'}
              </button>
            ))}
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 absolute left-4 right-4 transition-all duration-200">
            <div className="flex flex-col space-y-3 px-4">
              {['services', 'about', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-dark font-medium py-2 hover:text-primary transition-colors text-left capitalize"
                >
                  {item === 'testimonials'
                    ? 'Depoimentos'
                    : item === 'services'
                    ? 'Serviços'
                    : item === 'about'
                    ? 'Sobre'
                    : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
