import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 px-6 py-32 text-center bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-white/20 mb-8">
            🚀 Профессиональная торговля криптовалютами
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
          Максимальная
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            прибыль
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Команда профессиональных трейдеров управляет вашим капиталом с использованием 
          передовых алгоритмов и многолетнего опыта работы на крипто-рынках.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-lg">
            <Icon name="TrendingUp" className="mr-2" size={20} />
            Начать инвестировать
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg">
            <Icon name="BarChart3" className="mr-2" size={20} />
            Посмотреть статистику
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">85%</div>
            <div className="text-sm text-gray-400">Успешных сделок</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2.4M</div>
            <div className="text-sm text-gray-400">Под управлением</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-gray-400">Мониторинг рынка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3 года</div>
            <div className="text-sm text-gray-400">Опыт команды</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;