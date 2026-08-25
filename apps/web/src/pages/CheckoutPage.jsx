import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ShieldCheck, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PaymentForm from '@/components/PaymentForm.jsx';
import PaymentPolicySection from '@/components/PaymentPolicySection.jsx';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  
  const serviceName = searchParams.get('service') || 'Compliance Service';
  const price = searchParams.get('price') || '0.00';

  useEffect(() => {
    if (!searchParams.get('service') || !searchParams.get('price')) {
      navigate('/services');
    }
  }, [searchParams, navigate]);

  return (
    <>
      <Helmet>
        <title>Secure Checkout - USA Compliance</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="checkout-container pt-24">
        <div className="container-custom max-w-5xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Secure Checkout</h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              256-bit SSL Encrypted Payment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="checkout-card sticky top-28">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start pb-4 border-b border-border">
                    <div>
                      <p className="font-semibold text-foreground">{serviceName}</p>
                      <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
                    </div>
                    <p className="font-semibold text-foreground">${parseFloat(price).toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 mb-8">
                  <p className="text-lg font-bold text-foreground">Total Due</p>
                  <p className="text-2xl font-bold text-secondary">${parseFloat(price).toFixed(2)}</p>
                </div>

                <PaymentPolicySection />

                <div className="mt-6 flex items-start space-x-3 bg-muted/50 p-4 rounded-lg border border-border">
                  <Checkbox 
                    id="policy-accept" 
                    checked={isPolicyAccepted}
                    onCheckedChange={(checked) => setIsPolicyAccepted(checked)}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="policy-accept" 
                    className="text-sm font-medium leading-snug cursor-pointer"
                  >
                    I accept the payment policy and terms, including the work guarantee, cancellation, and refund policies.
                  </Label>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="checkout-card">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment Details</h2>
                <PaymentForm 
                  amount={price} 
                  serviceName={serviceName} 
                  isPolicyAccepted={isPolicyAccepted} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}