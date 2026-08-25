import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle, FileCheck, ShieldAlert, Calendar } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ConsultationModal from '@/components/ConsultationModal.jsx';

export default function DOTCompliancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subServices = [
    "Driver Qualification Files (DQF)",
    "Hours of Service (HOS) Auditing",
    "Drug & Alcohol Consortium",
    "Vehicle Maintenance Logs",
    "IFTA Fuel Tax Reporting",
    "CSA Score Management",
    "New Entrant Safety Audits",
    "DataQ Challenges"
  ];

  const faqs = [
    { q: "What goes into a Driver Qualification File?", a: "A DQF must include the driver's application, MVRs, road test certificate, medical examiner's certificate, and annual review of driving record, among other documents." },
    { q: "How does the Drug & Alcohol Consortium work?", a: "We manage your random testing pool, ensuring you meet the FMCSA's required annual testing percentages (currently 50% for drugs, 10% for alcohol) and handle all recordkeeping." },
    { q: "Can you help improve my CSA score?", a: "Yes. We analyze your BASIC percentiles, identify root causes of violations, implement corrective training, and file DataQ challenges for incorrect citations." },
    { q: "What is a New Entrant Safety Audit?", a: "Within the first 18 months of receiving DOT authority, the FMCSA will audit your safety management controls. We prepare your files to ensure you pass without losing your authority." }
  ];

  return (
    <>
      <Helmet>
        <title>DOT & FMCSA Compliance - USA Compliance</title>
        <meta name="description" content="Complete DOT compliance management, driver files, HOS auditing, and CSA score improvement." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1698201029511-cc23ebeeeba0?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" 
            />
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              DOT & FMCSA Compliance
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Keep your fleet on the road. We manage the paperwork, audits, and driver files so you can focus on freight.
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Bulletproof Fleet Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The FMCSA enforces strict regulations on motor carriers. A single failed audit can result in conditional ratings, massive fines, or out-of-service orders. Our dedicated DOT specialists act as your off-site safety department, managing every aspect of your fleet's compliance.
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
                    <FileCheck className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Driver Files</h3>
                    <p className="text-sm text-muted-foreground">Automated tracking of medicals and MVRs.</p>
                  </div>
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Calendar className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">HOS & ELD</h3>
                    <p className="text-sm text-muted-foreground">Log auditing to prevent fatigue violations.</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <ShieldAlert className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Audit Defense</h3>
                    <p className="text-sm text-muted-foreground">Preparation and representation for DOT reviews.</p>
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
                { title: "Fleet Assessment", desc: "Review current CSA scores, driver files, and maintenance records." },
                { title: "System Setup", desc: "Digitize files and enroll drivers in the drug testing consortium." },
                { title: "Corrective Action", desc: "Fix missing documentation and file DataQ challenges." },
                { title: "Continuous Monitoring", desc: "Monthly audits of ELD logs and proactive expiry alerts." }
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
              <Link to="/services/mc-registration" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">MC Authority</h3>
                <p className="text-primary-foreground/70 text-sm">Get your operating authority set up correctly.</p>
              </Link>
              <Link to="/services/osha-compliance" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">OSHA Compliance</h3>
                <p className="text-primary-foreground/70 text-sm">Warehouse and terminal safety programs.</p>
              </Link>
              <Link to="/services/compliance-subscription" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Compliance as a Service</h3>
                <p className="text-primary-foreground/70 text-sm">Outsource your entire safety department.</p>
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