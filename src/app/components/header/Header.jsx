'use client'
import Image from "next/image"
import "./Header.css";
import Navbar from "../navbar/Navbar";
import CubaLogo2 from "../../../../public/assets/img/cubalogowhite.png"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PiWhatsappLogoDuotone, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailUnread } from 'react-icons/md'

export default function Header(){
    const router = useRouter();

    const menuItems = [
            {
                title: 'HOME',
                path: '/',
            },
            {
                title: 'PERSONAL',
                path: '#personal',
            },
            {
                title: 'SOBRE',
                path: '#about',
            },
            {
                title: 'CONSULTORIA',
                path: '#planos',
            },
            {
                title: 'BLOGS',
                path: '#planos',
            },
        ]

    function HandleClick() {
        router.push('/');
    }

    return(
        <div>
        <header className="w-full flex items-center justify-center gap-20 h-[85px] bg-gradient-to-b from-red-600 via-blue-950 to-black">
            <Image src={CubaLogo2} alt="personal logo" onClick={HandleClick} className="w-[56px] cursor-pointer"/>
            <Navbar MenuItems={menuItems}/>
            <div className="flex gap-2">
                    <Link className="text-3xl text-green-600" target='_blank' href="https://wa.me/5512981359114"><PiWhatsappLogoDuotone/></Link>
                    <Link className="text-3xl text-purple-600" target='_blank'
                     href="https://instagram.com/cuba_personal?utm_source=qr&igshid=MzRlODBiNWFlZA=="><PiInstagramLogoFill/></Link>
                    <Link className="text-3xl text-white" target='_blank'
                     href="mailto:rsantosgleidson@gmail.com"><MdMarkEmailUnread/></Link>
                </div>
        </header>
        </div>
    )
}