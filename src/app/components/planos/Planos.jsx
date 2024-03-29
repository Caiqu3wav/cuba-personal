'use client';
import Image from "next/image";
import Consult from "../../../../public/assets/img/consultoria-online.jpg"
import Treino from "../../../../public/assets/img/Treino.png"
import BfImg from "../../../../public/assets/img/blackfit.jpg"
import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Planos() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to(".lateral-cards", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger:{
            trigger: "#planos",
            endTrigger: ".footer",
            start: "top 510",
            end: "top 590",
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
              start: "top 430",
              end: "top 500",
              scrub: true,
            }
          })
      })
    
    return(
        <div id="planos" className="bg-gradient-to-b pb-4 flex flex-col items-center justify-center w-full from-[#053105] to-[#0cad0c]">
            <h1 className="text-[40px] font-light text-white">PLANOS</h1>
            <hr className=" border-solid border-blue-600 rounded-lg border-2 border-x-[300px]" />
            <div className="flex justify-around w-full">
                <div className="lateral-cards majorthree2:w-[220px] translate-x-[-300px] translate-y-[-300px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl majorfour2:w-[170px] midtwo2:w-[140px]
                 midfour:w-[110px]">
                    <Image src={Consult} className="transition-all majorthree2:h-[200px] majorfour2:h-[150px] midtwo2:h-[120px] h-[283px] 
                    midfour:h-[90px] duration-700 w-full hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white text-center h-[100px]
                    majorthree2:h-[120px] bg-blue-700 midtwo2:h-[85px] ">
                        <h1 className="midtwo2:text-[14px]">Consultoria Online</h1>
                        <button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button>
                    </div>
                </div>
                <div className="center-card majorthree2:w-[220px] translate-y-[200px] majorfour2:w-[170px] midtwo2:w-[140px] opacity-0 w-[300px] transition-all duration-400 
                hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl
                midfour:w-[110px]">
                    <Image src={Treino} className="transition-all majorthree2:h-[200px] majorfour2:h-[150px] midtwo2:h-[120px] midfour:h-[90px] w-full h-[283px] duration-700 hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white 
                    majorthree2:h-[120px] text-center h-[100px] bg-blue-700 midtwo2:h-[85px]">
                        <h1 className="midtwo2:text-[14px]">Personal Trainer</h1>
                        <button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button>                    </div>
                    </div>
                    <div className="lateral-cards majorthree2:w-[220px] majorfour2:w-[170px] midtwo2:w-[140px] translate-x-[300px]  translate-y-[-300px] opacity-0
                     w-[300px] transition-all duration-400 hover:scale-125 cursor-pointer mt-4 rounded-b-[60px] rounded-t-3xl
                     midfour:w-[110px]">
                    <Image src={BfImg} className="transition-all w-full h-[283px] majorthree2:h-[200px] midfour:h-[90px] majorfour2:h-[150px] midtwo2:h-[120px] duration-700 hover:opacity-75 " alt="" />
                    <div className="flex flex-col items-center text-[22px] font-semibold text-white 
                    majorthree2:h-[120px] text-center h-[100px] bg-blue-700 midtwo2:h-[85px]">
                        <h1 className="midtwo2:text-[14px]">Plano BlackFit</h1>
                        <button className="w-[70%] text-[17px] midtwo2:text-[14px] py-2 rounded-lg bg-black text-white transition-all duration-700
                         hover:bg-white hover:text-black">SAIBA MAIS</button>                    </div>
                </div>
            </div>
        </div>
    )
}