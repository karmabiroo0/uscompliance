import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const record = await pb.collection('blog_articles').getOne(id, {
          $autoCancel: false
        });
        setArticle(record);

        // Fetch related articles from same category
        if (record.category) {
          const related = await pb.collection('blog_articles').getList(1, 3, {
            filter: `category = "${record.category}" && id != "${record.id}"`,
            sort: '-published_date',
            $autoCancel: false
          });
          setRelatedArticles(related.items);
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Article not found or unavailable.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
    window.scrollTo(0, 0);
  }, [id]);

  // Helper to safely render simple text content with paragraphs
  const renderContent = (content) => {
    if (!content) return null;
    return content.split('\n\n').map((paragraph, idx) => (
      <p key={idx}>{paragraph}</p>
    ));
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 bg-background min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <Skeleton className="h-10 w-24 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-1/2 mb-12" />
            <Skeleton className="h-64 w-full rounded-2xl mb-12" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 bg-background min-h-[70vh] flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Article Not Found</h1>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={() => navigate('/blog')}>Return to Blog</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${article.title} | USA Compliance Blog`}</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <Header />

      <main className="flex-1 bg-background pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Navigation */}
          <div className="mb-10">
            <Button variant="ghost" onClick={() => navigate('/blog')} className="text-muted-foreground hover:text-foreground -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-full uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--blog-heading))] mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium text-foreground">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.published_date}>
                  {format(new Date(article.published_date), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {article.featured_image && (
            <figure className="mb-16 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={pb.files.getUrl(article, article.featured_image)} 
                alt={article.title}
                className="w-full max-h-[600px] object-cover"
              />
            </figure>
          )}

          {/* Article Body */}
          <div className="article-content">
            {renderContent(article.content)}
          </div>

          {/* Article Footer & Share */}
          <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[65ch] mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Share this article:
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 text-muted-foreground hover:text-blue-600">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 text-muted-foreground hover:text-sky-500">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-8 h-8 text-muted-foreground hover:text-blue-700">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-24 pt-20 bg-muted/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-foreground">Related Articles</h2>
                <Button variant="ghost" asChild className="hidden sm:flex">
                  <Link to="/blog">View all <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <div key={related.id} className="blog-card">
                    {related.featured_image && (
                      <div className="h-40 overflow-hidden bg-muted">
                        <img 
                          src={pb.files.getUrl(related, related.featured_image)} 
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 hover:text-secondary transition-colors">
                        <Link to={`/blog/${related.id}`}>{related.title}</Link>
                      </h3>
                      <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <span>{format(new Date(related.published_date), 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}