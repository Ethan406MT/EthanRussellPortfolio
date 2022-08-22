import React from "react";
import "./skills.css"

const Skills = () => {
    return (
        <section className="skillssection" >
        <h1 className="skills-header"> Frameworks and Languages </h1>
        
        <div className="skills" >
        <div className="frontendbox"> 
            <h1 className="titleheader"> Front End </h1>
            <div className="skillbox"><uli className="listed"> React.JS </uli></div>
            <div className="skillbox"><uli className="listed"> React Native</uli></div>
            <div className="skillbox">   <uli className="listed"> Javascript </uli></div>
            <div className="skillbox">  <uli className="listed">HTML/CSS</uli></div>
        </div>
        <div className="backendbox">
            <h2 className="titleheader"> Back End </h2> 
            <div className="skillbox"><uli className="listed"> Django Rest Framework </uli></div>
            <div className="skillbox"><uli className="listed"> Python </uli></div>
        </div>
        </div>
        </section>
    )
        
    

}

export default Skills;