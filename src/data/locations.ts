export interface Location {
  id: string;
  name: string;
  description?: string;
  popular?: boolean;
}

export const locations: Location[] = [
  // Popular locations
  {
    id: '1',
    name: 'Аэропорт Пхукета',
    description: 'Международный аэропорт, круглосуточно',
    popular: true,
  },
  {
    id: '2', 
    name: 'Патонг Бич',
    description: 'Главный туристический район',
    popular: true,
  },
  {
    id: '3',
    name: 'Карон Бич',
    description: 'Тихий пляжный район',
    popular: true,
  },
  {
    id: '4',
    name: 'Ката Бич',
    description: 'Популярный пляжный курорт',
    popular: true,
  },
  
  // Other locations
  {
    id: '5',
    name: 'Камала Бич',
    description: 'Спокойный пляжный район',
  },
  {
    id: '6',
    name: 'Раваи',
    description: 'Южный район Пхукета',
  },
  {
    id: '7',
    name: 'Пхукет Таун',
    description: 'Исторический центр города',
  },
  {
    id: '8',
    name: 'Най Харн',
    description: 'Красивый южный пляж',
  },
  {
    id: '9',
    name: 'Сурин Бич',
    description: 'Элитный пляжный район',
  },
  {
    id: '10',
    name: 'Бангтао',
    description: 'Длинный пляж с отелями',
  },
  {
    id: '11',
    name: 'Май Као',
    description: 'Северный район у аэропорта',
  },
  {
    id: '12',
    name: 'Чалонг',
    description: 'Крупнейшая бухта Пхукета',
  },
];