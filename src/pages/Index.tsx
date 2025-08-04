import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

import HeroSection from '@/components/HeroSection';
import TradingHistory from '@/components/TradingHistory';
import StrategySection from '@/components/StrategySection';
import AuthForms from '@/components/AuthForms';
import InvestmentForm from '@/components/InvestmentForm';
import FAQSection from '@/components/FAQSection';

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
  const [showTelegramCode, setShowTelegramCode] = useState(false);
  
  const handleRegister = () => {
    if (regLogin && regPassword && regWallet) {
      setShowQr(true);
    }
  };

  const handleSendTelegramCode = () => {
    if (loginUsername && loginPassword) {
      setShowTelegramCode(true);
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
      <HeroSection />

      {/* Trading History Section */}
      <TradingHistory 
        visibleTrades={visibleTrades}
        setVisibleTrades={setVisibleTrades}
      />

      {/* Strategy Section */}
      <StrategySection />

      {/* Registration & Investment Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Registration & Login Forms */}
          <AuthForms 
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            showQr={showQr}
            regLogin={regLogin}
            setRegLogin={setRegLogin}
            regPassword={regPassword}
            setRegPassword={setRegPassword}
            regWallet={regWallet}
            setRegWallet={setRegWallet}
            loginUsername={loginUsername}
            setLoginUsername={setLoginUsername}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
            loginCode={loginCode}
            setLoginCode={setLoginCode}
            showTelegramCode={showTelegramCode}
            setShowTelegramCode={setShowTelegramCode}
            handleRegister={handleRegister}
            handleSendTelegramCode={handleSendTelegramCode}
          />

          {/* Investment Form */}
          <InvestmentForm 
            investAmount={investAmount}
            setInvestAmount={setInvestAmount}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

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