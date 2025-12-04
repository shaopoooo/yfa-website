import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於妍發', path: '/about' },
    { name: '電子事業', path: '/electronics' },
    { name: '光電事業', path: '/opto' },
    { name: '生技農業', path: '/biotech' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
        : 'bg-white/50 backdrop-blur-sm py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg shadow-lg group-hover:scale-110 transition duration-300"></div>
            Y-FA<span className="font-light text-slate-500">TECH</span>
          </Link>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-700 font-bold' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/investor" className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-slate-900 hover:bg-blue-700 transition-colors rounded-full shadow-md">
              Investor
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-blue-600 transition">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`text-lg py-3 border-b border-slate-100 ${
                    location.pathname === link.path ? 'text-blue-700 font-bold' : 'text-slate-600'
                }`}
            >
              {link.name}
            </Link>
          ))}
           <Link to="/investor" onClick={() => setIsOpen(false)} className="text-lg py-3 text-slate-600">
              投資人專區
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;