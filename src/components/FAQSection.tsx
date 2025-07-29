import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  return (
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
  );
};

export default FAQSection;