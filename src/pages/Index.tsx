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
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in" style={{fontFamily: 'Orbitron, monospace'}}>
            86%
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Винрейт нашей стратегии
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Команда опытных трейдеров разработала революционную торговую стратегию. 
            Инвестируйте в наш капитал и получайте стабильную прибыль с защитой от потерь.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-900 font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Начать инвестировать
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-full">
              <Icon name="BarChart3" className="mr-2" size={20} />
              Изучить стратегию
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Cards - Chaotic Layout */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Статистика команды
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
            {/* Chaotically positioned stat cards */}
            <Card className="bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105 md:rotate-3 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="TrendingUp" className="mx-auto mb-4 text-emerald-400" size={32} />
                <div className="text-3xl font-bold text-emerald-400 mb-2">86%</div>
                <div className="text-sm text-slate-300">Винрейт</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 md:-rotate-2 hover:rotate-0 md:mt-8">
              <CardContent className="p-6 text-center">
                <Icon name="DollarSign" className="mx-auto mb-4 text-cyan-400" size={32} />
                <div className="text-3xl font-bold text-cyan-400 mb-2">2.3M$</div>
                <div className="text-sm text-slate-300">Управляемый капитал</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 md:rotate-1 hover:rotate-0">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="mx-auto mb-4 text-blue-400" size={32} />
                <div className="text-3xl font-bold text-blue-400 mb-2">1,247</div>
                <div className="text-sm text-slate-300">Активных инвесторов</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 md:-rotate-1 hover:rotate-0 md:mt-6">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" className="mx-auto mb-4 text-purple-400" size={32} />
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-slate-300">Защита от нуля</div>
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

      {/* Investment Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-emerald-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Начать инвестирование
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Сумма инвестиций</label>
                  <Input
                    type="number"
                    placeholder="Введите сумму в USD"
                    value={investAmount}
                    onChange={(e) => setInvestAmount(e.target.value)}
                    className="bg-slate-800/50 border-emerald-400/30 text-white placeholder-slate-400 focus:border-emerald-400"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Без минимальной суммы</span>
                  <span>Максимальная сумма: $50,000</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('1000')}
                    className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                  >
                    $1,000
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('5000')}
                    className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                  >
                    $5,000
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setInvestAmount('10000')}
                    className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                  >
                    $10,000
                  </Button>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-900 font-bold py-4">
                  <Icon name="Wallet" className="mr-2" size={20} />
                  Инвестировать сейчас
                </Button>
                <div className="text-center text-sm text-slate-400">
                  <Badge variant="outline" className="border-emerald-400/30 text-emerald-400">
                    <Icon name="Shield" className="mr-1" size={12} />
                    Защищенные инвестиции
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
                Какова минимальная сумма для инвестирования?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Минимальная сумма составляет $100. Это позволяет начинающим инвесторам 
                попробовать нашу стратегию с минимальными рисками.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-emerald-400/20 bg-slate-800/30 rounded-lg px-6">
              <AccordionTrigger className="text-emerald-400 hover:text-emerald-300">
                Как быстро я могу вывести средства?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Вывод средств обрабатывается в течение 24 часов в рабочие дни. 
                Мы поддерживаем различные способы вывода: банковские переводы, 
                криптовалюты и электронные кошельки.
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