import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TradingHistoryProps {
  visibleTrades: number;
  setVisibleTrades: (value: number) => void;
}

const TradingHistory: React.FC<TradingHistoryProps> = ({ visibleTrades, setVisibleTrades }) => {
  const trades = [
    { coin: 'BTC/USDT', profit: '+12.5%', amount: '2.45 BTC', time: '2ч назад', status: 'profit', exchange: 'Binance' },
    { coin: 'ETH/USDT', profit: '+8.2%', amount: '15.3 ETH', time: '4ч назад', status: 'profit', exchange: 'Bybit' },
    { coin: 'SOL/USDT', profit: '-2.1%', amount: '450 SOL', time: '6ч назад', status: 'loss', exchange: 'OKX' },
    { coin: 'ADA/USDT', profit: '+15.7%', amount: '12,000 ADA', time: '8ч назад', status: 'profit', exchange: 'Binance' },
    { coin: 'MATIC/USDT', profit: '+6.9%', amount: '8,500 MATIC', time: '10ч назад', status: 'profit', exchange: 'Bybit' },
    { coin: 'DOT/USDT', profit: '+4.3%', amount: '1,200 DOT', time: '12ч назад', status: 'profit', exchange: 'KuCoin' },
    { coin: 'LINK/USDT', profit: '+9.8%', amount: '2,400 LINK', time: '14ч назад', status: 'profit', exchange: 'Binance' },
    { coin: 'UNI/USDT', profit: '+3.4%', amount: '3,200 UNI', time: '16ч назад', status: 'profit', exchange: 'Bybit' },
    { coin: 'XRP/USDT', profit: '-1.5%', amount: '18,000 XRP', time: '18ч назад', status: 'loss', exchange: 'OKX' },
    { coin: 'AVAX/USDT', profit: '+11.2%', amount: '850 AVAX', time: '20ч назад', status: 'profit', exchange: 'KuCoin' }
  ];

  return (
    <section className="relative z-10 px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          История сделок
        </h2>
        
        <div className="grid gap-4 mb-8">
          {trades.slice(0, visibleTrades).map((trade, index) => (
            <Card key={index} className={`${trade.status === 'profit' ? 'bg-gray-900 border-white/20' : 'bg-gray-900 border-red-400/30'} hover:border-white/40 transition-all duration-300 transform hover:scale-[1.02]`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${trade.status === 'profit' ? 'bg-white/10' : 'bg-red-400/20'} flex items-center justify-center`}>
                      <Icon name="Coins" className={trade.status === 'profit' ? 'text-white' : 'text-red-400'} size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">{trade.coin}</div>
                      <div className="text-sm text-gray-400">{trade.amount} • {trade.exchange}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${trade.status === 'profit' ? 'text-white' : 'text-red-400'}`}>
                      {trade.profit}
                    </div>
                    <div className="text-sm text-gray-400">{trade.time}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleTrades < 10 && (
          <div className="text-center mb-8">
            <Button 
              onClick={() => setVisibleTrades(10)}
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Download" className="mr-2" size={16} />
              Загрузить еще сделок
            </Button>
          </div>
        )}

        {/* Statistics summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="bg-gray-900 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Icon name="TrendingUp" className="mx-auto mb-4 text-white" size={32} />
              <div className="text-3xl font-bold text-white mb-2">86%</div>
              <div className="text-sm text-gray-400">Успешных сделок</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Icon name="Coins" className="mx-auto mb-4 text-white" size={32} />
              <div className="text-3xl font-bold text-white mb-2">2.3M</div>
              <div className="text-sm text-gray-400">USDT в управлении</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Icon name="Users" className="mx-auto mb-4 text-white" size={32} />
              <div className="text-3xl font-bold text-white mb-2">1,247</div>
              <div className="text-sm text-gray-400">Активных инвесторов</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Icon name="Shield" className="mx-auto mb-4 text-white" size={32} />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Мониторинг рынка</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradingHistory;