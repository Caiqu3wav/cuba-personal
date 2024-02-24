'use client';
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import "./Navbar.css"

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isCloseIcon, setIsCloseIcon] = useState(false);

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
            path: '#sobre',
        },
        {
            title: 'CONSULTORIA',
            path: '#consultoria',
        },
    ]

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsCloseIcon(!isCloseIcon);
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
    <nav className="mr-[30%]">
        <ul className="flex text-xl gap-8 text-white font-semibold">
            <li>HOME</li>
            <li>PERSONAL</li>
            <li>SOBRE</li>
            <li>CONSULTORIA ONLINE</li>
            <button aria-label="Open Menu" onClick={toggleMenu} className="hidden self-center">
                <GiHamburgerMenu size={60} className="low:size-10" style={{ color: 'purple' }} />
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
        className={`transform top-0 left-0 w-64 lowtwo2:w-44 lowthreetwo:w-36 bg-blue-light text-purple-500 font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-blue-dark hover:text-purple-600">
          <span className="border-b-4">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
        </ul>
    </nav>)
}