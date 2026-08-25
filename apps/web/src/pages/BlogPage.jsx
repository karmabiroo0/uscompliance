import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Search, ArrowRight, BookOpen } from 'lucide-react';
import { format } from 'date-fns';
import pb from '@/lib/pocketbaseClient.js';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        let filterStr = [];
        if (selectedCategory !== 'All') {
          filterStr.push(`category = "${selectedCategory}"`);
        }
        if (searchQuery.trim() !== '') {
          filterStr.push(`title ~ "${searchQuery.trim()}"`);
        }

        const result = await pb.collection('blog_articles').getFullList({
          filter: filterStr.join(' && '),
          sort: '-published_date',
          $autoCancel: false,
        });

        setArticles(result);

        // Extract unique categories if not yet done
        if (categories.length === 1) {
          const allResult = await pb.collection('blog_articles').getFullList({ $autoCancel: false });
          const uniqueCategories = ['All', ...new Set(allResult.map(a => a.category))];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchArticles();
    }, 300); // debounce search

    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog & Resources | USA Compliance</title>
        <meta name="description" content="Stay updated with the latest news, guides, and best practices in DOT, FMCSA, OSHA, and Environmental compliance." />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/b0ec8da2-4e66-4903-b34c-855b2d75bc7a/5c6a1cf8813bc624a919f71c4c379de8.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-4 text-secondary backdrop-blur-sm"
            >
              <BookOpen className="w-6 h-6" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Compliance Insights & Resources
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Expert guidance, industry updates, and best practices to keep your fleet safe and fully compliant.
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border bg-card/50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {error && (
              <div className="text-center py-12 bg-destructive/10 rounded-xl border border-destructive/20">
                <p className="text-destructive font-medium">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
                  Retry
                </Button>
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="blog-card p-0 flex flex-col">
                    <Skeleton className="h-48 w-full rounded-t-2xl" />
                    <div className="p-6 flex-1 flex flex-col gap-4">
                      <Skeleton className="h-6 w-24 rounded-full" />
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-4 w-full flex-1" />
                      <div className="flex justify-between items-center mt-auto pt-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-28 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="blog-card"
                  >
                    {/* Optional Featured Image */}
                    {article.featured_image ? (
                      <div className="h-48 overflow-hidden bg-muted relative">
                        <img 
                          src={pb.files.getUrl(article, article.featured_image)} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-32 bg-primary/5 border-b flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-primary/20" />
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight">
                        <Link to={`/blog/${article.id}`} className="hover:text-secondary transition-colors">
                          {article.title}
                        </Link>
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={article.published_date}>
                            {format(new Date(article.published_date), 'MMM d, yyyy')}
                          </time>
                        </div>
                        
                        <Button asChild variant="ghost" size="sm" className="text-secondary hover:text-secondary hover:bg-secondary/10 rounded-full font-medium">
                          <Link to={`/blog/${article.id}`} className="flex items-center gap-1.5">
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl border border-border/50">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  We couldn't find any articles matching your search criteria.
                </p>
                <Button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
                  variant="outline" 
                  className="mt-6"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}