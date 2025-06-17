'use client';
import Image from "next/image"
import Consult from "../../../../public/assets/consultoriaonlinepersonal.jpg"
import Treino from "../../../../public/assets/consultoriaonlinepresencial.jpg"
import BfImg from "../../../../public/assets/blackfitpic.jpg"
import GymLogo from '../../../../public/assets/img/gymlogo.png'
import { AiOutlineGlobal } from "react-icons/ai"
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link"
import "../../../styles/planos.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { planos } from '@/data/index'
import {Star} from 'lucide-react'

export default function Planos() {
  
  return (
    <div id="planos" className="pb-4 h-fit  flex flex-col items-center justify-center w-full">
      <h1 className="text-[40px] font-light text-white">PLANOS</h1>
      <hr className=" border-solid border-blue-600 rounded-lg border-2 border-x-[300px]" />
      <div className="w-full flex mt-4 justify-around gap-6 flex-wrap">
        <div className="planos-cards bg-slate-300 w-[300px] h-fit transition-all duration-400 
                hover:scale-125 cursor-pointer flex flex-col gap-1 items-center justify-center text-black rounded-lg py-4 px-3">
          <Image src={Consult} className="transition-all rounded-md w-[90%] h-[255px] duration-700  hover:opacity-75" alt="" />
          <div className="flex flex-col items-center justify-between text-[22px] gap-2 font-semibold text-center h-fit">
            <h1 className="flex items-center gap-2"><span className="">Consultoria Online</span> <AiOutlineGlobal className="text-blue-600" /> </h1>
            <button className="px-14 rounded-xl bg-red-300/60 text-red-500 text-[15px] font-bold py-1">R$ 199/mês</button>
            <ul className="space-y-3 text-[15px]">
              {planos.consultoria.map((feature, index) => (
                <li key={index} className="flex items-start gap-1">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-red-400 flex-shrink-0"/>
                  <span className="text-gray-700">{feature}</span>
                  </li>
              ))}
            </ul>
            <Link className="w-[70%]" href="/plano/consultoria">
            <button className="flex justify-center gap-2 items-center bg-mainBlue w-[100%] text-[17px] py-2 rounded-lg text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">
              <IoMdInformationCircleOutline/>
              Ver Sobre</button>
            </Link>
            <Link className="w-[70%] flex gap-2" href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+a+consultoria+online!">
            <button className="bg-mainRed w-[100%] text-[17px] py-2 rounded-lg text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">Entrar em contato</button>
            </Link>
          </div>
        </div>
        <div className="planos-cards bg-slate-300 text-black flex flex-col items-center w-[300px] h-fit transition-all duration-400 
                hover:scale-125 cursor-pointer border-2 border-red-600 rounded-lg py-4 px-3">
          <Image src={Treino} className="transition-all rounded-md w-[90%] h-[255px] duration-700 hover:opacity-75" alt="" />
          <div className="flex flex-col items-center gap-2 text-[22px] font-semibold text-black text-center h-fit">
            <h1 className="flex items-center gap-2"><span className="">Personal Trainer</span> 
            <Image src={GymLogo} className="w-[30px]" alt="gym logo" />
            </h1>
                        <button className="px-14 rounded-xl bg-red-300/60 text-[15px] text-red-500 font-bold py-1">R$ 299/mês</button>

            <ul className="space-y-3 text-[15px]">
              {planos.personal.map((feature, index) => (
                <li key={index} className="flex items-center gap-1">
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-red-400 flex-shrink-0"/>
                  <span className="text-gray-700">{feature}</span>
                  </li>
              ))}
            </ul>
            <Link className="w-[70%]" href="/plano/personal">
            <button className="flex justify-center gap-2 items-center bg-mainBlue w-[100%] text-[17px] py-2 rounded-lg text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">
              <IoMdInformationCircleOutline/>
              <span>Ver Sobre</span></button>
            </Link>
            <Link className="w-[70%] flex gap-2" href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+a+consultoria+online!">
            <button className="bg-mainRed w-[100%] text-[17px] py-2 rounded-lg text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">Entrar em contato</button>
            </Link>
          </div>
        </div>
        <div className="relative planos-cards w-[300px] bg-gradient-to-r h-fit from-black to-slate-800 text-black transition-all 
        duration-400 hover:scale-125 cursor-pointer flex flex-col items-center  rounded-lg py-4 px-3">
          <Image src={BfImg} className="transition-all rounded-md w-[90%] h-[255px] duration-700 hover:opacity-75 " alt="" />
          <div className="flex flex-col items-center gap-2 text-[22px] font-semibold text-white text-center h-fit">
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="bg-yellow-400 text-black px-4 py-1 rounded-full flex items-center text-sm font-bold">
                  <Star className="h-4 w-4 mr-1" fill="currentColor" /> PREMIUM
                </div>
              </div>
            <h1 className="">Plano BlackFit ⭐</h1>
            <p className="text-sm text-gray-600">O melhor dos dois mundos</p>
                        <button className="px-14 rounded-xl text-[15px] bg-gray-400/60 text-white font-bold py-1">R$ 449/mês</button>
            <ul className="space-y-3 text-lg">
              {planos.blackfit.map((feature, index) => (
                <li key={index} className="flex items-center text-center">
                  <IoMdCheckmarkCircleOutline className="text-yellow-400 flex-shrink-0"/>
                  <span className="text-gray-400 ml-1 text-[15px]">{feature}</span>
                  </li>
              ))}
            </ul>
            <Link className="w-[70%]" href="plano/blackfit">
            <button className="flex justify-center gap-2 items-center bg-black w-[100%] text-[17px] py-2 rounded-lg text-white transition-all duration-700
            hover:bg-white hover:text-black text-nowrap">
              <IoMdInformationCircleOutline/>
              <span>Ver Sobre</span></button>
            </Link>
            <Link href="https://wa.me/5512981359114?text=Olá%2C+gostaria+de+saber+mais+sobre+o+plano+completo+BlackFit+personal+e+nutricionista!"
              className="w-[70%] text-[17px] py-2 rounded-lg bg-yellow-400 text-black transition-all duration-700
                         hover:bg-white hover:text-black">Consultar Plano</Link>
                         
                         </div>
        </div>
      </div>
    </div>
  )
}