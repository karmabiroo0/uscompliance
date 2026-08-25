import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Map, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us - USA Compliance</title>
        <meta name="description" content="USA Compliance is a nationwide compliance, safety, DOT, FMCSA, and MC authority solutions provider." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[80dvh] flex items-center justify-center pt-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
          
          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Shield className="absolute top-1/4 left-1/4 w-16 h-16 text-secondary/20 animate-float" />
            <Map className="absolute bottom-1/3 right-1/4 w-20 h-20 text-white/10 animate-float-delayed" />
            <CheckCircle className="absolute top-1/3 right-1/3 w-12 h-12 text-secondary/20 animate-float" />
          </div>

          <div className="container-custom relative z-10 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                About <span className="text-secondary">USA Compliance</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                USA Compliance is a nationwide compliance, safety, DOT, FMCSA, and MC authority solutions provider committed to helping businesses stay compliant, safe, and growth-ready across the United States.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 h-14 px-8 text-lg rounded-xl glow-button w-full sm:w-auto">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 h-14 px-8 text-lg rounded-xl backdrop-blur-sm w-full sm:w-auto">
                  <Link to="/about-us/our-story">Meet Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Stats Section */}
        <section className="section-padding bg-muted/30 relative -mt-10 z-20 rounded-t-[3rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <AnimatedCounter finalValue={10} label="Years Average Team Experience" icon={Users} />
              <AnimatedCounter finalValue={5000} label="Registrations Completed" icon={CheckCircle} />
              <AnimatedCounter finalValue={25000} label="Safety Audits" icon={Shield} />
              <AnimatedCounter finalValue={50} label="States Covered" icon={Map} />
              <AnimatedCounter finalValue={24} label="Client Support" icon={Clock} suffix="/7" />
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Our Story', desc: 'Learn how we started and grew into a national leader.', path: '/about-us/our-story' },
                { title: 'Mission & Values', desc: 'Discover the principles that drive our daily operations.', path: '/about-us/mission' },
                { title: 'Why Choose Us', desc: 'See what sets us apart from other compliance providers.', path: '/about-us/why-choose-us' }
              ].map((item, idx) => (
                <Link key={idx} to={item.path} className="group block p-8 rounded-2xl bg-muted hover:bg-secondary/5 border border-transparent hover:border-secondary/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.desc}</p>
                  <span className="inline-flex items-center font-semibold text-secondary">
                    Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}