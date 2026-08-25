import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function MissionValuesPage() {
  const values = [
    {
      title: 'CARE',
      description: 'We prioritize the safety, compliance, and long-term success of every client. Your business is our business.',
      icon: Heart,
      colSpan: 'md:col-span-2 lg:col-span-3' // Make the first one span full width to break symmetry
    },
    {
      title: 'PROTECT',
      description: 'We protect businesses from violations, penalties, and operational risk through proactive management.',
      icon: Shield,
      colSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      title: 'GROW',
      description: 'We help businesses scale legally and confidently, removing regulatory roadblocks to expansion.',
      icon: TrendingUp,
      colSpan: 'md:col-span-1 lg:col-span-2'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mission & Values - USA Compliance</title>
        <meta name="description" content="Our core values: Care, Protect, and Grow." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Mission & Values</h1>
              <p className="text-xl text-muted-foreground">
                Everything we do is driven by three core principles designed to support your operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className={`group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${value.colSpan}`}
                >
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">{value.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {value.description}
                    </p>
                  </div>
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