import React from "react";
import "./sociallinks.css"
import git from "../../assets/GitHub-Emblem.png"
import linkdn from "../../assets/linkedin-photo.png"




const SocialLinks = () => {
    
    return (
        <section className="navbar">
            <h1> Social Media </h1>
            <div className="navbartext"> 
                
                <a href={"https://www.linkedin.com/in/ethan-russell-564290240"}><uli><img src={linkdn} className="linkdn" /> </uli></a>
                <a href={"https://github.com/Ethan406MT"}><uli> <img src={git} className="git" /> </uli></a>
                
            </div>
        </section>

    )


}
export default SocialLinks;
