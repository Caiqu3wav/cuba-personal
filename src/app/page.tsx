import Image from "next/image";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import AboutPersonal from "./components/aboutpersonal/AboutPersonal";
import About from './components/about/About';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Header/>
     <Hero/>
     <AboutPersonal/>
      <About/>
    </main>
  );
}
