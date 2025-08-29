import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Car, AdditionalService, Customer } from '../types/index';

interface BookingState {
  selectedCar: Car | null;
  startDate: Date | null;
  endDate: Date | null;
  pickupLocation: string;
  returnLocation: string;
  additionalServices: AdditionalService[];
  customer: Customer | null;
  
  setSelectedCar: (car: Car | null) => void;
  setDates: (startDate: Date | null, endDate: Date | null) => void;
  setLocations: (pickup: string, return_: string) => void;
  toggleService: (serviceId: string) => void;
  setCustomer: (customer: Customer) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      selectedCar: null,
      startDate: null,
      endDate: null,
      pickupLocation: '',
      returnLocation: '',
      additionalServices: [],
      customer: null,
      
      setSelectedCar: (car) => set({ selectedCar: car }),
      
      setDates: (startDate, endDate) => set({ startDate, endDate }),
      
      setLocations: (pickup, return_) => set({ 
        pickupLocation: pickup, 
        returnLocation: return_ 
      }),
      
      toggleService: (serviceId) => set((state) => ({
        additionalServices: state.additionalServices.map(service =>
          service.id === serviceId
            ? { ...service, selected: !service.selected }
            : service
        ),
      })),
      
      setCustomer: (customer) => set({ customer }),
      
      resetBooking: () => set({
        selectedCar: null,
        startDate: null,
        endDate: null,
        pickupLocation: '',
        returnLocation: '',
        additionalServices: [],
        customer: null,
      }),
    }),
    {
      name: 'booking-storage',
    }
  )
);