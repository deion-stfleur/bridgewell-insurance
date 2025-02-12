import React, {useEffect, useState} from 'react'
import { FaArrowUp } from "react-icons/fa";

function Scroller() {

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 200) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling
        });
      };
  return (
   <>
     <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? "show" : "hide"}`}
    >
      <FaArrowUp />
    </button>
   </>
  )
}

export default Scroller
