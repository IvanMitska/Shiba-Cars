import type { Office } from '../types/index';

export const offices: Office[] = [
  {
    id: '1',
    name: 'Офис Шереметьево',
    address: 'Аэропорт Шереметьево, Терминал D, 1 этаж',
    phone: '+7 (495) 123-45-67',
    workingHours: 'Круглосуточно',
    coordinates: {
      lat: 55.972642,
      lng: 37.414715,
    },
  },
  {
    id: '2',
    name: 'Офис Домодедово',
    address: 'Аэропорт Домодедово, Зона прилета',
    phone: '+7 (495) 123-45-68',
    workingHours: 'Круглосуточно',
    coordinates: {
      lat: 55.408611,
      lng: 37.906111,
    },
  },
  {
    id: '3',
    name: 'Офис Внуково',
    address: 'Аэропорт Внуково, Терминал A',
    phone: '+7 (495) 123-45-69',
    workingHours: '07:00 - 23:00',
    coordinates: {
      lat: 55.596111,
      lng: 37.2675,
    },
  },
  {
    id: '4',
    name: 'Офис Центр',
    address: 'ул. Тверская, 15, Москва',
    phone: '+7 (495) 123-45-70',
    workingHours: '09:00 - 21:00',
    coordinates: {
      lat: 55.763338,
      lng: 37.606842,
    },
  },
  {
    id: '5',
    name: 'Офис Ленинградский вокзал',
    address: 'Комсомольская площадь, 3',
    phone: '+7 (495) 123-45-71',
    workingHours: '08:00 - 22:00',
    coordinates: {
      lat: 55.776111,
      lng: 37.655833,
    },
  },
];