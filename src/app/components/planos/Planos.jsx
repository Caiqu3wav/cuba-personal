'use client';
import Image from "next/image";
import Consult from "../../../../public/assets/consultoriaonlinepersonal.jpg"
import Treino from "../../../../public/assets/consultoriaonlinepresencial.jpg"
import BfImg from "../../../../public/assets/blackfitpic.jpg"
import GymLogo from '../../../../public/assets/img/gymlogo.png'
import { AiOutlineGlobal } from "react-icons/ai"
import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "../../../styles/planos.css"

export default function Planos() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia(), breakPoint = 800;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 100}px)`,
        isPad: `(min-height: ${breakPoint - 1}px)`
      },
      (context) => {
        let { isDesktop, isMobile, isPad } = context.conditions;


        gsap.to(".lateral-cards", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#planos",
            endTrigger: ".footer",
            start: isMobile ? "top 740" : isPad ? 'top 1150' : "top 510",
            end: isMobile ? "top 920" : isPad ? 'top 1250' : "top 590",
            scrub: true,
          }
        })

        gsap.to(".center-card", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#planos",
            endTrigger: ".footer",
            start: isMobile ? "top 700" : isPad ? 'top 1120' : "top 430",
            end: isMobile ? "top 950" : isPad ? 'top 1250' : "top 500",
            scrub: true,
          }
        })
      })
  })

  return (
    <div id="planos" className="pb-4 h-[570px] majorfour1:h-fit majorfour1:pb-7 midtwo2:pb-12 flex flex-col items-center justify-center w-full">
      <h1 className="text-[40px] font-light text-white">PLANOS</h1>
      <hr className=" border-solid border-blue-600 rounded-lg border-2 border-x-[300px]" />

      <div className="flex justify-around majorfour1:gap-9 midfour1:gap-11 w-full h-fit majorfour1:px-3 majorfour1:flex-col">
        <div className="lateral-cards planos-cards translate-x-[-300px] translate-y-[-300px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl">
          <Image src={Consult} className="transition-all rounded-md w-full h-[235px] midtwo:w-[170px] midtwo:h-[170px] duration-700  hover:opacity-75" alt="" />
          <div className="flex flex-col items-center text-[22px] font-semibold text-white text-center h-[100px]
                    majorthree2:h-[120px] midtwo2:h-[85px]">
            <h1 className="flex items-center gap-2"><span className="majorthree:text-sm">Consultoria Online</span> <AiOutlineGlobal className="text-blue-600" /> </h1>
            <p className="text-sm text-gray-300 px-4">Treinos personalizados para você alcançar seus objetivos no seu ritmo.</p>
            <Link className="w-[70%]" href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+a+consultoria+online!">
            <button className=" w-[100%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">SAIBA MAIS</button>
            </Link>
          </div>
        </div>
        <div className="center-card planos-cards self-end translate-y-[200px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 majorfour1:mt-0 rounded-b-[60px] rounded-t-3xl">
          <Image src={Treino} className="transition-all rounded-md w-full midtwo:w-[170px] midtwo:h-[170px] h-[235px] duration-700 hover:opacity-75" alt="" />
          <div className="flex flex-col items-center text-[22px] font-semibold text-white
                    majorthree2:h-[120px] text-center h-[100px] midtwo2:h-[85px]">
            <h1 className="midtwo2:text-[14px] flex items-center gap-2"><span className="majorthree:text-sm">Personal Trainer</span> 
            <Image src={GymLogo} className="w-[30px]" alt="gym logo" />
            </h1>
            <p className="text-sm text-gray-300 px-4">Acompanhamento profissional para maximizar seus treinos e resultados.</p>
            <Link href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+seus+serviços!"
              className="w-[70%]">
              <button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button></Link>
          </div>
        </div>
        <div className="lateral-cards planos-cards w-[300px] majorfour1:mt-7 translate-x-[300px] translate-y-[-300px] opacity-0
                      transition-all duration-400 hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl">
          <Image src={BfImg} className="transition-all rounded-md w-full h-[235px] midtwo:w-[170px] midtwo:h-[170px] duration-700 hover:opacity-75 " alt="" />
          <div className="flex flex-col items-center text-[22px] font-semibold text-white 
                    majorthree2:h-[120px] text-center h-[100px] midtwo2:h-[85px]">
            <h1 className="midtwo2:text-[14px] majorthree:text-sm">Plano BlackFit ⭐</h1>
            <p className="text-sm text-gray-300 majorthree:text-xs px-4">
              O melhor dos dois mundos: acompanhamento completo com Personal Trainer <b>Cuba</b> e Nutricionista <b>Allan</b>.
            </p>
            <Link href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+o+plano+completo+personal+e+nutricionista!"
              className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</Link>                    </div>
        </div>
      </div>
    </div>
  )
}