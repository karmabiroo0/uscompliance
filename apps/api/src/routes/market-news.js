import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
const NEWSAPI_BASE_URL = 'https://newsapi.org/v2';
const NEWSAPI_KEY = process.env.NEWSAPI_KEY;

// Helper function to extract sentiment from article content
const extractSentiment = (title, description) => {
  const text = `${title} ${description}`.toLowerCase();
  const positiveWords = ['surge', 'rally', 'gain', 'jump', 'soar', 'bull', 'bullish', 'up', 'rise', 'growth', 'profit', 'success', 'strong', 'positive'];
  const negativeWords = ['crash', 'plunge', 'fall', 'drop', 'bear', 'bearish', 'down', 'loss', 'decline', 'weak', 'negative', 'concern', 'risk', 'threat'];
  
  const positiveCount = positiveWords.filter(word => text.includes(word)).length;
  const negativeCount = negativeWords.filter(word => text.includes(word)).length;
  
  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
};

router.get('/', async (req, res) => {
  // Fetch crypto prices from CoinGecko
  const cryptoPricesResponse = await fetch(
    `${COINGECKO_BASE_URL}/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true`
  );
  
  if (!cryptoPricesResponse.ok) {
    throw new Error(`CoinGecko API error: ${cryptoPricesResponse.status} ${cryptoPricesResponse.statusText}`);
  }
  
  const cryptoPricesData = await cryptoPricesResponse.json();
  
  // Fetch market indices from CoinGecko (using global data for market cap changes)
  const globalDataResponse = await fetch(`${COINGECKO_BASE_URL}/global`);
  
  if (!globalDataResponse.ok) {
    throw new Error(`CoinGecko global API error: ${globalDataResponse.status} ${globalDataResponse.statusText}`);
  }
  
  const globalData = await globalDataResponse.json();
  
  // Fetch crypto news from NewsAPI
  const cryptoNewsResponse = await fetch(
    `${NEWSAPI_BASE_URL}/everything?q=crypto%20market%20OR%20bitcoin%20OR%20ethereum&sortBy=publishedAt&language=en&pageSize=5&apiKey=${NEWSAPI_KEY}`
  );
  
  if (!cryptoNewsResponse.ok) {
    throw new Error(`NewsAPI crypto news error: ${cryptoNewsResponse.status} ${cryptoNewsResponse.statusText}`);
  }
  
  const cryptoNewsData = await cryptoNewsResponse.json();
  
  // Fetch USA stock market news from NewsAPI
  const usaNewsResponse = await fetch(
    `${NEWSAPI_BASE_URL}/everything?q=stock%20market%20USA&sortBy=publishedAt&language=en&pageSize=5&apiKey=${NEWSAPI_KEY}`
  );
  
  if (!usaNewsResponse.ok) {
    throw new Error(`NewsAPI USA news error: ${usaNewsResponse.status} ${usaNewsResponse.statusText}`);
  }
  
  const usaNewsData = await usaNewsResponse.json();
  
  // Fetch Canada stock market news from NewsAPI
  const canadaNewsResponse = await fetch(
    `${NEWSAPI_BASE_URL}/everything?q=TSX%20Canada%20stocks&sortBy=publishedAt&language=en&pageSize=5&apiKey=${NEWSAPI_KEY}`
  );
  
  if (!canadaNewsResponse.ok) {
    throw new Error(`NewsAPI Canada news error: ${canadaNewsResponse.status} ${canadaNewsResponse.statusText}`);
  }
  
  const canadaNewsData = await canadaNewsResponse.json();
  
  // Format crypto news
  const cryptoNews = (cryptoNewsData.articles || []).map(article => ({
    headline: article.title,
    source: article.source.name,
    timestamp: article.publishedAt,
    description: article.description || '',
    url: article.url,
    sentiment: extractSentiment(article.title, article.description || ''),
  }));
  
  // Format USA news
  const usaNews = (usaNewsData.articles || []).map(article => ({
    headline: article.title,
    source: article.source.name,
    timestamp: article.publishedAt,
    description: article.description || '',
    url: article.url,
    sentiment: extractSentiment(article.title, article.description || ''),
  }));
  
  // Format Canada news
  const canadaNews = (canadaNewsData.articles || []).map(article => ({
    headline: article.title,
    source: article.source.name,
    timestamp: article.publishedAt,
    description: article.description || '',
    url: article.url,
    sentiment: extractSentiment(article.title, article.description || ''),
  }));
  
  // Format crypto prices
  const cryptoPrices = {
    bitcoin: {
      price: cryptoPricesData.bitcoin?.usd || 0,
      change24h: cryptoPricesData.bitcoin?.usd_24h_change || 0,
    },
    ethereum: {
      price: cryptoPricesData.ethereum?.usd || 0,
      change24h: cryptoPricesData.ethereum?.usd_24h_change || 0,
    },
  };
  
  // Format market indices (using global market cap data as proxy)
  const marketIndices = {
    sp500: {
      price: globalData.data?.total_market_cap?.usd || 0,
      change: globalData.data?.market_cap_change_percentage_24h_usd || 0,
    },
    tsx: {
      price: globalData.data?.total_market_cap?.usd || 0,
      change: globalData.data?.market_cap_change_percentage_24h_usd || 0,
    },
  };
  
  logger.info('Market news data fetched successfully');
  
  res.json({
    cryptoNews,
    usaNews,
    canadaNews,
    cryptoPrices,
    marketIndices,
  });
});

export default router;