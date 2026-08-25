import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TimelineNode from '@/components/TimelineNode.jsx';

export default function OurStoryPage() {
  const milestones = [
    { title: 'Founded', description: 'Started with a vision to simplify compliance for small fleets.' },
    { title: 'Expanded Nationwide', description: 'Grew to serve all 50 states with dedicated regional experts.' },
    { title: 'Added Fleet Compliance Services', description: 'Expanded service offerings to include comprehensive fleet management.' },
    { title: 'Added OSHA / Environmental Division', description: 'Broadened expertise to cover industrial and workplace safety.' },
    { title: 'Became National Compliance Partner', description: 'Industry recognition as a top-tier regulatory solutions provider.' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story - USA Compliance</title>
        <meta name="description" content="Learn about the history and mission of USA Compliance." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-4xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-8"
            >
              Our Story: <span className="text-secondary">Building Trust Through Compliance</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg mx-auto text-muted-foreground text-left md:text-center"
            >
              <p className="mb-6">
                USA Compliance was founded to simplify DOT, MC, OSHA, and regulatory compliance. We recognized early on that businesses were struggling with complicated FMCSA registrations, safety audit preparation, and the constant risk of compliance failures.
              </p>
              <p>
                Our mission is to help trucking companies, logistics providers, and industrial businesses navigate the complex web of federal and state regulations. By removing the administrative burden, we allow our clients to focus on what they do best: growing their business safely and legally.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background overflow-hidden">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-4 px-4 md:px-0">
              {milestones.map((milestone, idx) => (
                <TimelineNode 
                  key={idx}
                  index={idx}
                  title={milestone.title}
                  description={milestone.description}
                  isActive={idx === milestones.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}