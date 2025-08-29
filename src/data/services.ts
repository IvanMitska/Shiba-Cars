export interface AdditionalService {
  id: string;
  name: string;
  description: string;
  price: number;
  pricePerDay?: number;
  selected?: boolean;
}

export const services: AdditionalService[] = [
  {
    id: 'child-seat',
    name: 'Детское кресло',
    description: 'Безопасное детское кресло для детей от 9 месяцев до 12 лет',
    price: 500,
    pricePerDay: 500,
  },
  {
    id: 'gps',
    name: 'GPS-навигатор',
    description: 'Современный навигатор с актуальными картами России',
    price: 300,
    pricePerDay: 300,
  },
  {
    id: 'additional-driver',
    name: 'Дополнительный водитель',
    description: 'Возможность управления автомобилем вторым водителем',
    price: 1000,
  },
  {
    id: 'full-insurance',
    name: 'Полная страховка',
    description: 'Полное страховое покрытие без франшизы',
    price: 800,
    pricePerDay: 800,
  },
  {
    id: 'delivery',
    name: 'Доставка автомобиля',
    description: 'Доставка автомобиля по указанному адресу в пределах МКАД',
    price: 1500,
  },
];