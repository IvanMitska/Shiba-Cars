import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { offices } from '../data/offices';
import { Button } from '../components/ui/Button';

export const ContactsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Контакты</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 mt-1" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+66 95-965-7805</p>
                  <p className="text-sm text-gray-500">Круглосуточная поддержка</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:shibacars@gmail.com" className="text-gray-600 hover:text-primary-500">
                    shibacars@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                <div>
                  <p className="font-semibold">Главный офис</p>
                  <p className="text-gray-600">24/31 Wichit, Mueang District, Phuket 83000, Thailand</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 mt-1" />
                <div>
                  <p className="font-semibold">Режим работы офиса</p>
                  <p className="text-gray-600">09:00 - 21:00</p>
                  <p className="text-sm text-gray-500">Ежедневно</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Форма обратной связи</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="ivan@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Ваше сообщение..."
                />
              </div>
              
              <Button className="w-full">Отправить сообщение</Button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Наши офисы</h2>
            
            <div className="space-y-4">
              {offices.map(office => (
                <div key={office.id} className="border-l-4 border-primary-500 pl-4 py-2">
                  <h3 className="font-semibold text-lg">{office.name}</h3>
                  <p className="text-gray-600 text-sm">{office.address}</p>
                  <p className="text-gray-600 text-sm">{office.phone}</p>
                  <p className="text-gray-500 text-sm">Режим работы: {office.workingHours}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Карта офисов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};