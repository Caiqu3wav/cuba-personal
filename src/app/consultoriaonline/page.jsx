'use client';
import Header from '../components/header/Header';
import './style.css'
import Image from 'next/image';
import Footer from '../components/footer/Footer';
import GymLogo from '../../../public/assets/img/gymlogo.png';
import Positive from '../../../public/assets/img/verifica.png';

export default function Consultoria() {
  return (
    <div className='personal-dad w-full overflow-x-hidden'>
    <Header/>       
    <div className='flex flex-col pb-4'>
    <div className='pt-[37px] ml-4 flex-col'> <div className='w-[400px]'><h1 className='text-[34px] font-semibold text-green-600 border-solid
     border-b-2 border-slate-600 rounded-l-lg rounded-r-[-8px]'>PLANOS E INFORMAÇÕES</h1>
    <p className='text-white text-[25px]'>Analise os tipos de planos e preços</p>
    </div>
    <Image src={GymLogo} className="gymlogo w-[50px] relative inset-0 mx-auto" alt="gym logo"/>
</div>
<div className='self-center w-[875px] majorthree:w-[80%] majorfour:w-[93%] midtw:w-[60%] midtwo4:w-[73%]'>
    <div className=' grid grid-flow-col  midtw:grid-rows-3 midtw:grid-flow-row w-full'>
        <div className=' rounded-tl-lg midtw:rounded-t-lg flex flex-col items-center justify-center bg-white majorthree:text-[13px]'>
            <h1 className='text-green-600 text-lg
         font-semibold'>Consultoria 2 Meses</h1>
        <p>Valor: <span className='text-blue-600 font-semibold'>R$100</span></p>
        <p>Renovação: <span className='text-blue-600 font-semibold'>Manual</span></p></div>
        <div className='majorthree:text-[13px] flex flex-col items-center justify-center bg-white'><h1 className='text-lg text-green-600
         font-semibold'>Consultoria 3 Meses</h1>
        <p>Valor: <span className='text-blue-600 font-semibold'>R$150</span></p>
        <p>Renovação: <span className='text-blue-600 font-semibold'>Manual</span></p></div>
    </div>
    <div className='midtw:text-[11px] midfour:text-[9px] bg-gradient-to-br  w-full from-slate-900 to-green-950 flex-col flex py-2'>
        <div className='flex w-full justify-evenly '>
        <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
        <p className='text-white'>Suporte via WhatsApp.</p></div>
        <div className='flex gap-1 relative top-8'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
        <p className='text-white'>Protocolo de treinamento.</p></div>
        </div>

        <div className='flex w-full justify-evenly mt-8'>
        <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
        <p className='text-white'>Videos de orientação.</p></div>
        <div className='flex gap-1 relative top-8'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
        <p className='text-white'>App com check-in e ficha de treino.</p></div>
        </div>
        <div className='flex self-center mt-12'>
        <div className='flex gap-1'><Image src={Positive} className='w-[20px] h-[26px]' alt='positive'/> 
        <p className='text-white'>Periodização de treino.</p></div>
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
