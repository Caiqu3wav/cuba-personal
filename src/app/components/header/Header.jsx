'use client'
import Image from "next/image"
import "./Header.css";
import Navbar from "../navbar/Navbar";
import CubaLogo from "../../../../public/assets/cubalogo.png"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { MdMarkEmailUnread } from 'react-icons/md'
import IgLogo from '../../../../public/assets/ig.png'

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
                path: '/blogs',
            },
        ]

    function HandleClick() {
        router.push('/');
    }

    return(
        <div>
        <header className="w-full fixed top-0 z-50 flex items-center justify-between px-2 sm:px-0 sm:justify-evenly h-[85px] bg-gradient-to-b from-mainColor
        to-transparent">
            <Image src={CubaLogo} alt="personal logo" onClick={HandleClick} className="w-[56px] cursor-pointer"/>
            <Navbar MenuItems={menuItems} hamburguerMenuColor="white"/>
            <div className="flex items-center text-center gap-2">
                    <Link className="text-2xl sm:text-3xl text-green-600" target='_blank' href="https://wa.me/5512981359114"><PiWhatsappLogoDuotone/></Link>
                    <Link className="text-2xl sm:text-3xl" target='_blank'
                     href="https://instagram.com/cuba_personal?utm_source=qr&igshid=MzRlODBiNWFlZA==">
                     <Image className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" src={IgLogo} alt="" />
                     </Link>
                    <Link className="text-2xl sm:text-3xl text-white" target='_blank'
                     href="mailto:rsantosgleidson@gmail.com"><MdMarkEmailUnread/></Link>
                </div>
        </header>
        </div>
    )
}