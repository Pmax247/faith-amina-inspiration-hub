
import { Link } from "react-router-dom";
import { Youtube, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">LIFE WITH FAITH AMINAHO</h2>
            <p className="text-gray-300 mb-4">
              Discover practical advice for immigrants in the UK, personal development insights, and creative inspiration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@LifeWithFaithAminaho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition"
                aria-label="YouTube Channel"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="mailto:info@lifewithfaithaminaho.com" 
                className="text-white hover:text-brand-red transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-red transition flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-red transition flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-red transition flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Join our journey and never miss a new video! New content published every Friday.
            </p>
            <Button 
              className="bg-brand-red hover:bg-red-600 text-white flex items-center gap-2"
              asChild
            >
              <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
                <span>Subscribe Now</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} LIFE WITH FAITH AMINAHO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
