
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Youtube } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-lg md:text-xl font-bold text-brand-red">LIFE WITH</span>
            <span className="text-lg md:text-xl font-bold ml-1">FAITH AMINAHO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-brand-red' : 'text-black hover:text-brand-red transition'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-brand-red' : 'text-black hover:text-brand-red transition'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-brand-red' : 'text-black hover:text-brand-red transition'}`}
            >
              Contact
            </Link>
            <Button 
              className="bg-brand-red hover:bg-red-600 text-white flex items-center gap-2"
              asChild
            >
              <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
                <span>Subscribe</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 font-medium ${isActive('/') ? 'text-brand-red' : 'text-black'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 font-medium ${isActive('/about') ? 'text-brand-red' : 'text-black'}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 font-medium ${isActive('/contact') ? 'text-brand-red' : 'text-black'}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-brand-red hover:bg-red-600 text-white flex items-center justify-center gap-2"
              asChild
            >
              <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
                <span>Subscribe</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
