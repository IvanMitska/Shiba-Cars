import React from 'react';
import { BookingForm } from '../components/forms/BookingForm';

export const BookingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Оформление бронирования</h1>
        <BookingForm />
      </div>
    </div>
  );
};