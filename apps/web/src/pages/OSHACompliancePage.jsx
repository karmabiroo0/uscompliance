import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle, ArrowRight, FileText, Users, ShieldAlert } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ConsultationModal from '@/components/ConsultationModal.jsx';

export default function OSHACompliancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subServices = [
    "OSHA 10 & 30 Hour Training",
    "Hazard Communication (HazCom)",
    "Lockout/Tagout (LOTO)",
    "Fall Protection Programs",
    "Forklift/PIT Certification",
    "Bloodborne Pathogens",
    "Confined Space Entry",
    "Personal Protective Equipment (PPE)"
  ];

  const faqs = [
    { q: "What triggers an OSHA inspection?", a: "Inspections are typically triggered by imminent danger situations, severe injuries/illnesses, worker complaints, referrals, or targeted inspections for high-hazard industries." },
    { q: "How often is safety training required?", a: "Many OSHA standards require annual refresher training (e.g., HazCom, Bloodborne Pathogens, LOTO), while others require training upon hire or when job duties change." },
    { q: "Do I need a written safety manual?", a: "Yes, if you have 10 or more employees, OSHA requires written safety plans for specific hazards present in your workplace." },
    { q: "What is the penalty for OSHA violations?", a: "Penalties can range from a few thousand dollars for serious violations to over $150,000 for willful or repeated violations per instance." },
    { q: "Can you represent us during an OSHA audit?", a: "Yes, our experts can provide on-site support and representation during an OSHA inspection to help mitigate citations." }
  ];

  return (
    <>
      <Helmet>
        <title>OSHA Compliance & Safety Training - USA Compliance</title>
        <meta name="description" content="Protect your workforce and avoid citations with our comprehensive OSHA compliance and safety training programs." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1690166444493-b3f5fbcd4762?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" 
            />
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HardHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              OSHA Compliance & Safety Training
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Protect your workforce, reduce liability, and ensure total compliance with federal and state OSHA regulations.
            </p>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-secondary hover:bg-secondary/90 text-white mt-4 glow-button">
              Get Free Consultation
            </Button>
          </div>
        </section>

        {/* Overview & Sub-services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Build a Culture of Safety</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Navigating OSHA regulations can be complex and time-consuming. Our certified safety professionals provide end-to-end support, from developing written safety programs to conducting on-site employee training. We help you identify hazards before they result in injuries or costly citations.
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
                    <h3 className="font-bold mb-2">Written Programs</h3>
                    <p className="text-sm text-muted-foreground">Custom safety manuals tailored to your facility.</p>
                  </div>
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Users className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">On-Site Training</h3>
                    <p className="text-sm text-muted-foreground">Engaging, certified instruction for your team.</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <ShieldAlert className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Mock Audits</h3>
                    <p className="text-sm text-muted-foreground">Identify and fix hazards before OSHA arrives.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16">Our Implementation Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { title: "Facility Walkthrough", desc: "We conduct a comprehensive hazard assessment of your site." },
                { title: "Program Development", desc: "Creation of custom written safety policies and procedures." },
                { title: "Employee Training", desc: "Execution of required safety training for all staff levels." },
                { title: "Ongoing Support", desc: "Regular audits, updates, and representation during inspections." }
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

        {/* FAQs */}
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

        {/* Related Services */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/services/industrial-hygiene" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Industrial Hygiene</h3>
                <p className="text-primary-foreground/70 text-sm">Air sampling and noise exposure testing.</p>
              </Link>
              <Link to="/services/environmental-compliance" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Environmental Compliance</h3>
                <p className="text-primary-foreground/70 text-sm">EPA reporting and hazardous waste management.</p>
              </Link>
              <Link to="/services/compliance-subscription" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Compliance as a Service</h3>
                <p className="text-primary-foreground/70 text-sm">Ongoing monthly safety management.</p>
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