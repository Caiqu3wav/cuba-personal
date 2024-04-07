'use client';
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import "./Navbar.css"

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const sideList = [
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
    ]

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const handleEscKeyPress = (e) => {
            if (e.keycode === 27 && isActive) {
                setIsActive(false);
            }
        };

        if (isActive) {
            document.body.style.setProperty("overflow", "hidden");
        }else {
            document.body.style.setProperty("overflow", "auto");
        }

        document.addEventListener("keydown", handleEscKeyPress);
        
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isActive]);

    return (
    <nav className="mr-[30%] majortwo1:mr-[22%] majorthree:mr-[16%] majorthree1:mr-[7%]">
        <ul className="flex text-xl gap-8 text-white font-semibold">
            <Link href="/"><li>HOME</li></Link>
            <Link href="#personal"><li>PERSONAL</li></Link>
            <Link href="#about"><li>SOBRE</li></Link>
            <Link href="#planos"><li>CONSULTORIA ONLINE</li></Link>
            </ul>
            <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer hidden ml-[70%] mb-8 midtwo3:ml-[60%] midfour:ml-[50%] low:ml-[37%]">
                <GiHamburgerMenu size={60} style={{ color: 'black' }} />
</button>

{isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 text-white bg-blue-700
         bg-opacity-50 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[900] ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-blue-600 hover:text-black">
          <span className="border-b-4 border-green-500">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
    </nav>)
}