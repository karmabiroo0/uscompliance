import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function MarketDataCard({ article }) {
  const { headline, source, timestamp, description, url, sentiment } = article;
  
  const formattedTime = new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  const badgeClass = 
    sentiment === 'positive' ? 'market-badge-bullish' :
    sentiment === 'negative' ? 'market-badge-bearish' :
    'market-badge-neutral';

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="h-full bg-card border border-border hover:border-primary/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-md">
              {source}
            </span>
            <span className={badgeClass}>
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
          {headline}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex items-center text-xs font-medium text-muted-foreground mt-auto pt-4 border-t border-border/50">
          <Clock className="w-3.5 h-3.5 mr-1.5" />
          {formattedTime}
        </div>
      </div>
    </a>
  );
}