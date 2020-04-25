import React from "react";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import ContactForm from "./ContactForm";
import Footer from "../../footer/Footer";

function contact (){
    return(
        <div id="contact">
            <div className="headline">
                <h1>Contact</h1>
                
            </div>
            <div id="contactInfo">
               
                <BrowserView className="text-center">
                    <p><strong>Phone: </strong> <a  href="callto: 004747605059">+47 476 050 59</a></p>
                    <p><strong>Email: </strong><a href="mailTo: jokke90@gmail.com">noob@work.com</a></p>
                </BrowserView>
                <MobileView>
                    <p><strong>Phone: </strong><a href="tel: 004747605059">+47 476 050 59</a></p>
                    <p><strong>Email: </strong><a href="mailTo: jokke90@gmail.com">noob@work.com</a></p>
                </MobileView>
            </div>

            <ContactForm />
            <p></p>
            <Footer/>
        </div>
    )
}

export default contact;