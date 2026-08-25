import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TestTube, CheckCircle, Activity, Ear, Wind } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ConsultationModal from '@/components/ConsultationModal.jsx';

export default function IndustrialHygienePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subServices = [
    "Air Sampling & Monitoring",
    "Noise Exposure Assessments",
    "Indoor Air Quality (IAQ) Testing",
    "Ergonomic Assessments",
    "Respirator Fit Testing",
    "Chemical Exposure Monitoring",
    "Mold & Moisture Investigations",
    "Ventilation System Evaluations"
  ];

  const faqs = [
    { q: "When is air sampling required?", a: "Air sampling is required when employees may be exposed to hazardous chemicals (like silica, lead, or VOCs) at levels approaching OSHA Permissible Exposure Limits (PELs)." },
    { q: "What does a noise assessment involve?", a: "We use dosimeters worn by employees to measure personal noise exposure over a full shift to determine if a Hearing Conservation Program is required." },
    { q: "How often should respirator fit testing be done?", a: "OSHA requires fit testing before initial use of a tight-fitting respirator, whenever a different respirator facepiece is used, and at least annually thereafter." },
    { q: "What causes poor Indoor Air Quality?", a: "Common causes include inadequate ventilation, mold/moisture issues, off-gassing from building materials, and outdoor pollutants entering the building." }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Hygiene & Testing - USA Compliance</title>
        <meta name="description" content="Professional industrial hygiene testing, air sampling, and noise exposure assessments." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628147515997-25d9fd0cbe6d?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" 
            />
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Industrial Hygiene & Testing
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Anticipate, recognize, evaluate, and control workplace environmental factors that may cause sickness or impaired health.
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Science-Based Health Protection</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our Certified Industrial Hygienists (CIHs) use state-of-the-art equipment to quantify employee exposures to chemical, physical, and biological hazards. We provide actionable data and engineering control recommendations to keep your workforce safe and your facility compliant.
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
                    <Wind className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Air Quality</h3>
                    <p className="text-sm text-muted-foreground">Personal and area sampling for contaminants.</p>
                  </div>
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Ear className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Noise Dosimetry</h3>
                    <p className="text-sm text-muted-foreground">Hearing conservation program compliance.</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-card border p-6 rounded-2xl shadow-sm">
                    <Activity className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold mb-2">Ergonomics</h3>
                    <p className="text-sm text-muted-foreground">Preventing musculoskeletal disorders.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16">Our Testing Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { title: "Initial Survey", desc: "Identify potential hazards and determine sampling strategy." },
                { title: "Field Monitoring", desc: "Deploy equipment to collect personal and area samples." },
                { title: "Lab Analysis", desc: "Samples analyzed by AIHA-accredited laboratories." },
                { title: "Reporting & Controls", desc: "Detailed report comparing results to PELs with mitigation strategies." }
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
                <p className="text-primary-foreground/70 text-sm">Integrate testing results into safety programs.</p>
              </Link>
              <Link to="/services/environmental-compliance" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Environmental Compliance</h3>
                <p className="text-primary-foreground/70 text-sm">Manage emissions and hazardous materials.</p>
              </Link>
              <Link to="/services/compliance-subscription" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <h3 className="font-bold text-lg mb-2">Compliance as a Service</h3>
                <p className="text-primary-foreground/70 text-sm">Annual testing and monitoring schedules.</p>
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