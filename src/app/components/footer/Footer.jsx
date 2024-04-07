import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";
import Image from "next/image";
import CubaLogo from '../../../../public/assets/img/cubalogowhite.png'
import Link from "next/link";

export default function Footer(){
    
    
    return(
        <footer className="footer flex w-full midfour1:flex-col h-[200px] midfour1:h-[220px] justify-between px-1 border-t-2 border-solid bg-gradient-to-r from-cyan-500 to-blue-700">
            <div><p>Contato</p>
            <p>Telefone: (12)98135-9114</p>
            <p>Email: rsantosgleidson@gmail.com</p></div>

            <div className="flex mr-[6.5rem] midtwo:mr-[2.5rem] midfour:mr-[5rem] midfour1:mr-0 midfour1:self-center midtwo4:mr-0 flex-col gap-1 items-center justify-center">
                <Image src={CubaLogo} className="w-[80px]" alt="logo cuba" />
                <div className="flex gap-2 text-[30px]">
                    <Link href="https://wa.me/5512981359114" target="_blank"><PiWhatsappLogoDuotone color="#00cc00"/></Link>
                    <Link href="https://instagram.com/cuba_personal?utm_source=qr&igshid=MzRlODBiNWFlZA==" target="_blank"><PiInstagramLogoDuotone color="#ff6666"/></Link>
                    <Link href="mailto:rsantosgleidson@gmail.com" target="_blank"><AiTwotoneMail/></Link>
                </div>
                <p className="font-semibold majorthree:text-[11px]">Copyright © 2024 - Todos os direitos reservados.</p>
            </div>
            <div className="flex flex-col gap-2 midfour:hidden"><h1>Redes Sociais</h1>
                <a href="">Facebook</a>
                <a href="">Instagram</a></div>
        </footer>
    )
}