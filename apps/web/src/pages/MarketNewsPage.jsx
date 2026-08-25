import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { RefreshCw, AlertCircle, BarChart2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarketIndicesWidget from '@/components/MarketIndicesWidget.jsx';
import MarketDataCard from '@/components/MarketDataCard.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import apiServerClient from '@/lib/apiServerClient.js';

export default function MarketNewsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchMarketData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiServerClient.fetch('/market-news');
      if (!response.ok) {
        throw new Error('Failed to fetch market data');
      }
      const result = await response.json();
      setData(result);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Market data fetch error:', err);
      setError(err.message || 'An unexpected error occurred while fetching market data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();

    // Auto-refresh every 5 minutes
    const intervalId = setInterval(fetchMarketData, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const renderNewsGrid = (articles) => {
    if (!articles || articles.length === 0) {
      return (
        <div className="py-12 text-center bg-card rounded-2xl border border-border">
          <p className="text-muted-foreground">No recent news found for this market.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <MarketDataCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    );
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="h-64 bg-muted/50 rounded-2xl border border-border animate-pulse p-6 flex flex-col">
          <div className="flex gap-2 mb-4">
            <div className="w-16 h-6 bg-muted rounded-md" />
            <div className="w-20 h-6 bg-muted rounded-full" />
          </div>
          <div className="w-full h-6 bg-muted rounded-md mb-2" />
          <div className="w-3/4 h-6 bg-muted rounded-md mb-6" />
          <div className="w-full h-4 bg-muted rounded-md mb-2 mt-auto" />
          <div className="w-5/6 h-4 bg-muted rounded-md mb-4" />
          <div className="w-24 h-4 bg-muted rounded-md mt-auto pt-4 border-t border-border/50" />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Market News & Real-Time Data - USA Compliance</title>
        <meta name="description" content="Stay updated with the latest market news, crypto trends, and North American stock indices. Real-time financial insights." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-24 pb-20 min-h-screen">
        <div className="container-custom max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Market <span className="text-primary">Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Real-time financial data, crypto updates, and market news across North America to keep your business informed.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {lastUpdated && !loading && !error && (
                <span className="text-sm text-muted-foreground font-medium">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </span>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={fetchMarketData} 
                disabled={loading}
                className="gap-2 font-medium"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-1">Unable to load market data</h3>
                <p className="text-destructive/80 mb-4">{error}</p>
                <Button variant="outline" size="sm" onClick={fetchMarketData} className="border-destructive/30 hover:bg-destructive/10">
                  Try Again
                </Button>
              </div>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
              <BarChart2 className="w-4 h-4" />
              Live Indices
            </h2>
            {loading && !data ? (
              <div className="flex gap-4 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="min-w-[200px] h-28 bg-muted/50 animate-pulse rounded-xl" />
                ))}
              </div>
            ) : (
              <MarketIndicesWidget indices={data?.marketIndices} crypto={data?.cryptoPrices} />
            )}
          </div>

          <Tabs defaultValue="usa" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mb-8 p-1 bg-muted/50 rounded-xl border border-border/50">
              <TabsTrigger value="usa" className="rounded-lg font-semibold py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                USA Markets
              </TabsTrigger>
              <TabsTrigger value="canada" className="rounded-lg font-semibold py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                TSX & Canada
              </TabsTrigger>
              <TabsTrigger value="crypto" className="rounded-lg font-semibold py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                Cryptocurrency
              </TabsTrigger>
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TabsContent value="usa" className="mt-0 focus-visible:outline-none">
                {loading && !data ? renderSkeletons() : renderNewsGrid(data?.usaNews)}
              </TabsContent>

              <TabsContent value="canada" className="mt-0 focus-visible:outline-none">
                {loading && !data ? renderSkeletons() : renderNewsGrid(data?.canadaNews)}
              </TabsContent>

              <TabsContent value="crypto" className="mt-0 focus-visible:outline-none">
                {loading && !data ? renderSkeletons() : renderNewsGrid(data?.cryptoNews)}
              </TabsContent>
            </motion.div>
          </Tabs>

        </div>
      </main>

      <Footer />
    </>
  );
}