import React,{useState} from 'react'
import '../css/home.css'
import sanitizer from '../img/sanitizer.jpg'
import mask from '../img/mask.jpg'
import gloves from "../img/gloves.jpg"
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import ChartPage from "./chatpage"
import Dashboard from './Dashboard';


import { Carousel } from 'react-bootstrap'
function Home() {
    return (
        <> 
        <ChartPage/>
            <Carousel>
                <Carousel.Item>
                    <img src={slide1} className="d-block w-100" id="img1" alt="Notes" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Consult Our Experts </h5>
                        <p className="animate__animated animate__fadeIn">Do you have a cough? Do you have a fever? Do you suspect it to be covid-19? 
Contact our experts for instant and reliable medical advice. And remember prevention is better than cure.</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/appointment">Get Appointment</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className="d-block w-100" id="img2" alt="Events" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Diagnose Your Disease </h5>
                        <p className="animate__animated animate__fadeIn">Hi, chat with our chatbot doctor to assess your risk level against covid-19. Note: The bod generate output based on on your symptoms and the output should not be treated as a Competent Medical opinion.</p>
                        <p className="animate__animated animate__fadeInUp"><a href='#'>Diagnose Now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={slide3} className="d-block w-100" id="img3" alt="Notice" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Health Care Essentials</h5>
                        <p className="animate__animated animate__fadeIn">Prevention is better than cure. Covid-19 may seem scary, but prevention from it could not be any easier. Just a little bit of lifestyle changes. Gloves sanitizers disinfectants even PPE kits for corona warriors. Buy them all from a single portal from your favourite e commerce site.</p>
                        <p className="animate__animated animate__fadeInUp"><a href="#products">Buy Now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Dashboard />
            <section id="products">
                <h1 className="section-heading">Health Care Essentials</h1>
                <div className="card-deck">
                    <div className="card">
                        <a href="/products/sanitizers" className="card-link">
                            <img src={sanitizer} className="card-img-top" alt="sanitizer" />
                            <div className="card-body">
                                <h5 className="card-title">Hand Sanitizers</h5>
                                <p className="card-text">It has been proven that covid-19 spread through touch. The only body part which touches our other body parts are hands. Sanitize your hands and you would reduce your covid-19 tractor chances to minimum. Click here to get some hand sanitizers.</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/products/masks" className="card-link">
                            <img src={mask} className="card-img-top" alt="Face mask" />
                            <div className="card-body">
                                <h5 className="card-title">Face masks</h5>
                                <p className="card-text">Covid-19 is spread by a virus which is so minute that they can be transmitted through air. Moreover covid-19 attacks your respiratory organs. So to prevent covid-19 virus to get into your system use masks. Always remember keep a safe distance between yourself and others and masks are a must. Click here to get a hold of protective face masks.</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/products/gloves" className="card-link">
                            <img src={gloves} className="card-img-top" alt="gloves" />
                            <div className="card-body">
                                <h5 className="card-title">Hand Gloves</h5>
                                <p className="card-text">Acquire medical grade rubber gloves for added protection against covid-19. It must always be kept in mind that no amount of preventive measures are too much against this nasty virus. Stay as safe as possible. Click here to buy medical grade gloves.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
