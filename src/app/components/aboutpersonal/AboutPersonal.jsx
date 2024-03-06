import PersonalBgCut from "../../../../public/assets/img/personalbgcut.png";
import "./AboutP.css"
import Image from "next/image";
import CubaPic from "../../../../public/assets/img/cubapic.jpg"
import CubaLogo from "../../../../public/assets/img/cubalogogreen.png"

export default function AboutPersonal() {
    return (
      <div className="flex w-full min-h-[500px] items-center justify-between">
        <div id="personal" className="personal-right flex flex-col min-h-[500px] pb-4 items-center justify-between">
        <Image src={CubaLogo} className="w-[450px]" alt="cuba logo" />
          <div className="overlay-personal-right flex flex-col items-center justify-center w-[70%] midfour:w-[86%] rounded-xl py-3">
            <Image src={CubaPic} className="w-[160px] h-[190px] rounded-[60%] self-center" alt="personal cuba picture"/>
            <h1 className="text-blue-500">Gleidson Roberto dos Santos</h1>
            <h2 className="text-green-500">CREF: 126111-G/SP</h2>
            <p className="text-white px-4">Meu nome é Gleidson Roberto dos Santos tenho grande experiência em treinamento esportivo sou natural do Brasil
              Estado de São Paulo ganhei uma Bolsa de Estudos em 2005 concluí os estudos em 2011 em Cuba onde me dediquei à formação
              da educação física e esporte e desde 2012 me dedico aos treinamentos de musculação e outros esportes como levantamento 
              de peso, atletismo, boxe e ao bodybuilder fitness. Espero passar toda minha experiência e conhecimentos para contribuir 
              com seus objetivos.</p>
          </div>
        </div>
      </div>
    );
  }