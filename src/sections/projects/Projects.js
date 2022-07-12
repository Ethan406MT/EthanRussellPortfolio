import React from "react";
import './projects.css';
import ccs from "../../assets/ccspage.png";
import lpss from "../../assets/LPSSservicespage.png";




//fix the div method and make it an array so you can align the text and the images better

const Projects = () => {
    return(
        
        <section className="Projects">
            <div className="sectiontitle">
            <h1>Projects</h1>
            </div>
            

        <div className="Logos">

        </div>

        <div className="Websites">
            <div className="web">
                <img src={ccs}/>
                <h2> Chewy's Chop Shop </h2>
                <p> project description </p>
                <a href="https://github.com/Ethan406MT/chewyschopshop"> GitHub | https://github.com/Ethan406MT/chewyschopshop </a>
            </div>
            <div className="web">
                <img src={lpss}/>
                <h2> Lone Peak Software Solutions </h2>
                <p> project description </p>
                <a href="https://github.com/Ethan406MT/LonePeakSSWebsite"> GitHub | https://github.com/Ethan406MT/LonePeakSSWebsite </a>
            </div>

        </div>
        </section>
    );
};

export default Projects;

/*
<img src={epgp}/>
<img src={r4th}/>
*/