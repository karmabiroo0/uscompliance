import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Settings, ShieldCheck } from 'lucide-react';

export default function ComplianceProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Initial Consultation",
      desc: "We analyze your operations to understand your specific regulatory and compliance needs."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Assessment",
      desc: "A deep dive into your current state to identify gaps, risks, and required filings."
    },
    {
      icon: Settings,
      title: "Filing & Implementation",
      desc: "We execute the necessary paperwork, training, and system setups to get you compliant."
    },
    {
      icon: ShieldCheck,
      title: "Ongoing Monitoring",
      desc: "Continuous support, audits, and updates to ensure you stay compliant year-round."
    }
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Compliance Process</h2>
          <p className="text-lg text-muted-foreground">
            A streamlined, four-step methodology designed to take you from uncertainty to complete regulatory confidence.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-secondary/30 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-secondary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}