'use client';
import Header from '../components/header/Header';
import './style.css'
import Image from 'next/image';
import Footer from '../components/footer/Footer';
import GymLogo from '../../../public/assets/img/gymlogo.png';
import Positive from '../../../public/assets/img/verifica.png';
import PaymentGif from '../../../public/assets/img/paymentsuss2.gif'
import { FaPix } from "react-icons/fa6";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import Link from 'next/link';

export default function Consultoria() {
  return (
    <div className='personal-dad w-full overflow-x-hidden'>
    <Header/>       
    <div className='flex flex-col pb-4 gap-5'>
    <div className='pt-[37px] ml-4 flex-col'> <div className='w-[400px]'><h1 className='text-[34px] font-semibold text-green-600 border-solid
     border-b-2 border-slate-600 rounded-l-lg rounded-r-[-8px]'>PLANOS E INFORMAÇÕES (CONSULTORIA)</h1>
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
    <Link href="#planospay"><button className=' bg-gradient-to-bl from-green-950 to-white w-full
     rounded-b-lg py-2 font-bold text-green-800'>FAÇA SEU PLANO</button></Link>
</div>

<div id='planospay' className='self-center rounded-lg flex flex-col bg-black bg-opacity-55 w-[875px] majorthree:w-[80%] majorfour:w-[93%] 
midtw:w-[60%]
 midtwo4:w-[73%] py-2'><h1 className='self-center border-b-2 border-solid
  border-gray-300 rounded-md text-2xl text-green-600'>COMO FUNCIONA?</h1>
            <p className='text-white'>Para melhorar seu físico e sua saúde é muito simples! Basta fazer seu pagamento, salvar o comprovante e seguir as
                instruções para entrar em contato com o <span>
                    <a className='text-blue-400 underline' href="https://wa.me/5512981359114">Personal Trainer.</a>
                </span> Ele irá te guiar para o começo do seu treinamento.
            </p>
            <Image src={PaymentGif} alt='gif de pagamento' className='w-[200px] rounded-full p-[-60px] self-center'/>
            <div className='flex self-center items-center justify-center gap-2'><p className='text-blue-400'>Opções:</p>
            
            <div className="min-w-[200px] relative right-6 rounded-lg flex flex-col items-center justify-center">
                <p className='text-white'>Cartão</p>
            <BsFillCreditCard2FrontFill className='text-orange-600 text-5xl' />
            <p className='text-white'>PIX</p>
            <FaPix className='text-green-400 text-5xl' /></div>
            </div>
            <div className='flex flex-col gap-3'>
            <div className='flex self-center mt-4'>
                <div className='bg-white rounded-l-lg border-r-2 border-solid w-[110px] text-wrap'>
                    <p className='text-green-500 text-center'>Consultoria 2 Meses</p></div>
                    <Link href="https://buy.stripe.com/14k4jmdv846q5mUaEK" className='bg-white rounded-r-lg pl-3 pr-3 flex items-center' target='_blank'>
                        <button className='text-center'>Link de Pagamento</button>
                </Link>
                </div>
                <div className='flex self-center mt-4'>
                <div className='bg-white rounded-l-lg border-r-2 border-solid w-[110px] text-wrap'>
                    <p className='text-green-500 text-center'>Consultoria 3 Meses</p></div>
                    <Link href="https://buy.stripe.com/5kA8zC1Mq9qK2aI7sz" className='bg-white rounded-r-lg pl-3 pr-3 flex items-center' target='_blank'>
                <button className='text-center'>Link de Pagamento</button>
                </Link>
                </div>
                </div>
 </div>
</div>
    <Footer/>
</div>
  )
}