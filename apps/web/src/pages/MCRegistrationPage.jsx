import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileCheck, Shield, Truck, ClipboardCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function MCRegistrationPage() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'mc-number',
      name: 'MC Number Registration',
      price: 280.00,
      icon: <FileCheck className="w-8 h-8 text-secondary" />,
      description: 'Complete setup of your Motor Carrier operating authority. Required for interstate commerce and hauling regulated freight.',
      features: ['OP-1 Application Filing', 'Authority Certificate', 'Federal Compliance Setup']
    },
    {
      id: 'boc3',
      name: 'BOC3 Process',
      price: 120.00,
      icon: <Shield className="w-8 h-8 text-secondary" />,
      description: 'Designation of process agents in all 50 states. A mandatory requirement before your MC authority can be activated.',
      features: ['All 50 States Covered', 'Instant Filing', 'Required for MC Activation']
    },
    {
      id: 'ucr',
      name: 'UCR Registration',
      price: 30.00,
      icon: <Truck className="w-8 h-8 text-secondary" />,
      description: 'Unified Carrier Registration filing for the current year. Required for all interstate carriers and brokers.',
      features: ['Annual Registration', 'Fee Calculation', 'Compliance Verification']
    },
    {
      id: 'dot-inspections',
      name: 'DOT Inspections',
      price: 185.00,
      icon: <ClipboardCheck className="w-8 h-8 text-secondary" />,
      description: 'Comprehensive DOT inspection services to ensure your vehicles meet all federal safety standards.',
      features: ['Full Vehicle Audit', 'Safety Compliance', 'Inspection Report']
    }
  ];

  const handleCheckout = (service) => {
    navigate(`/checkout?service=${encodeURIComponent(service.name)}&price=${service.price}`);
  };

  return (
    <>
      <Helmet>
        <title>MC Authority & Registration Services - USA Compliance</title>
        <meta name="description" content="Fast, error-free MC number registration, DOT numbers, and BOC-3 filings." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1630267693300-c8795f651cf1?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Registration & Authority Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Start your trucking company the right way. Select the services you need below to get compliant and on the road faster.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-secondary/10 p-4 rounded-xl">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-foreground">${service.price.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-foreground font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleCheckout(service)} 
                    className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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