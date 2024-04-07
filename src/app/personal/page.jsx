'use client';
import Header from '../components/header/Header';
import './style.css'
import Image from 'next/image';
import Emagrecimento from '../../../public/assets/img/emagrecimentoimg.jpg'
import Hipertrofia from '../../../public/assets/img/hyipertrofiaimg.png'
import Definicao from '../../../public/assets/img/definicaoimg.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import Footer from '../components/footer/Footer'
import GymLogo from '../../../public/assets/img/gymlogo.png'
import Positive from '../../../public/assets/img/verifica.png'

export default function PersonalPg(){
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".overlay-personal", {
            x: 0, duration: 2, opacity: 1
        })

        gsap.to(".training-cards", {
            x: 0, duration: 2, opacity: 1
        })
    })

    return(
        <div className='personal-dad w-full overflow-x-hidden'>
            <Header/>
            <div className='personalpg-container w-full min-h-[560px] flex majorthree:flex-col majorthree:gap-4
             majorthree:py-3 items-center justify-around'>
            <div className="overlay-personal opacity-0 translate-x-[-300px] flex flex-col w-[460px] ml-[200px]
             majortwo1:ml-[50px] majortwo4:ml-[10px] majortwo4:w-[400px] px-4 py-4">
            <h1 className="text-green-500 font-semibold text-[40px]">Personal Training <br /> CUBA</h1>
            <p className="text-white px-4 midtwo:text-[13px]">Com vasta experiência em treinamento
             esportivo e formação em educação física e esporte obtida em Cuba, estou dedicado a ajudar
              você a alcançar seus objetivos de condicionamento físico. Desde 2012, tenho me especializado 
              em musculação, levantamento de peso, atletismo, boxe e bodybuilding fitness. Meu compromisso
               é compartilhar todo o meu conhecimento e experiência para ajudá-lo a atingir seus objetivos
                de forma eficaz e segura.</p>
          </div>
          <div className="training-cards opacity-0 translate-x-[300px] flex flex-col gap-2">
            <div className='flex'><Image src={Emagrecimento} className='w-[200px]' alt='person running'/>
            <div className='w-[240px] pl-1 bg-white'>
                <h1 className='text-green-600'>Emagrecimento</h1>
                <p className='text-[10px]'>Com treinamento personalizado, crio um programas 
                    de exercícios e dieta adequados para ajudar a queimar gordura corporal de forma eficaz. 
                    Isso pode incluir exercícios cardiovasculares, treinamento de resistência e orientação 
                    nutricional para promover a perda de peso de maneira saudável e sustentável.</p>
                </div>
                </div>
                <div className='flex'><Image src={Hipertrofia} className='w-[200px]'/>
            <div className='w-[240px] pl-1 bg-white'>
                <h1 className='text-green-600'>Hipertrofia</h1>
                <p className='text-[10px]'>Para ganho de massa muscular, desenvolvo
                      programas de treinamento de resistência focado em exercícios que visam o
                      aumento da massa muscular. Pode incluir técnicas avançadas de levantamento
                       de peso, periodização do treinamento e ajustes na dieta para otimizar o 
                       crescimento muscular e alcançar os objetivos de hipertrofia.</p>
                </div>
                </div>
                <div className='flex'><Image src={Definicao} className='w-[200px]'/>
            <div className='w-[240px] pl-1 bg-white'>
                <h1 className='text-green-600'>Definicao</h1>
                <p className='text-[10px]'>Para alcançar definição muscular, criação um programa que 
                    combina treinamento de resistência com exercícios para promover 
                    a queima de gordura e o desenvolvimento muscular. Estratégias de alimentação 
                    e suplementação podem ser incorporadas para ajudar a reduzir a gordura corporal e realçar
                     a definição muscular, resultando em um físico mais tonificado e atlético.</p>
                     </div>
                </div>
          </div>
            </div>
            
<div className='flex flex-col pb-4'>
    <div className='pt-[37px] ml-4 flex w-[400px]'> <div className='w-fit'><h1 className='text-[34px] font-semibold text-green-600 border-solid
     border-b-2 border-slate-600 rounded-l-lg rounded-r-[-8px]'>PLANOS E INFORMAÇÕES</h1>
    <p className='text-white text-[25px]'>Analise os tipos de planos e preços</p>
    </div><Image src={GymLogo} className="gymlogo w-[50px] absolute ml-[50%]" alt="gym logo"/>
</div>
        <div className='self-center w-[875px] majorthree:w-[80%] majorfour:w-[93%] midtw:w-[60%] midtwo4:w-[73%]'>
            <div className=' grid grid-flow-col  midtw:grid-rows-3 midtw:grid-flow-row w-full'>
                <div className=' rounded-tl-lg midtw:rounded-t-lg flex flex-col items-center justify-center bg-white majorthree:text-[13px]'>
                    <h1 className='text-green-600 text-lg
                 font-semibold'>2 Aulas/Semana</h1>
                 <p>Valor Semanal: <span className='text-blue-600 font-semibold'>R$50/aula</span></p>
                <p>Valor Mensal: <span className='text-blue-600 font-semibold'>R$400</span></p>
                <p>Renovação: <span className='text-blue-600 font-semibold'>Manual</span></p></div>
                <div className='majorthree:text-[13px] flex flex-col items-center justify-center bg-white'><h1 className='text-lg text-green-600
                 font-semibold'>3 Aulas/Semana</h1>
                <p>Valor Semanal: <span className='text-blue-600 font-semibold'>R$45/aula</span></p>
                <p>Valor Mensal: <span className='text-blue-600 font-semibold'>R$540</span></p>
                <p>Renovação: <span className='text-blue-600 font-semibold'>Manual</span></p></div>
                <div className='majorthree:text-[13px] rounded-tr-lg midtw:rounded-none flex flex-col items-center justify-center bg-white'>
                    <h1 className='text-lg text-green-600
                 font-semibold'>5 Aulas/Semana</h1>
                <p>Valor Semanal: <span className='text-blue-600 font-semibold'>R$35/aula</span></p>
<p>Valor Mensal: <span className='text-blue-600 font-semibold'>R$700</span></p>
                <p>Renovação: <span className='text-blue-600 font-semibold'>Manual</span></p></div>
            </div>
            <div className='midtw:text-[11px] midfour:text-[9px] bg-gradient-to-br  w-full from-slate-900 to-green-950 flex-col flex py-2'>
                <div className='flex w-full justify-evenly '>
                <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
                <p className='text-white'>Acompanhamento personalizado durante a sessão.</p></div>
                <div className='flex gap-1 relative top-8'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
                <p className='text-white'>Protocolo de treinamento</p></div>
                </div>

                <div className='flex w-full justify-evenly mt-8'>
                <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
                <p className='text-white'>Adaptação dos exercícios conforme o progresso.</p></div>
                <div className='flex gap-1 relative top-8'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
                <p className='text-white'>Orientação sobre o uso correto dos equipamentos.</p></div>
                </div>
                <div className='flex self-center mt-12'>
                <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
                <p className='text-white'>Disponibilidade para dúvidas e orientações adicionais.</p></div>
                </div>
            </div>
            <button className=' bg-gradient-to-bl from-green-950 to-white w-full
             rounded-b-lg py-2 font-bold text-green-800'>FAÇA PARTE</button>
        </div>
</div>
            <Footer/>
        </div>
    )
}