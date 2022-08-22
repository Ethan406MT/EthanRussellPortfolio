import React from "react"
import "./header.css"
import ethan from "../../assets/Ethan.webp"
import range from "../../assets/range.png"


const Header = () => {
    return (
        <section className="Header">
        
        <div className="Headerimg">
        <div className="box">
            <img className="Ethan" src= {ethan}/>
            <div className="contentbox">
             <h1> Ethan Russell</h1>
             <h2> Software Developer</h2>            
        </div>
        </div>
        
        </div>
        
        </section>
    )

} 

export default Header;
