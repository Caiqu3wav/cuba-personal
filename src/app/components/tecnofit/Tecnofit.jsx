'use client';
import "./Tecnofit.css";
import Image from "next/image";
import TecnofitLogo from '../../../../public/assets/img/tecnofit.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Link from 'next/link'
export default function Tecnofit() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia(), breakPoint = 800;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        isPad: `(min-height: ${breakPoint + 130}px)`
      },
      (context) => {
      let { isDesktop, isMobile, isPad } = context.conditions;
      

        gsap.to('.opct-tecnofit', {
            opacity: 1,
            scrollTrigger:{
                trigger: '.tecnodiv',
                endTrigger: '#planos',
                start: isPad ? 'top 970' : isMobile ?  'top 650' : 'top 470',
                end: isPad ? 'top 1060' : isMobile ?  'top 850' : 'top 600',
                scrub: true,
                toggleActions: "play none none none"
            }
        })
    })
    })

  return (
    <div className="flex flex-col bg-blue-500 tecnodiv">
      <div className="custom-shape-divider-top-1712171333 bg-blue-500">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
<Image src={TecnofitLogo} alt="" className="absolute z-10 opct-tecnofit majorthree:w-[300px]
 majorthree:mt-[60px] majorthree2:translate-x-[50%] majorthree2:-mt-2 midtwo:translate-x-[30%]
  midfour:translate-x-[15%] low:translate-x-[5%]" />
<div className="flex flex-col gap-2 w-full items-end text-center majorthree2:mt-[150px]
">
    <div className="w-[430px] midfour:w-[360px] opct-tecnofit bg-blue-500 mt-[130px] text-white mr-[10%]
     majortwo3.1:mr-[3%] majorthree2:mr-0 majorthree2:self-center"><h1 className="btn-shine text-4xl midfour:text-2xl font-semibold border-solid 
     border-b-4 border-green-500">APLICATIVO DE TREINO</h1>
    <p>Com exercícios personalisados
         e suas demontrações, além de feedback do personal trainer.</p>
         <Link href="#planos"><button className="py-2 px-4 rounded-xl bg-green-500 mt-3 text-black hover:bg-blue-600
          hover:text-white transition-all duration-500">ESCOLHA SEU PLANO</button></Link>
         </div></div>
<div className="custom-shape-divider-bottom-1712172840 bg-blue-500">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
</div>
  )
}
