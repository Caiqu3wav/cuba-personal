import "./Hero.css"
import BottomShadow from "../bottomshadow/BottomShadow";
import Image from "next/image";
import cubaPic1 from "../../../../public/assets/img/cubapicai.jpg"
import "./Herofonts.css"
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import AboutPersonal from '../aboutpersonal/AboutPersonal'

export default function Hero() {
    return(
        <div>
        <div className="hero-cont flex flex-col w-full h-[600px] border-b-2 border-gray-400 border-solid">
        <BottomShadow/>
            <div className="hero-container-chd flex flex-col text-center mr-4">
                <div className="flex majorfour:flex-col-reverse majorfour:gap-6 w-full justify-between majorfour:justify-center majorfour:items-center">
                <div className="hero-content1 flex flex-col ml-[100px] majortwo4:mt-[170px] majortwo4:ml-0 majortwo1:ml-[50px] majortwo1-2:ml-0 mt-[280px] text-center 
                 majortwo3.1:w-[300px] majortwo3.1:ml-4 items-center justify-center majorfour:py-3"><h1 className="text-3xl majorthree1:text-xl">CONSULTORIA ONLINE</h1>
                <h2 className="text-2xl majorthree1:text-xl">&</h2>
                <h3 className="text-2xl majorthree1:text-lg ">Acompanhamento personalizado</h3>
                <div className="flex gap-2">
                    <Link className="text-3xl text-green-600" href="https://wa.me/5512981359114"><PiWhatsappLogoDuotone/></Link>
                    <Link className="text-3xl text-purple-600" href="https://instagram.com/cuba_personal?utm_source=qr&igshid=MzRlODBiNWFlZA=="><PiInstagramLogoFill/></Link>
                    <Link className="text-3xl text-white" href="mailto:rsantosgleidson@gmail.com"><MdMarkEmailUnread/></Link>
                </div>
                <button className="w-[300px] majorthree:w-[200px] mt-3 py-5 px-5 text-black rounded-2xl majorthree:mr-20 majorthree2:mr-0">SAIBA MAIS</button>
                </div>
                <div className="hero-content2 mt-6 majortwo4:mt-36 low:ml-2 low:w-[330px] flex flex-col items-center w-[400px] majortwo3:w-[300px] majorthree2:w-[400px]">
                    <Image className="w-[190px] rounded-full self-center majortwo3:w-[160px] majortwo4:w-[110px]" src={cubaPic1} alt="cuba personal"/>
                <h1 className=" majortwo4:text-xl">CONSULTORIA CUBA PERSONAL</h1>
                <h2 className=" font-semibold">Tranformando seus objetivos em realidade</h2>
                <p className="text-white majortwo3:text-sm">Treinamento personalizado e flexível, monitorado com feedback em tempo real para resultados
                 eficazes. Nossa abordagem moderna atende a iniciantes e atletas experientes, proporcionando orientação profissional para
                  garantir o sucesso em sua jornada fitness. Comece conosco e alcance seu potencial máximo.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}