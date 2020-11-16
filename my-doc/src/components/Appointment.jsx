import React from 'react'
import { useState } from 'react'
import '../css/appointment.css'
import BG from '../img/bg.jpg'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'
function Appointment() {
    const [formDetails, setFormDetails] = useState('');
    const {name, email, phone,age,gender,date} = formDetails;
    const handleChange = e => {
        setFormDetails({...formDetails, [e.target.name]: e.target.value});
    }
    const {addToast}  = useToasts();
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formDetails);
        axios.post('http://localhost:5000/api/appointment', formDetails).then(res => addToast(res.data, {appearance:'success', autoDismiss:'true'}));   
    }
    return (
        <section id="appointment">
            <img src={BG} alt="doc" id="bg-img" />
            <form action="#" method="post" className="my-auto" onChange={handleChange} onSubmit={handleSubmit}>
                <div id="info">
                    <h1>Consult Our Experts</h1>
                    <h5>To get an appointment with our experts, fill this form</h5>
                </div>
                <div className="input">
                    <label className="label-for-input">
                        <span>Name:</span>
                        <input type="text" name="name" required placeholder="Your name" />
                    </label>
                </div>
                <div className="input">
                    <label className="label-for-input">
                        <span>E-mail:</span>
                        <input type="email" name="email" required placeholder="Your email" />
                    </label>
                </div>
                <div className="input">
                    <label className="label-for-input">
                        <span>Phone:</span>
                        <input type="tel" name="phone" required placeholder="Your Phone no" />
                    </label>
                </div>
                <div className="input">
                    <label className="label-for-input">
                        <span>Age:</span>
                        <input type="number" name="age" required min='1' max='120' placeholder="Your age" />
                    </label>
                </div>
                <div className="input">
                    <label className="label-for-input radio-input">
                        <span>Gender:</span>
                        <div>
                            <label className="radio"><input type="radio" name="gender" value="Male" required /><span>Male </span></label>
                            <label className="radio"><input type="radio" name="gender" value="Female" required /><span>Female </span></label>
                        </div>
                    </label>
                </div>
                <div className="input">
                    <label className="label-for-input">
                        <span>Date:</span>
                        <input type="date" name="date" required />
                    </label>
                </div>
                <div id="submit">
                    <input type="submit" value="Book Appointment" />
                </div>
            </form>
        </section>
    )
}

export default Appointment
