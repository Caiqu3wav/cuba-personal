'use client';
import Image from "next/image";
import CubaPic from "../../../../public/assets/cubatreinando.jpeg"
import RunPic from '../../../../public/assets/corridarua.jpeg'
import { Button } from "@/app/components/ui/button";
import { Trophy, Award, Users } from "lucide-react";

export default function About2()  {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-between pt-4">
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="text-yellow-100  uppercase tracking-wider font-semibold mb-2">Conheça o seu trainer</div>
            <Image src={CubaPic} className="w-44 rounded-3xl" alt="cuba personal"/>
            <h2 className="text-2xl lowMobile:text-4xl text-yellow-100 font-bold mb-6">Gleidson Roberto dos Santos</h2>
            <p className="text-gray-400 underline mb-4 text-lg">
              CREF: 126111-G/SP • Guaratinguetá - SP
            </p>
            <p className="mb-6 text-gray-500">
              Meu nome é Gleidson Roberto dos Santos e possuo grande experiência em treinamento esportivo. Sou natural do Brasil, Estado de São Paulo, e ganhei uma Bolsa de Estudos em 2005, concluindo os estudos em 2011 em Cuba, onde me dediquei à formação da educação física e esporte.
            </p>
            <p className="mb-6 text-gray-500">
              Desde 2012, me dedico aos treinamentos de musculação e outros esportes como levantamento de peso, atletismo, boxe e ao bodybuilder fitness. Espero passar toda minha experiência e conhecimentos para contribuir com seus objetivos.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl text-gray-400 underline font-bold mb-4">Especialista em Treinamento para Competições</h3>
              <p className="mb-6 text-gray-500">
                Além do treinamento personalizado, me destaco na preparação de atletas amadores para competições de corrida. Meus alunos, de todas as idades, conquistam pódios regularmente em provas regionais e estaduais, resultado de um método exclusivo que desenvolvi combinando técnicas cubanas e brasileiras.
              </p>
              <p className="mb-6 text-gray-500">
                Também atuo como árbitro oficial em competições de atletismo, trazendo conhecimento técnico aprofundado sobre regras e desempenho esportivo para meus treinamentos.
              </p>
            </div>
            
            <Button className="bg-blue-900 hover:bg-red-700 text-white px-8">Converse Comigo</Button>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative mt-4">
            <div className="aspect-ratio-1/1 flex items-center justify-center w-fit relative">
              <Image 
                src={RunPic} 
                alt="Personal Trainer Cuba" 
                className="rounded-lg w-[450px] shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-cuba-red text-lg">+10 anos</p>
                <p className="text-gray-600">de experiência</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-cuba-red text-lg">+500</p>
                <p className="text-gray-600">alunos transformados</p>
              </div>
            </div>
            <div className="mt-20 pt-10 border-t text-white border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Resultados nas Competições</h2>
          
          <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-4">
            <div className="bg-white flex flex-col items-center rounded-lg p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-cuba-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atletas no Pódio</h3>
              <p className="text-4xl font-bold text-cuba-red mb-2">78</p>
              <p className="text-gray-500">
                Atletas treinados que subiram ao pódio em competições nos últimos 3 anos
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-cuba-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competições</h3>
              <p className="text-4xl font-bold text-cuba-red mb-2">45+</p>
              <p className="text-gray-600">
                Eventos esportivos arbitrados ou com alunos participantes anualmente
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-cuba-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Categorias</h3>
              <p className="text-4xl font-bold text-cuba-red mb-2">Todas</p>
              <p className="text-gray-500">
                De crianças a adultos, do iniciante ao avançado, preparação completa para competições
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
        {/* Racing Results Section */}
        <div className="mt-20 pt-10 border-t text-white border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Resultados nas Competições</h2>         
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-500 italic mb-4">
              &quot;O diferencial do treinamento com o Cuba é a preparação técnica e mental para competições. Meu filho melhorou drasticamente seu desempenho em apenas 6 meses de treino.&quot;
            </p>
            <p className="font-medium">— Renata S., mãe de atleta juvenil</p>
          </div>
      </div>
    </section>
  );
};