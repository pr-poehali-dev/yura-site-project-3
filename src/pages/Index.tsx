import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [investAmount, setInvestAmount] = useState('');
  const [floatingCards, setFloatingCards] = useState([]);
  const [visibleTrades, setVisibleTrades] = useState(6);
  
  // Registration & Login states
  const [isLogin, setIsLogin] = useState(false);
  const [showQr, setShowQr] = useState(false);
  
  // Registration form states
  const [regLogin, setRegLogin] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regWallet, setRegWallet] = useState('');
  
  // Login form states
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginCode, setLoginCode] = useState('');
  
  const handleRegister = () => {
    if (regLogin && regPassword && regWallet) {
      setShowQr(true);
    }
  };

  // Generate floating cards with random positions
  useEffect(() => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.6,
        delay: Math.random() * 2
      });
    }
    setFloatingCards(cards);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Floating background cards */}
      {floatingCards.map((card) => (
        <div
          key={card.id}
          className="absolute opacity-10 pointer-events-none animate-pulse"
          style={{
            left: `${card.x}%`,
            top: `${card.y}%`,
            transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
            animationDelay: `${card.delay}s`
          }}
        >
          <Card className="w-32 h-20 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/30">
            <CardContent className="p-3">
              <div className="h-2 bg-emerald-400/50 rounded mb-2"></div>
              <div className="h-1 bg-cyan-400/50 rounded"></div>
            </CardContent>
          </Card>
        </div>
      ))}

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 backdrop-blur-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          NexusTrade
        </div>
        <div className="hidden md:flex space-x-8">
          {['Главная', 'Стратегия', 'Статистика', 'Инвестирование', 'FAQ'].map((item) => (
            <a key={item} href="#" className="hover:text-emerald-400 transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
        <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
          Личный кабинет
        </Button>
      </nav>

      {/* Hero Section */}
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

      {/* Trading History Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            История сделок
          </h2>
          
          <div className="grid gap-4 mb-8">
            {/* Trading cards with crypto data */}
            {[
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
            ].slice(0, visibleTrades).map((trade, index) => (
              <Card key={index} className={`bg-gradient-to-br ${trade.status === 'profit' ? 'from-emerald-500/10 to-transparent border-emerald-400/30' : 'from-red-500/10 to-transparent border-red-400/30'} hover:border-opacity-60 transition-all duration-300 transform hover:scale-[1.02] ${index % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'} hover:rotate-0`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${trade.status === 'profit' ? 'bg-emerald-400/20' : 'bg-red-400/20'} flex items-center justify-center`}>
                        <Icon name="Coins" className={trade.status === 'profit' ? 'text-emerald-400' : 'text-red-400'} size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-slate-100">{trade.coin}</div>
                        <div className="text-sm text-slate-400">{trade.amount} • {trade.exchange}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${trade.status === 'profit' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trade.profit}
                      </div>
                      <div className="text-sm text-slate-400">{trade.time}</div>
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
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Download" className="mr-2" size={16} />
                Загрузить еще сделок
              </Button>
            </div>
          )}

          {/* Statistics summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105 md:rotate-2 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="TrendingUp" className="mx-auto mb-4 text-emerald-400" size={32} />
                <div className="text-3xl font-bold text-emerald-400 mb-2">86%</div>
                <div className="text-sm text-slate-300">Успешных сделок</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 md:-rotate-1 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="Coins" className="mx-auto mb-4 text-cyan-400" size={32} />
                <div className="text-3xl font-bold text-cyan-400 mb-2">2.3M</div>
                <div className="text-sm text-slate-300">USDT в управлении</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 md:rotate-1 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="mx-auto mb-4 text-blue-400" size={32} />
                <div className="text-3xl font-bold text-blue-400 mb-2">1,247</div>
                <div className="text-sm text-slate-300">Активных инвесторов</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 md:-rotate-2 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" className="mx-auto mb-4 text-purple-400" size={32} />
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-slate-300">Мониторинг рынка</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
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

      {/* Registration & Investment Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Registration & Login Forms */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-emerald-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Tabs for Registration/Login */}
              <div className="flex mb-6 bg-slate-800/50 rounded-lg p-1">
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    !isLogin 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Регистрация
                </button>
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isLogin 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Вход
                </button>
              </div>

              {!isLogin ? (
                <>
                  <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Регистрация
                  </h2>
                  {!showQr ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Логин</label>
                        <Input
                          type="text"
                          placeholder="Введите логин"
                          value={regLogin}
                          onChange={(e) => setRegLogin(e.target.value)}
                          className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Пароль</label>
                        <Input
                          type="password"
                          placeholder="Введите пароль"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Кошелек USDT</label>
                        <Input
                          type="text"
                          placeholder="0x... или адрес кошелька"
                          value={regWallet}
                          onChange={(e) => setRegWallet(e.target.value)}
                          className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                        />
                      </div>
                      <Button 
                        size="lg" 
                        onClick={handleRegister}
                        disabled={!regLogin || !regPassword || !regWallet}
                        className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold disabled:opacity-50"
                      >
                        <Icon name="UserPlus" className="mr-2" size={20} />
                        Зарегистрироваться
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center space-y-6">
                      <div className="bg-white p-6 rounded-lg inline-block">
                        <div className="w-48 h-48 bg-slate-200 flex items-center justify-center text-slate-600 text-sm">
                          QR-код для привязки<br/>Telegram бота
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-slate-300 text-sm">
                          Отсканируйте QR-код в Telegram боте для завершения регистрации
                        </p>
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
                        >
                          <Icon name="MessageCircle" className="mr-2" size={20} />
                          Привязать Telegram
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Авторизация
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Логин</label>
                      <Input
                        type="text"
                        placeholder="Введите логин"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Пароль</label>
                      <Input
                        type="password"
                        placeholder="Введите пароль"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Код из Telegram</label>
                      <Input
                        type="text"
                        placeholder="Введите код подтверждения"
                        value={loginCode}
                        onChange={(e) => setLoginCode(e.target.value)}
                        className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                      />
                    </div>
                    <Button 
                      size="lg" 
                      disabled={!loginUsername || !loginPassword || !loginCode}
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold disabled:opacity-50"
                    >
                      <Icon name="LogIn" className="mr-2" size={20} />
                      Войти
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Investment Form */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Инвестиции
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Сумма в USDT</label>
                  <Input
                    type="number"
                    placeholder="Введите сумму"
                    value={investAmount}
                    onChange={(e) => setInvestAmount(e.target.value)}
                    className="bg-slate-800/50 border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400"
                  />
                </div>
                <div className="text-center text-sm text-slate-300">
                  <span>Без минимальной суммы • Только криптовалюты</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('1000')}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    1K USDT
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('5000')}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    5K USDT
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('10000')}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    10K USDT
                  </Button>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-bold">
                  <Icon name="Coins" className="mr-2" size={20} />
                  Инвестировать
                </Button>
                <div className="text-center text-sm text-slate-400">
                  <Badge variant="outline" className="border-cyan-400/30 text-cyan-400">
                    <Icon name="Shield" className="mr-1" size={12} />
                    Только криптовалюты
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-emerald-400/20 bg-slate-800/30 rounded-lg px-6">
              <AccordionTrigger className="text-emerald-400 hover:text-emerald-300">
                Как работает система защиты от потерь?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Наша система автоматически распределяет прибыли и убытки между всеми участниками, 
                исключая возможность полной потери капитала. Каждый инвестор всегда получает 
                минимальную защищенную долю.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-emerald-400/20 bg-slate-800/30 rounded-lg px-6">
              <AccordionTrigger className="text-emerald-400 hover:text-emerald-300">
                Какие криптовалюты поддерживаются?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Мы принимаем USDT, BTC, ETH и другие основные криптовалюты. 
                Вывод средств также осуществляется только в криптовалютах на ваш кошелек.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-emerald-400/20 bg-slate-800/30 rounded-lg px-6">
              <AccordionTrigger className="text-emerald-400 hover:text-emerald-300">
                Как быстро я могу вывести средства?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Вывод средств в криптовалютах обрабатывается в течение 24 часов. 
                Все выводы осуществляются только на криптокошельки, указанные при регистрации.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-emerald-400/20 bg-slate-800/30 rounded-lg px-6">
              <AccordionTrigger className="text-emerald-400 hover:text-emerald-300">
                Какие документы нужны для регистрации?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Для регистрации достаточно электронной почты и номера телефона. 
                Для вывода крупных сумм может потребоваться верификация личности 
                в соответствии с международными стандартами KYC.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-slate-900/80 border-t border-emerald-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NexusTrade
          </div>
          <p className="text-slate-400 mb-6">Профессиональные торговые решения для вашего капитала</p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-slate-500">
            © 2024 NexusTrade. Все права защищены. Инвестиции сопряжены с рисками.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;