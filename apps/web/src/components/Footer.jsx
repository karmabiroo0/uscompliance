import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
function Footer() {
  return <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="block mb-4">
              <img src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" alt="USA Compliance Logo" className="w-[150px] h-auto object-contain logo-fade-in" />
            </Link>
            <p className="text-primary-foreground/90 font-medium text-lg">USA Compliance</p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs">
              Complete DOT, MC, and FMCSA compliance solutions ensuring trucking companies stay legal, safe, and road-ready.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-white transition-colors">Resources & Blog</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/registrations" className="text-primary-foreground/70 hover:text-white transition-colors">MC & DOT Registration</Link></li>
              <li><Link to="/compliance-solutions" className="text-primary-foreground/70 hover:text-white transition-colors">Safety Audits</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-white transition-colors">Driver File Management</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-white transition-colors">IFTA Reporting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/70">521 Third St<br />Suite 101<br />Excelsior, MN 55331</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+12025034781" className="text-primary-foreground/70 hover:text-white transition-colors">(202)&nbsp; 417-8462</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@usacompliancesvc.com" className="text-primary-foreground/70 hover:text-white transition-colors">info@usacompliancesvc.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2010 USA Compliance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-primary-foreground/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-primary-foreground/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;