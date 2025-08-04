import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface AuthFormsProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  showQr: boolean;
  regLogin: string;
  setRegLogin: (value: string) => void;
  regPassword: string;
  setRegPassword: (value: string) => void;
  regWallet: string;
  setRegWallet: (value: string) => void;
  loginUsername: string;
  setLoginUsername: (value: string) => void;
  loginPassword: string;
  setLoginPassword: (value: string) => void;
  loginCode: string;
  setLoginCode: (value: string) => void;
  showTelegramCode: boolean;
  setShowTelegramCode: (value: boolean) => void;
  handleRegister: () => void;
  handleSendTelegramCode: () => void;
}

const AuthForms: React.FC<AuthFormsProps> = ({
  isLogin,
  setIsLogin,
  showQr,
  regLogin,
  setRegLogin,
  regPassword,
  setRegPassword,
  regWallet,
  setRegWallet,
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  loginCode,
  setLoginCode,
  showTelegramCode,
  setShowTelegramCode,
  handleRegister,
  handleSendTelegramCode,
}) => {
  return (
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
              
              {/* Кнопка отправки кода появляется только после ввода логина и пароля */}
              {loginUsername && loginPassword && !showTelegramCode && (
                <Button 
                  size="lg" 
                  onClick={handleSendTelegramCode}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Отправить код в Telegram
                </Button>
              )}
              
              {/* Поле для кода и кнопка входа появляются только после отправки кода */}
              {showTelegramCode && (
                <>
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
                    disabled={!loginCode}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold disabled:opacity-50"
                  >
                    <Icon name="LogIn" className="mr-2" size={20} />
                    Войти
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AuthForms;