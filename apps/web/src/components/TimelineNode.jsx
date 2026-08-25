import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineNode({ title, description, isActive, index }) {
  return (
    <div className="relative flex flex-col items-center w-full md:w-64 shrink-0 group">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border -z-10" />
      
      {/* Connecting Line (Mobile) */}
      <div className="md:hidden absolute top-6 left-6 w-0.5 h-full bg-border -z-10" />

      {/* Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, type: "spring" }}
        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-300 ${
          isActive 
            ? 'bg-secondary border-secondary/30 text-white shadow-[0_0_15px_rgba(var(--secondary),0.5)]' 
            : 'bg-card border-border text-muted-foreground group-hover:border-secondary/50'
        }`}
      >
        <span className="font-bold text-sm">{index + 1}</span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.1 }}
        className="mt-6 md:mt-8 p-6 bg-card rounded-xl border border-border/50 shadow-sm w-full md:w-auto text-center md:text-left hover:shadow-md transition-shadow"
      >
        <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
}