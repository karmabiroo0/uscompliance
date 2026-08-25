import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

export default function PaymentCancelPage() {
  return (
    <>
      <Helmet>
        <title>Payment Cancelled - USA Compliance</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-[80vh] bg-[hsl(var(--checkout-bg))] pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-card border border-border rounded-3xl shadow-lg p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <XCircle className="w-12 h-12 text-destructive" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">Payment Cancelled</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your payment process was interrupted or cancelled. No charges were made to your account.
          </p>

          <div className="flex flex-col gap-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
              <Link to="/services">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Try Again
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full h-12 text-lg">
              <Link to="/contact">
                <HelpCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}