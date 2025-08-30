import type { Office } from '../types/index';

export const offices: Office[] = [
  {
    id: '1',
    name: 'Главный офис Пхукет',
    address: '24/31 Wichit, Mueang District, Phuket 83000, Thailand',
    phone: '+66 95-965-7805',
    workingHours: '08:00 - 20:00',
    coordinates: {
      lat: 7.8804,
      lng: 98.3923,
    },
  },
  {
    id: '2',
    name: 'Аэропорт Пхукет',
    address: 'Phuket International Airport, Arrival Hall',
    phone: '+66 95-965-7805',
    workingHours: 'Круглосуточно',
    coordinates: {
      lat: 8.1132,
      lng: 98.3169,
    },
  },
  {
    id: '3',
    name: 'Патонг Бич',
    address: 'Patong Beach Road, Kathu, Phuket',
    phone: '+66 95-965-7805',
    workingHours: '09:00 - 19:00',
    coordinates: {
      lat: 7.8967,
      lng: 98.2958,
    },
  },
  {
    id: '4',
    name: 'Пхукет Таун',
    address: 'Phuket Town, Old Town District',
    phone: '+66 95-965-7805',
    workingHours: '09:00 - 18:00',
    coordinates: {
      lat: 7.8906,
      lng: 98.3981,
    },
  },
];