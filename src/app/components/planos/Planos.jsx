'use client';
import Image from "next/image";
import Consult from "../../../../public/assets/img/consultoria-online.jpg"
import Treino from "../../../../public/assets/img/Treino.webp"
import BfImg from "../../../../public/assets/img/blackfit.jpg"
import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Planos() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia(), breakPoint = 800;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        isPad: `(min-height: ${breakPoint - 1}px)`
      },
      (context) => {
      let { isDesktop, isMobile, isPad } = context.conditions;
      
    
        gsap.to(".lateral-cards", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger:{
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
            scrollTrigger:{
              trigger: "#planos",
              endTrigger: ".footer",
              start: isMobile ? "top 700" : isPad ? 'top 1120' : "top 430",
              end: isMobile ? "top 950" : isPad ? 'top 1250' : "top 500",
              scrub: true,
            }
          })
        })
      })
    
    return(
        <div id="planos" className="pb-4 flex flex-col items-center justify-center w-full">
            <h1 className="text-[40px] font-light text-white">PLANOS</h1>
            <hr className=" border-solid border-blue-600 rounded-lg border-2 border-x-[300px]" />
            <div className="flex justify-around w-full midtwo3:flex-col midtwo3:items-center">
                <div className="lateral-cards majorthree2:w-[220px] translate-x-[-300px] translate-y-[-300px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl majorfour2:w-[170px]
                 ">
                    <Image src={Consult} className="transition-all majorthree2:h-[200px] majorfour2:h-[150px] h-[283px] 
                     duration-700 w-full hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white text-center h-[100px]
                    majorthree2:h-[120px] midtwo2:h-[85px] ">
                        <h1 className="midtwo2:text-[14px]">Consultoria Online</h1>
                        <Link className="w-[70%]" href="/consultoriaonline"><button className=" w-[100%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black text-nowrap">SAIBA MAIS</button></Link>
                    </div>
                </div>
                <div className="center-card majorthree2:w-[220px] translate-y-[200px] majorfour2:w-[170px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl
                ">
                    <Image src={Treino} className="transition-all majorthree2:h-[200px] majorfour2:h-[150px] w-full h-[283px] duration-700 hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white 
                    majorthree2:h-[120px] text-center h-[100px] midtwo2:h-[85px]">
                        <h1 className="midtwo2:text-[14px]">Personal Trainer</h1>
                        <Link className="w-[70%]" href="/personal"><button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button></Link>                   </div>
                    </div>
                    <div className="lateral-cards majorthree2:w-[220px] majorfour2:w-[170px] translate-x-[300px]  translate-y-[-300px] opacity-0
                     w-[300px] transition-all duration-400 hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl
                    ">
                    <Image src={BfImg} className="transition-all w-full h-[283px] majorthree2:h-[200px] majorfour2:h-[150px] duration-700 hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white 
                    majorthree2:h-[120px] text-center h-[100px] midtwo2:h-[85px]">
                        <h1 className="midtwo2:text-[14px]">Plano BlackFit</h1>
                        <button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button>                    </div>
                </div>
            </div>
        </div>
    )
}