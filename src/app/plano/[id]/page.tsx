'use client'
import { useParams } from "next/navigation";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle, Star, Calendar, Users, Trophy, Target } from "lucide-react";
import { use } from 'react'

type Props = {
  params: Promise<{ id: string }>
}

export default function Plano({ params }: Props) {
  const { id: planId } = use(params)

  const personalPlans = [
    {
      name: "Plano 01",
      sessions: "8 aulas mensais",
      frequency: "2 aulas semanais",
      pricePerSession: "R$ 40,00",
      totalPrice: "R$ 320,00"
    },
    {
      name: "Plano 02",
      sessions: "12 aulas mensais",
      frequency: "3 aulas semanais",
      pricePerSession: "R$ 37,50",
      totalPrice: "R$ 450,00"
    },
    {
      name: "Plano 03",
      sessions: "16 aulas mensais",
      frequency: "4 aulas semanais",
      pricePerSession: "R$ 35,00",
      totalPrice: "R$ 560,00"
    },
    {
      name: "Plano 04",
      sessions: "20 aulas mensais",
      frequency: "5 aulas semanais",
      pricePerSession: "R$ 32,50",
      totalPrice: "R$ 650,00"
    }
  ];

  const planDetails = {
    consultoria: {
      name: "Consultoria Online",
      price: "R$ 249/mês",
      description: "Treinos personalizados para seu ritmo, onde quer que você esteja",
      features: [
        "Avaliação física online completa",
        "Planilha de treinos personalizada",
        "Suporte via WhatsApp",
        "Ajustes mensais",
        "App exclusivo para acompanhamento",
        "Vídeos explicativos dos exercícios",
        "Relatório de progresso mensal"
      ],
      benefits: [
        "Flexibilidade total de horários",
        "Treino de qualquer lugar",
        "Economia de tempo",
        "Acompanhamento profissional"
      ],
      idealFor: [
        "Pessoas com agenda corrida",
        "Quem mora longe do personal",
        "Iniciantes que querem orientação",
        "Atletas que precisam de treinos específicos"
      ]
    },
    personal: {
      name: "Personal Trainer",
      price: "A partir de R$ 320/mês",
      description: "Acompanhamento profissional presencial para resultados máximos",
      features: [
        "Avaliação física completa presencial",
        "Treinos presenciais personalizados",
        "Acompanhamento exclusivo 1:1",
        "Relatórios de progresso semanais",
        "Acesso ao app exclusivo",
        "Correção de postura em tempo real",
        "Motivação e suporte constante"
      ],
      benefits: [
        "Atenção 100% personalizada",
        "Correção imediata de movimentos",
        "Motivação constante",
        "Resultados mais rápidos"
      ],
      idealFor: [
        "Pessoas que precisam de motivação extra",
        "Quem quer resultados rápidos",
        "Iniciantes que precisam aprender a forma correta",
        "Atletas em preparação para competições"
      ]
    },
    blackfit: {
      name: "Plano BlackFit ⭐",
      price: "R$ 699/mês",
      description: "O plano completo que combina treino personalizado e nutrição para resultados extraordinários",
      features: [
        "Tudo do plano Personal Trainer",
        "Acompanhamento nutricional completo",
        "Plano alimentar personalizado",
        "Ajustes semanais de treino e dieta",
        "Suporte prioritário 24/7",
        "Suplementação orientada",
        "Acompanhamento de composição corporal",
        "Preparação para competições"
      ],
      benefits: [
        "Transformação completa do corpo",
        "Resultados 3x mais rápidos",
        "Suporte nutricional especializado",
        "Acompanhamento VIP"
      ],
      idealFor: [
        "Atletas profissionais e amadores",
        "Pessoas com objetivos específicos",
        "Quem quer transformação completa",
        "Preparação para competições de corrida"
      ]
    }
  };

  const currentPlan = planDetails[planId as keyof typeof planDetails];

  if (!currentPlan) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Plano não encontrado</h1>
          <p className="text-gray-500">O plano solicitado não existe.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const isPremium = planId === 'blackfit';
  const isPersonal = planId === 'personal';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-600 to-blue-900">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              {isPremium && (
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center text-sm font-bold">
                  <Star className="h-4 w-4 mr-1" fill="currentColor" /> PREMIUM
                </div>
              )}
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">{currentPlan.name}</h1>
            <p className="text-xl text-gray-500 mb-6">{currentPlan.description}</p>
            <div className="text-4xl font-bold text-mainRed mb-8">{currentPlan.price}</div>
          </div>

          {/* Personal Training Plans */}
          {isPersonal && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Opções de Planos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalPlans.map((plan, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-xl text-black">{plan.name}</CardTitle>
                      <CardDescription>{plan.sessions}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-2">
                        <span className="text-sm text-gray-500 font-semibold">{plan.frequency}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-lg font-semibold text-white">{plan.pricePerSession}/aula</span>
                      </div>
                      <div className="text-2xl font-bold text-mainRed">{plan.totalPrice}/mês</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-500">
                  <strong>Hora aula individual:</strong> R$ 40,00
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle className="h-6 w-6 text-mainRed" />
                  O que está incluído
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-mainRed mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-mainRed" />
                  Principais Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {currentPlan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ideal For */}
          <Card className="bg-gray-50 shadow-lg mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-center">
                <Users className="h-6 w-6 text-mainRed" />
                Ideal para você se:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPlan.idealFor.map((item, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-mainRed mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-cuba-red/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Pronto para começar sua transformação?
              </h3>
              <p className="text-gray-400 mb-6">
                Entre em contato agora e agende sua primeira sessão. Vamos juntos alcançar seus objetivos!
              </p>
              <a href={`${isPremium ? 'https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+o+plano+completo+BlackFit+personal+e+nutricionista!'
                : isPersonal ? 'https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+o+plano+personal+e+nutricionista!'
                  : 'https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+o+plano+consultoria+online!'
              }`}>
                <Button 
                  size="lg" 
                  className={`${isPremium 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                    : 'bg-blue-800 hover:bg-red-700 text-white'
                  } px-8 py-3 text-lg font-semibold`}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Consulta
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
