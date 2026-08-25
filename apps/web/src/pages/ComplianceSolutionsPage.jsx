import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, BookOpen, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ComplianceSolutionsPage() {
  const solutions = [
    {
      title: "Safety Management Controls",
      desc: "Implement robust internal controls, hiring protocols, and safety manuals to pass any DOT investigation.",
      icon: Shield
    },
    {
      title: "CSA Score Recovery",
      desc: "Analyze BASIC percentiles and file DataQ challenges to remove incorrect violations from your record.",
      icon: AlertTriangle
    },
    {
      title: "Driver Training Programs",
      desc: "Continuous education modules covering HOS, cargo securement, and defensive driving.",
      icon: BookOpen
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance Solutions - USA Compliance</title>
        <meta name="description" content="Advanced compliance strategies, safety plans, and CSA score recovery." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="bg-primary py-20">
          <div className="container-custom text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Strategic Compliance Solutions</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Beyond basic registration, we build the safety infrastructure your fleet needs to scale securely.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((sol, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border p-8 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <sol.icon className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{sol.title}</h3>
                  <p className="text-muted-foreground">{sol.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Ready to secure your fleet?</h2>
            <p className="text-lg text-muted-foreground">
              Don't wait for an intervention letter. Implement strong safety controls today.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Speak to a Safety Expert</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}