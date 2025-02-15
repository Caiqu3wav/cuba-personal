'use client';
import "./Tecnofit.css";
import Image from "next/image";
import TecnofitLogo from '../../../../public/assets/img/tecnofit.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Link from 'next/link'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import CubaLogo from '../../../../public/assets/cubalogo.png'
import AllanLogo from '../../../../public/assets/logoallangreen.png'

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
          scrollTrigger: {
            trigger: '.tecnodiv',
            endTrigger: '#planos',
            start: isPad ? 'top 970' : isMobile ? 'top 650' : 'top 470',
            end: isPad ? 'top 1060' : isMobile ? 'top 850' : 'top 600',
            scrub: true,
            toggleActions: "play none none none"
          }
        })
      })
  })

  return (
    <div className="flex flex-col bg-mainBlue tecnodiv">
      <div className="custom-shape-divider-top-1712171333 bg-mainBlue">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
      <Image src={TecnofitLogo} alt="" className="absolute z-10 opct-tecnofit majorthree:w-[300px]
 majorthree:mt-[60px] majorthree2:translate-x-[50%] majorthree2:-mt-2 midtwo:translate-x-[30%]
  midfour:translate-x-[15%] low:translate-x-[5%]" />
      <div className="flex flex-col gap-2 w-full items-end text-center majorthree2:mt-[150px]
">
        <div className="w-[430px] midfour:w-[360px] opct-tecnofit bg-mainBlue  text-white mr-[10%]
     majortwo3.1:mr-[3%] majorthree2:mr-0 majorthree2:self-center">
          <div>
            <div className="flex gap-3 items-center justify-center">
              <Image src={CubaLogo} className="w-[67px]" alt="cuba-logo" />
              <Image src={AllanLogo} className="w-[79px]" alt="cuba-logo" />
            </div>
            <h1 className="btn-shine text-4xl midfour:text-2xl font-semibold border-solid 
     border-b-4 border-black">CONSULTORIA ONLINE</h1>
            <p>+</p>
            <h1 className="btn-shine2 text-xl midfour:text-2xl font-semibold border-solid 
     border-b-4 border-black">ACOMPANHAMENTO NUTRICIONAL</h1>
          </div>
          <ul className="flex mt-2 justify-center flex-col text-start space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Avaliação Física
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Balança com Biopedância
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> App para acompanhar seus treinos e metas
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Plano Alimentar
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Otimização do seu tempo
            </li>
            <li className="flex items-center justify-center gap-3">
              <p>Suporte via Whatsapp</p> <FaWhatsapp className="text-green-500" />
            </li>
          </ul>

          <Link href="#planos"><button className="py-2 px-4 rounded-xl bg-green-500 mt-3 text-black hover:bg-mainBlue
          hover:text-white transition-all duration-500">ESCOLHA SEU PLANO</button></Link>
        </div></div>
      <div className="custom-shape-divider-bottom-1712172840 bg-mainBlue">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}
