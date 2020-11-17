import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import {Masks,Gloves, Sanitizers} from './components/Products'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import './css/home.css'
import {ToastProvider} from 'react-toast-notifications'

function App() {
  return (
    <>
      <Navbar className="fixed-top" expand='lg'>
        <div className="container">
          <a className="navbar-brand" href="index.html">MyDoc </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <Navbar.Toggle aria-controls='navbarSupportedContent' />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              <li className="nav-item">
                <a className="nav-link" href='/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/appointment">Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/diagnose">Diagnose</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">E-commerce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact</a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <ToastProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/appointment' component={Appointment} />
            <Route exact path='/contact-us' component={Contact} />
            <Route exact path='/products/masks' component={Masks} /> 
            <Route exact path='/products/gloves' component={Gloves} />            
            <Route exact path='/products/sanitizers' component={Sanitizers} />                       
          </Switch>
        </Router>
      </ToastProvider>
      <footer>
        <section id="main">
          <div id="footer-coloumn1" className="col-lg-4 col-sm-12 coloumn">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil delectus, doloribus fugiat adipisci maxime placeat minus illo incidunt molestiae!</p>
          </div>
          <div id="footer-coloumn2" className="col-lg-4 col-sm-12 coloumn">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="appointment.html">Appointment</a></li>
              <li><a href="#">Diagnose</a></li>
              <li><a href="#">Covid Dashboard</a></li>
              <li><a href="#">Health Care Essentials</a></li>
            </ul>
          </div>
          <div id="footer-coloumn3" className="col-lg-4 col-sm-12 coloumn">
            <h5>Contact Us</h5>
            <p>Phone : 08064744188</p>
            <p>Phone : 08064744188</p>
            <p>E-mail : hello@mydoc.com</p>
          </div>
        </section>
        <section id="copyright">
          <p>&copy; 2020 MyDoc</p>
        </section>
      </footer>
    </>
  );
}

export default App;