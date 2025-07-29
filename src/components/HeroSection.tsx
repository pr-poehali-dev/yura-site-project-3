import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 px-6 py-20 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in" style={{fontFamily: 'Orbitron, monospace'}}>
          NexusTrade
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Профессиональная торговля криптовалютами
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          Команда опытных трейдеров управляет капиталом с использованием продвинутых алгоритмов. 
          Стабильная прибыль, полная прозрачность операций и защита инвестиций через криптовалюты.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-900 font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
            <Icon name="UserPlus" className="mr-2" size={20} />
            Регистрация
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-full">
            <Icon name="BarChart3" className="mr-2" size={20} />
            История сделок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;