import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: '1',
    name: 'Александр М.',
    rating: 5,
    date: '2 недели назад',
    comment: 'Отличный сервис! Арендовал BMW 3 Series на выходные. Машина в идеальном состоянии, оформление быстрое, персонал приветливый. Рекомендую!',
    avatar: 'AM',
  },
  {
    id: '2',
    name: 'Елена К.',
    rating: 5,
    date: '1 месяц назад',
    comment: 'Брала Hyundai Solaris на неделю. Очень довольна! Цена адекватная, машина чистая и ухоженная. Особенно порадовала круглосуточная поддержка.',
    avatar: 'EK',
  },
  {
    id: '3',
    name: 'Михаил П.',
    rating: 5,
    date: '1 месяц назад',
    comment: 'Арендую автомобили здесь регулярно для деловых поездок. Всегда все на высшем уровне. Большой выбор авто, прозрачные условия, никаких скрытых платежей.',
    avatar: 'MP',
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Отзывы </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">клиентов</span>
          </h2>
          <p className="text-lg text-gray-400">
            Что говорят о нас наши клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-dark-800/50 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-500/20" />
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-orange-500 fill-current'
                        : 'text-gray-700'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};