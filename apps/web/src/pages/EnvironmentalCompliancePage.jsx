import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, CheckCircle, FileText, Droplets, Wind } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ConsultationModal from '@/components/ConsultationModal.jsx';

export default function EnvironmentalCompliancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subServices = [
    "EPA Tier II Reporting",
    "Toxic Release Inventory (TRI)",
    "SPCC Plan Development",
    "Stormwater Permitting (SWPPP)",
    "Hazardous Waste Management (RCRA)",
    "Air Quality Permitting (Title V)",
    "Wastewater Discharge Permits",
    "Environmental Site Assessments (Phase I/II)"
  ];

  const faqs = [
    { q: "Who needs to file a Tier II report?", a: "Facilities storing hazardous chemicals above specific thresholds (usually 10,000 lbs for OSHA hazardous chemicals, or lower for Extremely Hazardous Substances) must file annually by March 1st." },
    { q: "What is an SPCC plan?", a: "A Spill Prevention, Control, and Countermeasure plan is required by the EPA for facilities that store large quantities of oil and could reasonably discharge into navigable waters." },
    { q: "How often do environmental permits need renewal?", a: "It varies by permit type and state. Air permits might be every 5 years, while stormwater permits often require annual fees and periodic renewals." },
    { q: "Can you help with hazardous waste disposal?", a: "We help classify your waste, ensure proper labeling and storage, and manage the manifest tracking system to ensure RCRA compliance." }
  ];

  return (
    <>
      <Helmet>
        <title>Environmental Compliance Services - USA Compliance</title>
        <meta name="description" content="Expert EPA reporting, SPCC plans, and environmental permitting services." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1415569403065-172000f48eec?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" 
            />
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Environmental Compliance
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Navigate complex EPA regulations, secure necessary permits, and implement sustainable environmental management systems.
            </p>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-secondary hover:bg-secondary/90 text-white mt-4 glow-button">
              Get Free Consultation
            </Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Protect Your Business & The Environment</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Environmental regulations at the federal, state, and local levels are constantly evolving. Our environmental specialists ensure your facility maintains compliance with the Clean Air Act, Clean Water Act, RCRA, and EPCRA, preventing massive fines and operational shutdowns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {subServices.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-muted p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <FileText className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">EPA Reporting</h3>
                    <p className="text-sm text-muted-foreground">Accurate, on-time Tier II and TRI submissions.</p>
                  </div>
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Droplets className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Water & Spills</h3>
                    <p className="text-sm text-muted-foreground">SWPPP and SPCC plan development.</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Wind className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Air Quality</h3>
                    <p className="text-sm text-muted-foreground">Emissions tracking and Title V permitting.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16">Our Implementation Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { title: "Site Assessment", desc: "Evaluate chemical inventory, emissions, and waste streams." },
                { title: "Permit Strategy", desc: "Identify required permits and develop a filing timeline." },
                { title: "Plan Development", desc: "Draft SPCC, SWPPP, and waste management plans." },
                { title: "Filing & Maintenance", desc: "Submit reports to agencies and maintain ongoing records." }
              ].map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl shadow-sm border">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/services/osha-compliance" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">OSHA Compliance</h3>
                <p className="text-primary-foreground/70 text-sm">Ensure workplace safety alongside environmental goals.</p>
              </Link>
              <Link to="/services/industrial-hygiene" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Industrial Hygiene</h3>
                <p className="text-primary-foreground/70 text-sm">Indoor air quality and exposure monitoring.</p>
              </Link>
              <Link to="/services/compliance-subscription" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Compliance as a Service</h3>
                <p className="text-primary-foreground/70 text-sm">Ongoing monthly environmental management.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
}