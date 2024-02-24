import Image from "next/image"
import CubaLogo from "../../../../public/assets/img/cubalogolightblue.png"
import "./Header.css";
import Navbar from "../navbar/Navbar";
import CubaLogo2 from "../../../../public/assets/img/cubalogowhite.png"
import BottomShadow from "../bottomshadow/BottomShadow"

export default function Header(){
    return(
        <div>
        <header className="w-full flex items-center justify-between h-[120px]">
            <Image src={CubaLogo2} alt="personal logo" className="w-[100px] ml-3"/>
            <Navbar/>
        </header>
        </div>
    )
}