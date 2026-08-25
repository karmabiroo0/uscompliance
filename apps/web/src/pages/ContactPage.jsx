import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, FileText, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import apiServerClient from '@/lib/apiServerClient.js';
export default function ContactPage() {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const handleSelectChange = e => {
    setFormData(prev => ({
      ...prev,
      service: e.target.value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await apiServerClient.fetch('/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit form');
      }
      toast({
        title: "Success",
        description: "Thank you for contacting us! We'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderFormFields = formType => <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="bg-background text-foreground" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-background text-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="(202) 503-4781" className="bg-background text-foreground" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <select id="service" value={formData.service} onChange={handleSelectChange} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground">
            <option value="" disabled>Select a service...</option>
            <option value="OSHA Compliance">OSHA Compliance</option>
            <option value="Environmental Compliance">Environmental Compliance</option>
            <option value="Industrial Hygiene">Industrial Hygiene</option>
            <option value="DOT Compliance">DOT Compliance</option>
            <option value="MC Registration">MC Registration</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {formType === 'quote' ? 'Project Details & Requirements *' : 'Message *'}
        </Label>
        <Textarea id="message" value={formData.message} onChange={handleChange} required rows={5} placeholder={formType === 'quote' ? "Please describe your compliance needs to help us provide an accurate quote..." : "How can we help you today?"} className="bg-background text-foreground resize-none" />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 flex items-center justify-center gap-2 transition-all">
        {isSubmitting ? <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </> : formType === 'quote' ? "Request Quote" : "Send Message"}
      </Button>
    </div>;
  return <>
      <Helmet>
        <title>Contact Us & Get a Quote - USA Compliance</title>
        <meta name="description" content="Reach out to USA Compliance for expert DOT and FMCSA support or request a custom quote for your business." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        <section className="bg-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <img src="https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/30bd37889821335e1d90a11775a321e2.png" alt="USA Compliance Logo" className="w-[120px] h-auto object-contain mx-auto mb-6 logo-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Our dedicated compliance experts are standing by to help secure your fleet's future.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Contact Info */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">How can we assist you?</h2>
                  <p className="text-lg text-muted-foreground">
                    Whether you're starting a new trucking company, need a custom compliance quote, or require help recovering from a bad audit, we have the tools and experience to help.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Phone Support</h4>
                      <p className="text-muted-foreground mb-1">Mon-Fri 8am to 6pm EST</p>
                      <a href="tel:+12025034781" className="text-secondary font-medium hover:underline text-lg">(202) 417-8462</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Email Inquiries</h4>
                      <p className="text-muted-foreground mb-1">We aim to reply within 24 hours.</p>
                      <a href="mailto:info@usacompliancesvc.com" className="text-secondary font-medium hover:underline">info@usacompliancesvc.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Headquarters</h4>
                      <p className="text-muted-foreground">521 Third St<br />Suite 101<br />Excelsior, MN 55331</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact & Quote Forms */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="lg:col-span-7">
                <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-xl">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="contact" className="text-base py-3">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        General Inquiry
                      </TabsTrigger>
                      <TabsTrigger value="quote" className="text-base py-3">
                        <FileText className="w-4 h-4 mr-2" />
                        Get a Quote
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="contact" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground">Send us a message</h3>
                        <p className="text-muted-foreground mt-2">Fill out the form below and our team will get back to you shortly.</p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        {renderFormFields('contact')}
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="quote" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground">Request a Custom Quote</h3>
                        <p className="text-muted-foreground mt-2">Provide details about your compliance needs for an accurate estimate.</p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        {renderFormFields('quote')}
                      </form>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
}