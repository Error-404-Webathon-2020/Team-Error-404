import React from 'react'
import '../css/home.css'
import sanitizer from '../img/sanitizer.jpg'
import mask from '../img/mask.jpg'
import gloves from "../img/gloves.jpg"
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import ChartPage from "./chatpage"


import { Carousel } from 'react-bootstrap'
function Home() {
    return (
        <> <ChartPage/>
            <Carousel>
                <Carousel.Item>
                    <img src={slide1} className="d-block w-100" id="img1" alt="Notes" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Consult Our Experts </h5>
                        <p className="animate__animated animate__fadeIn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, molestiae maxime! Optio consequuntur sequi praesentium?</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/appointment">Get Appointment</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className="d-block w-100" id="img2" alt="Events" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Diagnose Your Disease </h5>
                        <p className="animate__animated animate__fadeIn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, molestiae maxime! Optio consequuntur sequi praesentium?</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/diagnose">Diagnose Now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={slide3} className="d-block w-100" id="img3" alt="Notice" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Health Care Essentials</h5>
                        <p className="animate__animated animate__fadeIn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, molestiae maxime! Optio consequuntur sequi praesentium?</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/ecommerce">Buy Now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section id="products">
                <h1 className="section-heading">Health Care Essentials</h1>
                <div className="card-deck">
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={sanitizer} className="card-img-top" alt="sanitizer" />
                            <div className="card-body">
                                <h5 className="card-title">Hand Sanitizers</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veritatis dicta molestias minima quae placeat, vitae rem illo doloribus accusantium.</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={mask} className="card-img-top" alt="Face mask" />
                            <div className="card-body">
                                <h5 className="card-title">Face masks</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos nam ut. Nam, deserunt minus.</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={gloves} className="card-img-top" alt="gloves" />
                            <div className="card-body">
                                <h5 className="card-title">Hand Gloves</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quis laborum cupiditate doloribus aliquam quisquam fugit architecto quia nobis quam?</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
