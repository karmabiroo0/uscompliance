import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import ReviewCard from '@/components/ReviewCard.jsx';

const reviewsData = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'TechCorp Industries',
    rating: 5,
    text: 'Their OSHA compliance expertise transformed our workplace safety program. We reduced incidents by 40% in the first year. Highly professional and responsive team.'
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Compliance Manager',
    company: 'LogisticsPro',
    rating: 5,
    text: 'Outstanding DOT compliance guidance. They helped us navigate complex regulations and maintain our MC registration without any issues. Excellent support.'
  },
  {
    id: 3,
    name: 'Maria Chen',
    role: 'Environmental Manager',
    company: 'GreenManufacturing',
    rating: 5,
    text: 'The environmental compliance consulting was exactly what we needed. Their team understood our industry challenges and provided practical solutions.'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CEO',
    company: 'ConstructionPlus',
    rating: 4,
    text: 'Great industrial hygiene assessments. They identified several areas for improvement and provided clear action plans. Very knowledgeable staff.'
  },
  {
    id: 5,
    name: 'Jennifer Walsh',
    role: 'HR Director',
    company: 'RetailChain Corp',
    rating: 5,
    text: 'Professional, thorough, and timely. Their compliance training programs have been invaluable for our team. Highly recommend their services.'
  },
  {
    id: 6,
    name: 'Michael Park',
    role: 'Operations Manager',
    company: 'TransportHub',
    rating: 5,
    text: 'Exceptional service from start to finish. They made the compliance process straightforward and manageable. Our team feels confident in our regulatory standing.'
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    role: 'Safety Officer',
    company: 'ManufacturingElite',
    rating: 5,
    text: 'Their OSHA expertise is unmatched. They provided comprehensive guidance and ongoing support. Best investment we made for workplace safety.'
  },
  {
    id: 8,
    name: 'Robert Garcia',
    role: 'Compliance Officer',
    company: 'DistributionCo',
    rating: 4,
    text: 'Professional team with deep regulatory knowledge. They helped us streamline our compliance processes and reduce administrative burden.'
  }
];

export default function ReviewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">Trusted by industry leaders across transportation, manufacturing, and construction.</p>
          </div>
          
          <div className="flex items-center gap-6 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
            <div className="flex flex-col items-center justify-center pr-6 border-r border-border">
              <span className="text-3xl font-bold text-foreground">4.9</span>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--star-filled))] text-[hsl(var(--star-filled))]" />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                200+ Reviews
              </span>
              <span className="text-sm text-muted-foreground">Verified Clients</span>
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviewsData.map((review, index) => (
            <motion.div key={review.id} variants={itemVariants}>
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}