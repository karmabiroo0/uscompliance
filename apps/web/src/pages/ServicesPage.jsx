import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, FileCheck, ShieldAlert, BarChart3, Database, Calendar } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const services = [
    {
      title: "DOT Authority Setup",
      desc: "Complete registration packages to establish your USDOT number safely and accurately.",
      icon: Truck,
      benefits: ["Fast Processing", "Error-Free Filing", "Status Tracking"]
    },
    {
      title: "Driver File Management",
      desc: "Automated tracking for physicals, licenses, and background checks to avoid fines.",
      icon: FileCheck,
      benefits: ["Digital Storage", "Expiry Alerts", "Audit-Ready"]
    },
    {
      title: "Drug & Alcohol Consortium",
      desc: "Random testing management that fulfills 49 CFR Part 382 requirements.",
      icon: ShieldAlert,
      benefits: ["Random Selection", "Nationwide Clinics", "MRO Review"]
    },
    {
      title: "IFTA Fuel Tax Reporting",
      desc: "Accurate quarterly fuel tax preparation to keep your fleet in good standing.",
      icon: BarChart3,
      benefits: ["Data Intake", "Tax Calculation", "State Filing"]
    },
    {
      title: "Safety Audit Preparation",
      desc: "Proactive reviews of your safety management controls to guarantee FMCSA success.",
      icon: Database,
      benefits: ["Mock Audits", "Gap Analysis", "Action Plans"]
    },
    {
      title: "Hours of Service (HOS)",
      desc: "Logbook auditing and ELD data review to minimize driver violations.",
      icon: Calendar,
      benefits: ["Log Review", "Driver Coaching", "Violation Reports"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance Services - USA Compliance</title>
        <meta name="description" content="Explore our full range of DOT compliance and fleet management services." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722811-9d4b74ed0256?q=80&w=2070')] opacity-10 bg-cover bg-center" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Our Compliance Services</h1>
            <p className="text-lg text-primary-foreground/80">
              End-to-end solutions designed to protect your authority and simplify your operations.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col h-full bg-card border rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.desc}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full mt-auto">
                    <Link to="/contact">Request Service</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}