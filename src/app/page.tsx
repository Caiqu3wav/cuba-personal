import Image from "next/image";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Header/>
     <Hero/>
    </main>
  );
}