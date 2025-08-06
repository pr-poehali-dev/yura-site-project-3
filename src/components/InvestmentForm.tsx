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
    <Card className="bg-gray-900 border-white/20 backdrop-blur-sm">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Инвестиции
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Сумма в USDT</label>
            <Input
              type="number"
              placeholder="Введите сумму"
              value={investAmount}
              onChange={(e) => setInvestAmount(e.target.value)}
              className="bg-black/50 border-white/30 text-white placeholder-gray-400 focus:border-white"
            />
          </div>
          <div className="text-center text-sm text-gray-400">
            <span>Без минимальной суммы • Только криптовалюты</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('10')}
              className="border-white/30 text-white hover:bg-white hover:text-black text-xs py-2"
            >
              10
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('100')}
              className="border-white/30 text-white hover:bg-white hover:text-black text-xs py-2"
            >
              100
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('1000')}
              className="border-white/30 text-white hover:bg-white hover:text-black text-xs py-2"
            >
              1K
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('5000')}
              className="border-white/30 text-white hover:bg-white hover:text-black text-xs py-2"
            >
              5K USDT
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setInvestAmount('10000')}
              className="border-white/30 text-white hover:bg-white hover:text-black text-xs py-2"
            >
              10K USDT
            </Button>
          </div>
          <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 font-bold">
            <Icon name="Coins" className="mr-2" size={20} />
            Инвестировать
          </Button>
          <div className="text-center text-sm text-gray-400">
            <Badge variant="outline" className="border-white/30 text-white">
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