import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about-us',
      dropdown: [
        { name: 'About USA Compliance', path: '/about-us' },
        { name: 'Our Story', path: '/about-us/our-story' },
        { name: 'Our Mission & Values', path: '/about-us/mission' },
        { name: 'Why Choose Us', path: '/about-us/why-choose-us' },
        { name: 'Our People', path: '/about-us/our-people' },
        { name: 'Our Process', path: '/about-us' },
        { name: 'Careers', path: '/about-us' },
        { name: 'Service Areas', path: '/about-us' },
        { name: 'Testimonials', path: '/about-us' },
        { name: 'FAQs', path: '/about-us' }
      ]
    },
    { 
      name: 'Compliance Services', 
      path: '/services',
      dropdown: [
        { name: 'All Services Overview', path: '/services' },
        { name: 'OSHA Compliance', path: '/services/osha-compliance' },
        { name: 'Environmental Compliance', path: '/services/environmental-compliance' },
        { name: 'Industrial Hygiene Testing', path: '/services/industrial-hygiene' },
        { name: 'DOT & FMCSA Compliance', path: '/services/dot-compliance' },
        { name: 'MC Authority Services', path: '/services/mc-registration' },
        { name: 'Compliance as a Service (CaaS)', path: '/services/compliance-subscription' }
      ]
    },
    { name: 'Market News', path: '/market-news' },
    { name: 'Blog & Resources', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10 shadow-lg"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[100px] lg:w-[150px] h-auto object-contain logo-fade-in group-hover:opacity-90 transition-all duration-300 brightness-0 invert" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button className={`flex items-center gap-1 font-medium transition-colors py-2 text-white/90 hover:text-white ${
                    location.pathname.startsWith(item.path) && item.path !== '/' ? 'text-white font-semibold' : 
                    location.pathname === item.path ? 'text-white font-semibold' : ''
                  }`}>
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors py-2 text-white/90 hover:text-white ${
                      location.pathname.startsWith(item.path) && item.path !== '/' ? 'text-white font-semibold' :
                      location.pathname === item.path ? 'text-white font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                <AnimatePresence>
                  {item.dropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-primary rounded-xl shadow-2xl border border-white/10 overflow-hidden py-2"
                    >
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.path}
                          className="block px-5 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-white text-primary hover:bg-gray-100 hover:text-primary/90 glow-button rounded-full px-6 font-bold transition-all duration-300">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors text-white hover:text-white/80"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 overflow-hidden mt-4 rounded-2xl bg-primary"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-6 py-4 font-medium transition-colors text-white hover:bg-white/10"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-white/5"
                            >
                              {item.dropdown.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  className="block px-10 py-3 text-sm transition-colors text-white/90 hover:text-white hover:bg-white/10"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-6 py-4 font-medium transition-colors text-white hover:bg-white/10"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="p-6">
                  <Button asChild className="w-full bg-white text-primary hover:bg-gray-100 hover:text-primary/90 rounded-full font-bold transition-all duration-300">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;