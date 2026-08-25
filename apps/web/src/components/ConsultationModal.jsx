import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ConsultationModal({ isOpen, onClose }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Sent",
        description: "One of our compliance experts will contact you shortly.",
      });
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg p-4"
          >
            <div className="bg-card text-card-foreground rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold mb-2">Get a Free Consultation</h2>
                <p className="text-primary-foreground/80 text-sm">
                  Fill out the form below and we'll help you navigate your compliance requirements.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="modal-name">Full Name</Label>
                    <Input id="modal-name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modal-phone">Phone Number</Label>
                    <Input id="modal-phone" type="tel" required placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email Address</Label>
                  <Input id="modal-email" type="email" required placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label>Service Interest</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="osha">OSHA Compliance</SelectItem>
                      <SelectItem value="environmental">Environmental Compliance</SelectItem>
                      <SelectItem value="industrial">Industrial Hygiene</SelectItem>
                      <SelectItem value="dot">DOT & FMCSA Compliance</SelectItem>
                      <SelectItem value="mc">MC Authority Services</SelectItem>
                      <SelectItem value="subscription">Compliance Subscription</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modal-message">Message</Label>
                  <Textarea 
                    id="modal-message" 
                    required 
                    placeholder="Tell us about your business and compliance needs..."
                    className="resize-none h-24"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg glow-button"
                >
                  {isSubmitting ? "Sending Request..." : (
                    <span className="flex items-center gap-2">
                      Request Consultation <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}