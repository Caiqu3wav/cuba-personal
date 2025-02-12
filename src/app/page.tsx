import Image from "next/image";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import AboutPersonal from "./components/aboutpersonal/AboutPersonal";
import About from './components/about/About';
import ScrollButton from './components/ScrollButton';
import Footer from './components/footer/Footer';
import Planos from './components/planos/Planos';
import Tecnofit from './components/tecnofit/Tecnofit';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Header/>
     <Hero/>
     <div className="w-full h-fit bg-gradient-to-b from-black via-red-600 to-blue-900">
     <AboutPersonal/>
      <About/>
      <Tecnofit/>
      <Planos/>
      </div>
      <ScrollButton/>
      <Footer/>
    </main>
  );
}
