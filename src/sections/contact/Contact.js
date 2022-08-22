import React from "react"
import "./contact.css"






export default function Contact()  {
    return (
        <section className="Contact">
            <div className="contactsection">
                
                
                    <div className="contactform">
                    <h1 className="contacttitle"> Contact Form </h1>
                    <form action="" method="POST" class="contact-form">
                        
                    <div className="contactemailbox"><h1 className="contactname"> Full Name </h1></div>
                        <input type="text" name="full-name"></input>
                    <div className="contactemailbox"><h1 className="contactemail"> Email </h1></div>
                        <input type="text" name="email"></input>
                    <div className="contactemailbox"><h1 className="contactemail"> Subject </h1></div>
                        <input type="text" name="subject"></input>
                    <div className="contactemailbox" name="message" cols="30" rows="10"><h1 className="contactemail" > Message </h1></div>
                        <textarea></textarea>
                    <div className="contactemailbox">
                        <input type="Submit" className="btn submit-btn" value="Send Message"></input>
                    </div>
                    </form>
                    </div>

                </div>
                
        </section>

    )
};


