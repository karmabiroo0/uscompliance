import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { cn } from '@/lib/utils.js';

const formatPrice = (price) => {
  if (price === undefined || price === null) return '---';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price > 1000 ? 0 : 2,
    maximumFractionDigits: price > 1000 ? 2 : 4,
  }).format(price);
};

const formatPercent = (percent) => {
  if (percent === undefined || percent === null) return '---';
  return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
};

function IndexCard({ name, price, change }) {
  const isPositive = change > 0;
  const isNegative = change < 0;
  
  return (
    <div className="flex-1 min-w-[200px] bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <span className="font-semibold text-foreground text-sm tracking-wide">{name}</span>
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-[hsl(var(--bullish))]" />
        ) : isNegative ? (
          <TrendingDown className="w-4 h-4 text-[hsl(var(--bearish))]" />
        ) : (
          <Activity className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      <div>
        <div className="text-xl font-bold text-foreground tabular-nums tracking-tight">
          {formatPrice(price)}
        </div>
        <div className={cn(
          "text-sm font-medium tabular-nums flex items-center gap-1 mt-1",
          isPositive ? "text-[hsl(var(--bullish))]" : 
          isNegative ? "text-[hsl(var(--bearish))]" : "text-muted-foreground"
        )}>
          {formatPercent(change)}
        </div>
      </div>
    </div>
  );
}

export default function MarketIndicesWidget({ indices, crypto }) {
  const sp500 = indices?.sp500 || {};
  const tsx = indices?.tsx || {};
  const btc = crypto?.bitcoin || {};
  const eth = crypto?.ethereum || {};

  return (
    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex gap-4 min-w-max">
        <IndexCard name="S&P 500" price={sp500.price} change={sp500.change} />
        <IndexCard name="TSX Composite" price={tsx.price} change={tsx.change} />
        <IndexCard name="Bitcoin (BTC)" price={btc.price} change={btc.change24h} />
        <IndexCard name="Ethereum (ETH)" price={eth.price} change={eth.change24h} />
      </div>
    </div>
  );
}