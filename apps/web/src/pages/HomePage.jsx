import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, FileText, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import ComplianceProcessSection from '@/components/ComplianceProcessSection.jsx';
import CompliancePricingSection from '@/components/CompliancePricingSection.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';

export default function HomePage() {
  const features = [{
    title: "DOT Registration & Authority",
    desc: "Fast-track your MC and DOT numbers to get on the road legally and efficiently.",
    icon: Truck
  }, {
    title: "Audit & Safety Preparation",
    desc: "Ace your compliance reviews with our comprehensive safety management plans.",
    icon: ShieldCheck
  }, {
    title: "Ongoing Compliance Monitoring",
    desc: "Stay ahead of regulations with automated driver file management and alerts.",
    icon: FileText
  }];

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>USA Compliance - Complete Trucking & Regulatory Solutions</title>
        <meta name="description" content="Nationwide DOT, OSHA, and Environmental compliance services for businesses." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/95 z-0" />
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/30 blur-[100px] rounded-full z-0 pointer-events-none" />

          <div className="container-custom relative z-10 py-20 flex flex-col items-center justify-center">
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl space-y-8 flex flex-col items-center"
            >
              <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium text-white">#1 Rated Compliance Partner</span>
              </motion.div>
              
              <motion.h1 variants={heroItemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Keep your business <span className="text-secondary">compliant</span> and protected.
              </motion.h1>
              
              <motion.p variants={heroItemVariants} className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Expert DOT registrations, OSHA safety training, and environmental compliance designed to protect your operations across all 50 states.
              </motion.p>
              
              <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
                <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 h-14 px-8 text-lg rounded-xl glow-button w-full sm:w-auto">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 h-14 px-8 text-lg rounded-xl backdrop-blur-sm w-full sm:w-auto">
                  <Link to="/services" className="flex items-center justify-center gap-2">
                    <PlayCircle className="w-5 h-5" /> Explore Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Prop (Zig-Zag) */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need to run legally</h2>
              <p className="text-lg text-muted-foreground">From a single truck to a massive industrial facility, we handle the paperwork so you can handle the business.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070" alt="Professional reviewing compliance documents" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Bulletproof Audit Protection</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Don't let a surprise audit disrupt your operations. Our proactive safety management plans ensure your files, logs, and training records are flawlessly organized.
                </p>
                <ul className="space-y-3 pt-4">
                  {['OSHA Safety Inspections', 'DOT Driver Qualification Files', 'Environmental Risk Assessments'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle className="w-5 h-5 text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="link" className="px-0 pt-4 text-secondary hover:text-secondary/80">
                  <Link to="/services/compliance-subscription">Learn more about CaaS <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Compliance Solutions</h2>
                <p className="text-lg text-muted-foreground">Tailored packages that remove the friction from federal and state filings.</p>
              </div>
              <Button asChild variant="outline" className="border-border hover:bg-muted">
                <Link to="/services">View All 80+ Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card-elevated flex flex-col h-full hover-lift">
                  <feature.icon className="w-10 h-10 text-secondary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">{feature.desc}</p>
                  <Link to="/services" className="font-semibold text-secondary flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ComplianceProcessSection />
        
        <CompliancePricingSection />

        <ReviewsSection />

      </main>
      <Footer />
    </>
  );
}