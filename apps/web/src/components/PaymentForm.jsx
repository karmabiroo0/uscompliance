import React, { useState } from 'react';
import { Loader2, CreditCard, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import apiServerClient from '@/lib/apiServerClient.js';
import { useToast } from '@/hooks/use-toast.js';

export default function PaymentForm({ amount, serviceName, isPolicyAccepted }) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;

    if (id === 'cardNumber') formattedValue = formatCardNumber(value);
    if (id === 'expiry') formattedValue = formatExpiry(value);
    if (id === 'cvv') formattedValue = value.replace(/[^0-9]/g, '').substring(0, 4);

    setFormData(prev => ({ ...prev, [id]: formattedValue }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.cardNumber.replace(/\s/g, '').length < 15) newErrors.cardNumber = 'Invalid card number';
    if (formData.expiry.length < 5) newErrors.expiry = 'Invalid expiry date';
    if (formData.cvv.length < 3) newErrors.cvv = 'Invalid CVV';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Billing address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isPolicyAccepted) {
      toast({ title: "Action Required", description: "You must accept the payment policy to proceed.", variant: "destructive" });
      return;
    }

    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Convert amount to cents for Stripe
      const amountInCents = Math.round(parseFloat(amount) * 100);
      
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountInCents,
          productName: serviceName,
          successUrl: window.location.origin + '/payment-success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: window.location.origin + '/payment-cancel'
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to initialize checkout');
      }

      const data = await response.json();
      
      // Redirect to Stripe Checkout
      window.open(data.url, '_blank');
      
      // Optional: redirect current window to a waiting page or just reset
      setIsProcessing(false);
      
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Payment Error",
        description: error.message || "There was a problem processing your request. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="John Doe" 
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              id="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange} 
              placeholder="0000 0000 0000 0000" 
              maxLength={19}
              className={`pl-10 ${errors.cardNumber ? "border-destructive" : ""}`}
            />
          </div>
          {errors.cardNumber && <p className="text-xs text-destructive">{errors.cardNumber}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input 
              id="expiry" 
              value={formData.expiry} 
              onChange={handleChange} 
              placeholder="MM/YY" 
              maxLength={5}
              className={errors.expiry ? "border-destructive" : ""}
            />
            {errors.expiry && <p className="text-xs text-destructive">{errors.expiry}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input 
              id="cvv" 
              type="password"
              value={formData.cvv} 
              onChange={handleChange} 
              placeholder="123" 
              maxLength={4}
              className={errors.cvv ? "border-destructive" : ""}
            />
            {errors.cvv && <p className="text-xs text-destructive">{errors.cvv}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Billing Address</Label>
          <Input 
            id="address" 
            value={formData.address} 
            onChange={handleChange} 
            placeholder="123 Main St, City, State, ZIP" 
            className={errors.address ? "border-destructive" : ""}
          />
          {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isProcessing || !isPolicyAccepted} 
        className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Lock className="w-5 h-5 mr-2" />
            Pay ${parseFloat(amount).toFixed(2)}
          </>
        )}
      </Button>
    </form>
  );
}