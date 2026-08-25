import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, HardHat, Leaf, TestTube, Truck, FileCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal.jsx';

export default function ComplianceServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Representative subset of the 86 services to demonstrate structure and premium UI
  const categories = [
    {
      id: "general",
      title: "General Compliance Services",
      icon: Shield,
      link: "/services/compliance-subscription",
      services: [
        { name: "Compliance Audits & Gap Analysis", desc: "Comprehensive review of current compliance status." },
        { name: "Regulatory Reporting", desc: "Timely submission of required federal and state reports." },
        { name: "Policy Development", desc: "Custom corporate compliance manuals and policies." },
        { name: "Recordkeeping Systems", desc: "Digital management of all compliance documentation." },
        { name: "Compliance as a Service (CaaS)", desc: "Ongoing subscription-based compliance management." }
      ]
    },
    {
      id: "osha",
      title: "OSHA & Safety Training",
      icon: HardHat,
      link: "/services/osha-compliance",
      services: [
        { name: "OSHA 10 & 30 Hour Training", desc: "Certified safety training for general industry and construction." },
        { name: "Hazard Communication (HazCom)", desc: "GHS compliant labeling and SDS management." },
        { name: "Lockout/Tagout (LOTO)", desc: "Energy control procedures and employee training." },
        { name: "Fall Protection", desc: "Site assessments and safety harness protocols." },
        { name: "Forklift/PIT Certification", desc: "Operator training and evaluation programs." },
        { name: "Bloodborne Pathogens", desc: "Exposure control plans and response training." }
      ]
    },
    {
      id: "environmental",
      title: "Environmental Compliance",
      icon: Leaf,
      link: "/services/environmental-compliance",
      services: [
        { name: "EPA Regulatory Reporting", desc: "Tier II, TRI, and Form R reporting services." },
        { name: "SPCC Plans", desc: "Spill Prevention, Control, and Countermeasure plans." },
        { name: "Stormwater Management (SWPPP)", desc: "Permitting and pollution prevention plans." },
        { name: "Hazardous Waste Management", desc: "RCRA compliance and manifest tracking." },
        { name: "Air Quality Permitting", desc: "Title V and minor source air permits." }
      ]
    },
    {
      id: "hygiene",
      title: "Industrial Hygiene & Testing",
      icon: TestTube,
      link: "/services/industrial-hygiene",
      services: [
        { name: "Air Sampling & Monitoring", desc: "Testing for VOCs, particulates, and heavy metals." },
        { name: "Noise Exposure Assessments", desc: "Dosimetry and hearing conservation programs." },
        { name: "Indoor Air Quality (IAQ)", desc: "Mold, ventilation, and comfort parameter testing." },
        { name: "Ergonomic Assessments", desc: "Workstation evaluations to prevent MSIs." },
        { name: "Respirator Fit Testing", desc: "Qualitative and quantitative fit testing." }
      ]
    },
    {
      id: "dot",
      title: "Trucking & DOT Services",
      icon: Truck,
      link: "/services/dot-compliance",
      services: [
        { name: "Driver Qualification Files", desc: "Complete management of Part 391 requirements." },
        { name: "Hours of Service (HOS)", desc: "Log auditing and ELD compliance monitoring." },
        { name: "Drug & Alcohol Consortium", desc: "Random testing pool management (Part 382)." },
        { name: "Vehicle Maintenance Logs", desc: "Tracking annual inspections and DVIRs." },
        { name: "IFTA Fuel Tax Reporting", desc: "Quarterly mileage and fuel tax calculations." }
      ]
    },
    {
      id: "mc",
      title: "MC & Authority Services",
      icon: FileCheck,
      link: "/services/mc-registration",
      services: [
        { name: "MC Number Registration", desc: "Operating authority for interstate commerce." },
        { name: "USDOT Number Setup", desc: "Initial registration and biennial updates." },
        { name: "BOC-3 Process Agents", desc: "Blanket coverage for all 50 states." },
        { name: "UCR Registration", desc: "Unified Carrier Registration annual filing." },
        { name: "Broker Authority", desc: "Setup and bonding assistance for freight brokers." }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complete Compliance & Regulatory Services - USA Compliance</title>
        <meta name="description" content="Explore our 80+ compliance services across OSHA, Environmental, DOT, and Industrial Hygiene." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 to-primary z-0" />
          
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" 
              alt="USA Compliance Logo" 
              className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" 
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Complete Compliance & Regulatory Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From OSHA safety training to DOT authority, explore our comprehensive suite of over 80 specialized compliance solutions.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="space-y-24">
              {categories.map((category, catIdx) => (
                <div key={category.id} className="scroll-mt-32" id={category.id}>
                  <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (sIdx % 3) * 0.1, duration: 0.4 }}
                        className="glass-card rounded-2xl p-6 flex flex-col h-full hover-lift group"
                      >
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground mb-8 flex-1 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                        
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                          <Button asChild variant="ghost" className="flex-1 text-secondary hover:text-secondary hover:bg-secondary/10">
                            <Link to={category.link}>Learn More</Link>
                          </Button>
                          <Button 
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            Consultation
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
}