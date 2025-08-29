import React from 'react';
import { TermsHero } from '../components/sections/TermsHero';
import { TermsRequirements } from '../components/sections/TermsRequirements';
import { TermsBooking } from '../components/sections/TermsBooking';
import { TermsInsurance } from '../components/sections/TermsInsurance';
import { TermsDelivery } from '../components/sections/TermsDelivery';
import { TermsService } from '../components/sections/TermsService';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <TermsHero />
      <TermsRequirements />
      <TermsBooking />
      <TermsInsurance />
      <TermsDelivery />
      <TermsService />
    </div>
  );
};