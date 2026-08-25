import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, UserCheck, Zap, Map, ShieldCheck, Calendar, FileSearch, AlertCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function WhyChooseUsPage() {
  const reasons = [
    { title: 'Flat Transparent Pricing', desc: 'No hidden fees or surprise charges. You know exactly what you pay for.', icon: DollarSign },
    { title: 'Dedicated Compliance Specialist', desc: 'A single point of contact who knows your business inside and out.', icon: UserCheck },
    { title: 'Fast MC / DOT Processing', desc: 'Expedited filings to get your authority active as quickly as legally possible.', icon: Zap },
    { title: 'Nationwide Service', desc: 'Expertise across all 50 states, handling complex interstate regulations.', icon: Map },
    { title: 'Expert Audit Preparation', desc: 'Proactive mock audits and file organization to ensure you pass with flying colors.', icon: ShieldCheck },
    { title: 'Ongoing Monthly Support', desc: 'Continuous monitoring and updates so you never fall out of compliance.', icon: Calendar },
    { title: 'Real-Time Document Tracking', desc: 'Secure digital access to all your critical compliance files 24/7.', icon: FileSearch },
    { title: 'Emergency Compliance Support', desc: 'Rapid response team available when you face unexpected regulatory hurdles.', icon: AlertCircle }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>Why Choose Us - USA Compliance</title>
        <meta name="description" content="Discover why thousands of businesses trust USA Compliance." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Us</h1>
              <p className="text-xl text-muted-foreground">
                We don't just file paperwork; we build resilient compliance frameworks that protect your bottom line.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}