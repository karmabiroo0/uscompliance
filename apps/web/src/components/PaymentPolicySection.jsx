import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck } from 'lucide-react';

export default function PaymentPolicySection() {
  return (
    <div className="mt-8 border border-border rounded-xl overflow-hidden bg-muted/30">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="policy" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 text-foreground font-semibold">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              Payment, Guarantee & Refund Policy
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="policy-text">
              <p className="font-bold text-foreground uppercase tracking-wide">Please read carefully before proceeding:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-foreground">WORK GUARANTEE & TIMELINE:</strong> We guarantee that all services will be completed within the specified timeframe as promised. We are fully committed to on-time delivery and ensuring your compliance needs are met promptly and accurately.
                </li>
                <li>
                  <strong className="text-foreground">REFUND POLICY FOR SERVICE ISSUES:</strong> We stand behind our work. If services are not delivered as promised, significant work quality issues occur, or agreed-upon deadlines are missed by our team, customers may request a refund. Approved refunds will be processed promptly via the original payment method used.
                </li>
                <li>
                  <strong className="text-foreground">NO REFUNDS FOR CANCELLATIONS:</strong> Please note the distinction for customer-initiated cancellations. If you change your mind or cancel the service after our team has already commenced work or filed paperwork on your behalf, the payment is strictly non-refundable.
                </li>
                <li>
                  <strong className="text-foreground">NO RETURNS:</strong> Due to the digital, filing, and administrative nature of our compliance services, they cannot be "returned" once purchased and initiated.
                </li>
                <li>
                  <strong className="text-foreground">NO CHARGEBACKS:</strong> By completing this purchase, you agree to contact our support team first to resolve any service issues or refund requests. You agree not to issue a chargeback or dispute the transaction with your bank without first allowing us the opportunity to address your concerns in accordance with our refund policy.
                </li>
              </ul>
              <p className="text-xs mt-4 opacity-80">
                By checking the acceptance box below, you acknowledge that you have read, understood, and agreed to be bound by these terms. This agreement serves as a legally binding contract between you and USA Compliance.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}