'use client'
import Image from "next/image"
import "./Header.css";
import Navbar from "../navbar/Navbar";
import CubaLogo2 from "../../../../public/assets/img/cubalogowhite.png"
import { useRouter } from "next/navigation";

export default function Header(){
    const router = useRouter();

    function HandleClick() {
        router.push('/');
    }

    return(
        <div>
        <header className="w-full flex items-center justify-between h-[120px]">
            <Image src={CubaLogo2} alt="personal logo" onClick={HandleClick} className="w-[100px] ml-2.5 cursor-pointer"/>
            <Navbar/>
        </header>
        </div>
    )
}