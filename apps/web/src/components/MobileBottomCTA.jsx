import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function MobileBottomCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-r from-secondary to-highlight p-4 shadow-lg"
    >
      <div className="flex gap-3">
        <Link
          to="/contact"
          className="flex-1 bg-white text-secondary font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 active:scale-95"
        >
          Get Quote
        </Link>
        <a
          href="tel:+1234567890"
          className="flex items-center justify-center bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}

export default MobileBottomCTA;