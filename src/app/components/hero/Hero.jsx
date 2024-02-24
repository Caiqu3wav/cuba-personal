import "./Hero.css"
import BottomShadow from "../bottomshadow/BottomShadow";
import Image from "next/image";
import cubaPic1 from "../../../../public/assets/img/cubapicai.jpg"
import "./Herofonts.css"
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
    return(
        <div>
        <div className="hero-cont flex flex-col w-full h-[600px]">
        <BottomShadow/>
            <div className="hero-container-chd flex flex-col text-center w-[500px] mr-4">
                <div className=" flex w-full">
                <div className="hero-content1 flex flex-col ml-[100px] mt-[280px] text-center items-center justify-center"><h1>CONSULTORIA ONLINE</h1>
                <h2>&</h2>
                <h3>Acompanhamento personalizado</h3>
                <div className="flex gap-2">
                    <Link className="text-3xl text-green-600" href="https://wa.me/5512981359114"><PiWhatsappLogoDuotone/></Link>
                    <Link className="text-3xl text-purple-600" href="https://instagram.com/cuba_personal?utm_source=qr&igshid=MzRlODBiNWFlZA=="><PiInstagramLogoFill/></Link>
                    <Link className="text-3xl text-white" href="mailto:rsantosgleidson@gmail.com"><MdMarkEmailUnread/></Link>
                </div>
                <button className="w-[300px] mt-3 py-5 px-5 text-black rounded-2xl">SAIBA MAIS</button>
                </div>
                <div className="hero-content2 ml-[400px] mt-6 flex flex-col items-center"><Image className="w-[190px] rounded-full self-center" src={cubaPic1} alt="cuba personal"/>
                <h1>CONSULTORIA CUBA PERSONAL</h1>
                <h2 className=" font-semibold">Tranformando seus objetivos em realidade</h2>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}