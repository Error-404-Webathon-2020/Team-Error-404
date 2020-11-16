import React from 'react'
import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <section id="contact" className="container">
            <h1>----- Contact us -----</h1>
            <div id="main">
                <section id="map" className="pt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.953084262416!2d85.73360411439427!3d20.219270520294973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1605424519938!5m2!1sen!2sin" width="400" height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                </section>
                <section id="details">
                    <h2>Talk to us </h2>
                    <p>If you are interested in any of our services or have any queries feel free to contact us. We'd love to talk to you about the best ways to solve your problems.</p>
                    <h2>Reach us at</h2>
                    <p>phone: +91 0987654321</p>
                    <p>phone: +91 0987654321</p>
                    <p><a href="mailto:hello@mydoc.com" id="mail">hello@mydoc.com</a></p>
                    <h2>Connect with us</h2>
                    <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="social-icons" /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="social-icons" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="social-icons" /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="social-icons" /></a>
                    </div >
                </section >
            </div >
        </section >
    )
}

export default Contact
