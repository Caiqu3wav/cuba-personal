'use client';
import Image from "next/image";
import CubaPic from "../../../../public/assets/img/cubapic.jpg"
import CubaLogo from "../../../../public/assets/cubalogo.png"
import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapLocationDot } from "react-icons/fa6";

export default function AboutPersonal() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".personal-right", {
      opacity: 1,
      scrollTrigger:{
        trigger: ".about-personal",
        endTrigger: ".about-section",
        start: "top 820",
        end: "top 1000",
        scrub: true,
      }
    })

    gsap.to(".overlay-personal-right", {
      opacity: 1,
      y: 0,
      scrollTrigger:{
        trigger: ".about-personal",
        endTrigger: ".about-section",
        start: "top 650",
        end: "top 800",
        scrub: true,
      }
    })
  })
    return (
      <div className="flex w-full min-h-[500px] items-center justify-between">
        <div id="personal" className="personal-right opacity-0 transition-opacity 
          flex flex-col min-h-[500px] pb-4 items-center justify-between">
        <Image src={CubaLogo} className="w-[100px] midtwo2:w-[60px]" alt="cuba logo" />
          <div className="overlay-personal-right translate-y-[400px] flex flex-col items-center justify-center w-[70%] midfour:w-[86%]
           rounded-xl py-3">
            <Image src={CubaPic} className="w-[160px] h-[190px] midtwo:w-[120px] midtwo:h-[150px] rounded-[60%] self-center" alt="personal cuba picture"/>
            <h1 className="font-extrabold text-slate-600 border-solid border-b-2 rounded-lg ">Gleidson Roberto dos Santos</h1>
            <h2 className="flex gap-2 items-center text-mainRed"><span className="text-mainRed">Guaratinguetá - SP</span> <FaMapLocationDot className="text-mainRed" size={30} /> </h2>
            <h3 className="font-bold text-blue-900">CREF: 126111-G/SP</h3>
            <p className="text-white px-4 midtwo:text-[13px]">Meu nome é Gleidson Roberto dos Santos tenho grande experiência em 
            treinamento esportivo sou natural do Brasil
              Estado de São Paulo ganhei uma Bolsa de Estudos em 2005 concluí os estudos em 2011 em Cuba onde me dediquei à formação
              da educação física e esporte e desde 2012 me dedico aos treinamentos de musculação e outros esportes como levantamento 
              de peso, atletismo, boxe e ao bodybuilder fitness. Espero passar toda minha experiência e conhecimentos para contribuir 
              com seus objetivos.</p>
          </div>
        </div>
      </div>
    );
  }