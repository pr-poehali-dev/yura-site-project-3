import React from 'react';
import Icon from '@/components/ui/icon';

const StrategySection: React.FC = () => {
  return (
    <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Наша торговая стратегия
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-slate-800/50 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
            <Icon name="Target" className="mx-auto mb-4 text-emerald-400" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Точность входов</h3>
            <p className="text-slate-300">Алгоритмический анализ рынка для максимально точных точек входа</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
            <Icon name="Shield" className="mx-auto mb-4 text-cyan-400" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Управление рисками</h3>
            <p className="text-slate-300">Система автоматического управления рисками и защиты капитала</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-800/50 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
            <Icon name="Zap" className="mx-auto mb-4 text-blue-400" size={40} />
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Быстрое исполнение</h3>
            <p className="text-slate-300">Мгновенное исполнение сделок с минимальным проскальзыванием</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;