import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewCard({ name, company, role, rating, text }) {
  // Extract initials from the company name (up to 2 characters)
  const initials = company
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col h-full p-6 rounded-2xl border border-border/50 shadow-sm transition-all duration-300 bg-[hsl(var(--review-card-bg))] hover:bg-[hsl(var(--review-card-hover))] hover:shadow-md"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? 'fill-[hsl(var(--star-filled))] text-[hsl(var(--star-filled))]'
                : 'text-[hsl(var(--star-muted))]'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="flex-1 text-foreground/90 leading-relaxed mb-6">
        "{text}"
      </blockquote>
      
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0">
          <span className="font-bold text-sm text-secondary tracking-wide">{initials}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-foreground text-sm">{name}</span>
          <span className="text-muted-foreground text-xs">
            {role}, {company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}