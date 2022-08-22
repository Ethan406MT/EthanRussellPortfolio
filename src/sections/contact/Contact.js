import React from "react"
import "./contact.css"





export default function Contact()  {
    return (
        <section className="Contact">
            <div className="contactsection">
                <h1 className="contacttitle"> Contact Form </h1>

                <div className="contactform">
                    <div className="contactnamebox"><h1 className="contactname">First Name Last Name...</h1></div>
                    
                    <div className="contactemailbox"><h1 className="contactemail"> Instert Email Here... </h1></div>
                    <div className="contactdetailsbox"><p className="contactdetails" > details </p></div>

                </div>
                </div>
        </section>

    )
};


