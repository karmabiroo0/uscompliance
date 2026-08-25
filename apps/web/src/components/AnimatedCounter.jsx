import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export default function AnimatedCounter({ finalValue, label, icon: Icon, suffix = "+" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toLocaleString();
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(finalValue);
      setHasAnimated(true);
    }
  }, [isInView, finalValue, springValue, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-lg border border-border/50 hover:-translate-y-1 transition-transform duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="flex items-baseline gap-1 mb-2">
        <motion.span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          {displayValue}
        </motion.span>
        <span className="text-3xl font-bold text-secondary">{suffix}</span>
      </div>
      <span className="text-sm md:text-base font-medium text-muted-foreground text-center">
        {label}
      </span>
    </motion.div>
  );
}