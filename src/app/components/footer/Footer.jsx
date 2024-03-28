import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import Image from "next/image";
import CubaLogo from '../../../../public/assets/img/cubalogowhite.png'

export default function Footer(){
    
    
    return(
        <footer className="flex w-full h-[200px] justify-between px-1 border-t-2 border-solid bg-gradient-to-r from-cyan-500 to-blue-700">
            <div><p>Contato</p>
            <p>Telefone: (12)98135-9114</p>
            <p>Email: rsantosgleidson@gmail.com</p></div>

            <div className="flex mr-[6.5rem] flex-col gap-1 items-center justify-center">
                <Image src={CubaLogo} className="w-[80px]" alt="" />
                <div className="flex gap-2 text-[30px]">
                    <PiWhatsappLogoDuotone color="#00cc00"/>
                    <PiInstagramLogoDuotone color="#ff6666"/>
                    <AiTwotoneMail/>
                </div>
            </div>
            <div className="flex flex-col gap-2"><h1>Redes Sociais</h1>
                <a href="">Facebook</a>
                <a href="">Instagram</a></div>
        </footer>
    )
}