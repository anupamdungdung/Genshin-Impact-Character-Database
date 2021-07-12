import React, { useEffect,useState } from 'react';
import "./Nav.scss"
import genshinlogo from "./assets/genshinlogo.png"

const Nav=(props)=>{
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          handleShow(true)
        } else {
          handleShow(false)
        }
      }

      useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
      },[])

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <div className="nav_logo">
                    <img className="genshinlogo"src={genshinlogo} alt="genshinlogo"></img>
                    <h1 class="text-center titleName ">Genshin Impact Characters</h1>
                </div>
            </div>

        </div>
    )

}

export default Nav;
