'use client';
import "./Hero.css"
import BottomShadow from "../bottomshadow/BottomShadow";
import Image from "next/image";
import cubaPic1 from "../../../../public/assets/img/cubapicai.jpg"
import "./Herofonts.css"
import Link from "next/link"
import { useLayoutEffect } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GymLogo from '../../../../public/assets/img/gymlogo.png'

export default function Hero() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".hero-container-chd", {
            opacity: 1,
            x: 0, duration: 3
        })
    })
    return(
        <div>
        <div className="bg-gif bg-opacity-50 flex flex-col items-center w-full h-[600px] border-b-2 border-gray-400 border-solid">
        <BottomShadow/>
            <div className="hero-container-chd bg-black bg-opacity-60 rounded-xl px-3 py-1 ml-6 text-white opacity-0 flex items-center justify-center flex-col w-[500px] mr-4">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center text-center">
                    <Image className="w-[190px] rounded-full self-center
                     majortwo1:w-[80px] majortwo3:w-[50px]" src={cubaPic1} alt="cuba personal"/>
                    <Image src={GymLogo} className="gymlogo self w-[40px]" alt="gym logo"/>
                    <h1 className="hero-content-h1 majortwo4:text-xl">CONSULTORIA CUBA PERSONAL</h1>
                    <h2 className="text-2xl text-red-600 majorthree1:text-xl self-center">&</h2>
                <h3 className="hero-content-h3 underline text-blue-700 text-2xl majorthree1:text-lg ">Acompanhamento personalizado</h3>
                </div>
                <p className="text-white text-sm majortwo3:text-[12px]">Treinamento personalizado e flexível, monitorado com feedback em tempo real para resultados
                 eficazes. Nossa abordagem moderna atende a iniciantes e atletas experientes, proporcionando orientação profissional para
                  garantir o sucesso em sua jornada fitness. Comece conosco e alcance seu potencial máximo.</p>
                <Link href="#planos" className="self-center"><button className="w-[300px]  majorthree:w-[200px] mt-3 py-5 px-5 text-white bg-red-600 rounded-2xl majorthree:mr-20 majorthree2:mr-0
                hover:bg-blue-600 hover:text-black transition-all duration-500">FAÇA PARTE</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
}