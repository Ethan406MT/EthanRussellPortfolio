import React from "react";
import "./navbar.css"




const Navbar = () => {
    return (
        <section className="navbar">
            <h1> Ethan Russell </h1>
            <div className="navbartext"> 
                
                <a href={"/About"}><uli> About </uli></a>
                <a href={"/Projects"}><uli> Projects </uli></a>
                <a href={"/Contact"}><uli> Contact </uli></a>
                
            </div>
        </section>

    )


}
export default Navbar;