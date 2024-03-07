import PersonalBgCut from "../../../../public/assets/img/personalbgcut.png";
import "./About.css"
import Image from "next/image";


export default function About() {
    return(
        <div className="about-section flex items-center justify-center w-full pt-8">
        <div id="about" className="flex gap-6 majorthree:justify-around">
            <div className="overlay_about1 flex flex-col w-[400px] majorthree:w-[35%]  majorthree:z-40">
                <h1 className="text-green-500 text-2xl border-solid
                 border-b-2 border-blue-400">Consultoria Online Cuba Personal</h1>
                    <p className="text-white midtw:text-[13px] midfour:text-[11px]">Com a crescente busca por soluções fitness e bem-estar
acessíveis e convenientes,Consultoria Online Cuba Personal
destaca-se pela opção preferida por muitos que buscam uma
vida saudavel e ativa. Nossa abordagem inovadora ao treinamento
oferece uma variedade de benefícios, permitindo que as pessoas
alcancem seus objetivos de forma flexível e personalizada.
                    </p>
            </div>
            <Image src={PersonalBgCut} alt="trainer image" className="personal-bg-cut self-center w-[220px] majorthree:absolute"/>
            <div className="overlay_about1 flex flex-col w-[400px] majorthree:w-[35%] majorthree:z-40">
                <h1 className="text-green-500 text-2xl border-solid
                 border-b-2 border-blue-400">Propósito e metas</h1>
                    <p className="text-white midtw:text-[13px] midfour:text-[11px]">Nosso compromisso é criar um programa de treino
totalmente personalizado para atender às suas necessidades
específicas. Se você deseja perder peso, ganhar massa muscular,
melhorar sua resistência ou simplesmente manter-se saudável,
nossos personal trainers online ajustarão os exercícios e
acompanhamentos de acordo com seus objetivos exclusivos.
                    </p>
            </div>
          </div>
          </div>
    )
}