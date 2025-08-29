import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CarCategories } from '../components/sections/CarCategories';
import { PopularCars } from '../components/sections/PopularCars';
import { Features } from '../components/sections/Features';
import { Statistics } from '../components/sections/Statistics';
import { CarShowcase3D } from '../components/ui/CarShowcase3D';
import { Reviews } from '../components/sections/Reviews';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <CarCategories />
      <PopularCars />
      <Features />
      <Statistics />
      <CarShowcase3D />
      <Reviews />
      <CTA />
    </div>
  );
};