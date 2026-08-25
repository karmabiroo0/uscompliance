import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Download, ArrowRight, Loader2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import apiServerClient from '@/lib/apiServerClient.js';

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      apiServerClient.fetch(`/stripe/session/${sessionId}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to verify payment session');
          return res.json();
        })
        .then(data => {
          setPaymentDetails(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError('Could not verify payment details. If you were charged, please contact support.');
          setLoading(false);
        });
    } else {
      setError('No session ID found.');
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <>
      <Helmet>
        <title>Payment Successful - USA Compliance</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-[80vh] bg-[hsl(var(--checkout-bg))] pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-card border border-border rounded-3xl shadow-lg p-8 md:p-12 text-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-secondary animate-spin mb-4" />
              <h2 className="text-xl font-semibold text-foreground">Verifying your payment...</h2>
            </div>
          ) : error ? (
            <div className="py-8">
              <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-destructive text-3xl font-bold">!</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Verification Issue</h1>
              <p className="text-muted-foreground mb-8">{error}</p>
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          ) : (
            <div className="py-4">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your purchase. Our team will begin processing your request immediately.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 text-left mb-8 border border-border">
                <h3 className="font-semibold text-foreground mb-4 border-b border-border pb-2">Order Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction ID:</span>
                    <span className="font-medium text-foreground">{paymentDetails?.id || sessionId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium text-green-600 uppercase">{paymentDetails?.status || 'Complete'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount Paid:</span>
                    <span className="font-bold text-foreground">
                      ${paymentDetails?.amountTotal ? (paymentDetails.amountTotal / 100).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  {paymentDetails?.customerEmail && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium text-foreground">{paymentDetails.customerEmail}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.print()}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Link to="/services">
                    Return to Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}