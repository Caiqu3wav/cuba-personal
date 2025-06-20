'use client'
import { Helmet } from "react-helmet";
import Header from "@/app/components/header/Header";
import Plans from "@/app/components/planos/Planos";
import Footer from "@/app/components/footer/Footer";
import '../../styles/planos.css'

const PlansPage = () => {
  return (
    <div className="min-h-screen">
    <div className="bg-gif">
      <Helmet>
        <title>Planos de Treinamento | CUBA Personal</title>
        <meta name="description" content="Conheça os planos de treinamento personalizados oferecidos pelo CUBA Personal para alcançar seus objetivos de forma eficiente." />
      </Helmet>
      <Header />
      <div className="pt-20 overflow-x-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Nossos Planos</h1>
            <p className="text-gray-400 text-lg">
              Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada para uma vida mais saudável hoje mesmo.
            </p>
          </div>
        </div>
        <Plans />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlansPage;