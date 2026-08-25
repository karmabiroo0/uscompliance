import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CompliancePricingSection() {
  const plans = [
    {
      name: "Basic Compliance",
      price: "$299",
      period: "/month",
      desc: "Essential compliance maintenance for small operations.",
      features: [
        "2 Consultations per month",
        "Monthly compliance calendar",
        "Basic documentation templates",
        "Email support"
      ],
      cta: "Start Basic Plan",
      link: "/contact",
      highlight: false
    },
    {
      name: "Professional Package",
      price: "$799",
      period: "/month",
      desc: "Comprehensive protection for growing businesses.",
      features: [
        "Unlimited consultations",
        "Quarterly mock audits",
        "Full documentation management",
        "Safety training coordination",
        "Priority phone & email support"
      ],
      cta: "Start Professional Plan",
      link: "/services/compliance-subscription",
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise Fleet",
      price: "Custom",
      period: "",
      desc: "Tailored solutions for large-scale operations.",
      features: [
        "Dedicated compliance officer",
        "24/7 priority support",
        "Custom software integration",
        "Multi-site management",
        "On-site training & audits"
      ],
      cta: "Get Custom Quote",
      link: "/contact",
      highlight: false
    }
  ];

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Compliance Packages</h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing for ongoing peace of mind. We also offer one-time registration plans ranging from $499 to $1,299.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl p-8 h-full flex flex-col ${
                plan.highlight 
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105 border border-secondary/30 z-10' 
                  : 'bg-card text-card-foreground shadow-lg border border-border'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`font-medium ${plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-secondary' : 'text-secondary'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                variant={plan.highlight ? "default" : "outline"}
                className={`w-full h-12 text-base ${
                  plan.highlight 
                    ? 'bg-secondary hover:bg-secondary/90 text-white glow-button border-none' 
                    : 'border-border hover:bg-muted'
                }`}
              >
                <Link to={plan.link}>
                  {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}