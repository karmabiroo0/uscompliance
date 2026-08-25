import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function RegistrationsPage() {
  const { toast } = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "A compliance specialist will contact you shortly to begin your registration.",
    });
    e.target.reset();
  };

  const timeline = [
    {
      step: 1,
      title: "Initial Application",
      desc: "We gather your core business details and determine exact federal/state requirements."
    },
    {
      step: 2,
      title: "Filing Submission",
      desc: "Our team submits your MC/DOT paperwork to the FMCSA directly without errors."
    },
    {
      step: 3,
      title: "BOC-3 & Insurance",
      desc: "We file your process agent designation and guide you through insurance requirements."
    },
    {
      step: 4,
      title: "Authority Activation",
      desc: "After the mandatory protest period, your operating authority is officially granted."
    }
  ];

  return (
    <>
      <Helmet>
        <title>MC & DOT Registration - USA Compliance</title>
        <meta name="description" content="Seamless MC and DOT number registration processing." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="bg-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Fast-Track Your Operating Authority</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We eliminate the guesswork from FMCSA applications, ensuring your registration is approved without costly delays.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">How We Launch Your Fleet</h2>
            </div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-2xl font-bold text-secondary-foreground shadow-lg">
                    0{item.step}
                  </div>
                  <div className="flex-1 bg-card border p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Lead Form */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl">
            <div className="bg-card shadow-xl rounded-2xl p-8 md:p-12 border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">Start Your Registration</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll send you a custom registration plan.</p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required placeholder="Jane" className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required placeholder="Doe" className="bg-background text-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" required placeholder="Logistics LLC" className="bg-background text-foreground" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="(555) 123-4567" className="bg-background text-foreground" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14 bg-secondary hover:bg-secondary/90 text-white">
                  Get My Free Action Plan
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}