import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface InvestmentFormProps {
  investAmount: string;
  setInvestAmount: (value: string) => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ investAmount, setInvestAmount }) => {
  return (
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
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('10')}
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-xs py-2"
            >
              10
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('100')}
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-xs py-2"
            >
              100
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('1000')}
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-xs py-2"
            >
              1K
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('5000')}
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-xs py-2"
            >
              5K USDT
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('10000')}
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-xs py-2"
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
  );
};

export default InvestmentForm;