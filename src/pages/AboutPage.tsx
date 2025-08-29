import React from 'react';
import { Award, Users, Car, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">О компании ShibaCars</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Наша история</h2>
            <p className="text-gray-600 mb-4">
              ShibaCars — это современная компания по аренде автомобилей, основанная в 2020 году. 
              Мы стремимся предоставить нашим клиентам лучший сервис и широкий выбор автомобилей 
              для любых потребностей.
            </p>
            <p className="text-gray-600">
              Название нашей компании вдохновлено верностью и надежностью породы собак Шиба-ину, 
              и мы стремимся воплощать эти качества в нашем сервисе каждый день.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ автомобилей</h3>
              <p className="text-gray-600">
                Большой парк современных автомобилей различных классов
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50 000+ клиентов</h3>
              <p className="text-gray-600">
                Нам доверяют десятки тысяч довольных клиентов
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Все автомобили проходят тщательную проверку и подготовку
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Полная страховка</h3>
              <p className="text-gray-600">
                Все автомобили застрахованы для вашей безопасности
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
            <p className="text-gray-600 mb-4">
              Мы стремимся сделать аренду автомобилей простой, доступной и приятной для каждого клиента. 
              Наша цель — предоставить вам свободу передвижения с комфортом и уверенностью.
            </p>
            <h3 className="text-xl font-semibold mb-3">Наши ценности:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Прозрачность и честность в работе с клиентами</li>
              <li>Индивидуальный подход к каждому</li>
              <li>Постоянное улучшение качества сервиса</li>
              <li>Забота о безопасности и комфорте клиентов</li>
              <li>Доступные цены и гибкие условия аренды</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};