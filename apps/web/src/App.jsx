import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import StickyConsultation from './components/StickyConsultation.jsx';

import HomePage from './pages/HomePage.jsx';
import ComplianceServicesPage from './pages/ComplianceServicesPage.jsx';
import OSHACompliancePage from './pages/OSHACompliancePage.jsx';
import EnvironmentalCompliancePage from './pages/EnvironmentalCompliancePage.jsx';
import IndustrialHygienePage from './pages/IndustrialHygienePage.jsx';
import DOTCompliancePage from './pages/DOTCompliancePage.jsx';
import MCRegistrationPage from './pages/MCRegistrationPage.jsx';
import ComplianceSubscriptionPage from './pages/ComplianceSubscriptionPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MarketNewsPage from './pages/MarketNewsPage.jsx';

// Checkout Pages
import CheckoutPage from './pages/CheckoutPage.jsx';
import PaymentSuccessPage from './pages/PaymentSuccessPage.jsx';
import PaymentCancelPage from './pages/PaymentCancelPage.jsx';

// About Us Pages
import AboutUsPage from './pages/AboutUsPage.jsx';
import OurStoryPage from './pages/OurStoryPage.jsx';
import MissionValuesPage from './pages/MissionValuesPage.jsx';
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx';
import OurPeoplePage from './pages/OurPeoplePage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about-us/our-story" element={<OurStoryPage />} />
          <Route path="/about-us/mission" element={<MissionValuesPage />} />
          <Route path="/about-us/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/about-us/our-people" element={<OurPeoplePage />} />

          {/* Services Routes */}
          <Route path="/services" element={<ComplianceServicesPage />} />
          <Route path="/services/osha-compliance" element={<OSHACompliancePage />} />
          <Route path="/services/environmental-compliance" element={<EnvironmentalCompliancePage />} />
          <Route path="/services/industrial-hygiene" element={<IndustrialHygienePage />} />
          <Route path="/services/dot-compliance" element={<DOTCompliancePage />} />
          <Route path="/services/mc-registration" element={<MCRegistrationPage />} />
          <Route path="/services/compliance-subscription" element={<ComplianceSubscriptionPage />} />
          
          {/* Market News */}
          <Route path="/market-news" element={<MarketNewsPage />} />

          {/* Legacy Routes (Redirects or kept for compatibility) */}
          <Route path="/registrations" element={<MCRegistrationPage />} />
          <Route path="/compliance-solutions" element={<ComplianceSubscriptionPage />} />
          
          {/* Checkout Routes */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/payment-cancel" element={<PaymentCancelPage />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetailPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all 404 Route */}
          <Route path="*" element={
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-background">
              <h1 className="text-4xl font-bold text-foreground mb-4">404 - Page Not Found</h1>
              <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist.</p>
              <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">Return Home</a>
            </div>
          } />
        </Routes>
      </div>
      <StickyConsultation />
      <Toaster />
    </Router>
  );
}

export default App;