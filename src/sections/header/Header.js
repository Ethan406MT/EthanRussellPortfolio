import React from "react"
import "./header.css"
import ethan from "../../assets/ethan.png"
import range from "../../assets/range.png"


const Header = () => {
    return (
        <section className="Header">
            <div className="box">
        <div className="Headerimg">
            <img className="Ethan" src= {ethan}/>
            <div className="contentbox">
             <h1> Ethan Russell</h1>
             <h2> Graphic Designer | Web Developer</h2>            
        </div>
        </div>
        
        </div>
        <img className="range" src={range} />
        </section>
    )

} 

export default Header;
