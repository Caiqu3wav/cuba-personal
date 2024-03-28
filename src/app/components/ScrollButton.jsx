'use client';
import {FaArrowCircleUp} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollButton = () =>{ 
  
    const [visible, setVisible] = useState(false) 
    
    useEffect(() => {
        const toggleVisibility = () => {
        window.scrollY > 500 ? setVisible(true) : setVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
        window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

    const scrollToTop = () => {
        visible && 
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

        
    return ( 
        <button className={` fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-500 ${ 
            visible ? "opacity-100" : "opacity-0"}`} onClick={scrollToTop}>
       <FaArrowCircleUp onClick={scrollToTop} size={40} color='#3366ff' /> 
      </button> 
    ); 
  } 
    
  export default ScrollButton; 