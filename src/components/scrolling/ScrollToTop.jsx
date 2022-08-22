import React, {useState, useEffect} from 'react';
import {FaArrowUp} from "react-icons/fa"
import "./scrolltotop.css" 

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)
    
    useEffect(() => {
        window.addEventListener ("scroll", () => {
            if(window.screenY > 10) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })
      
    }, []);
   
    
    
const scrollTop = (showScrollTopButton) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
    return (
        <div>
        {showScrollTopButton && ( 
        <FaArrowUp className="top-btn" onClick= {scrollTop} />
        )}
        </div>
        );
};


export default ScrollToTop;