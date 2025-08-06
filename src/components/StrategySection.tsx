import React from 'react';
import Icon from '@/components/ui/icon';

const StrategySection: React.FC = () => {
  return (
    <section className="relative z-10 px-6 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Наша торговая стратегия
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-black border border-white/20 hover:border-white/40 transition-all duration-300">
            <Icon name="Target" className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-white">Точность входов</h3>
            <p className="text-gray-400">Алгоритмический анализ рынка для максимально точных точек входа</p>
          </div>
          <div className="p-6 rounded-lg bg-black border border-white/20 hover:border-white/40 transition-all duration-300">
            <Icon name="Shield" className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-white">Управление рисками</h3>
            <p className="text-gray-400">Система автоматического управления рисками и защиты капитала</p>
          </div>
          <div className="p-6 rounded-lg bg-black border border-white/20 hover:border-white/40 transition-all duration-300">
            <Icon name="Zap" className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-white">Быстрое исполнение</h3>
            <p className="text-gray-400">Мгновенное исполнение сделок с минимальным проскальзыванием</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;