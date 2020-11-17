const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("SG."+ process.env.apiKey);
const mongoose = require('mongoose');
const app = express();
const path = require('path');
require('dotenv').config(); 
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
console.log(process.env.apiKey);
console.log(process.env.uri); 
// Enables CORS
app.use(cors({ origin: true }));
mongoose.connect(process.env.uri,{useNewUrlParser : true, useUnifiedTopology : true});
const appSchema = new mongoose.Schema({
  name : {type : String},
  email : {type : String},
  phone : {type : Number},
  age : {type : Number},
  gender : {type : String},
  date : {type :Date}
});

const Appointment = mongoose.model('Appointment', appSchema);

// appointment api
app.post('/api/appointment', (req,res) => {
  const emailData = {
    from: 'care.mydoc@gmail.com',
    to: req.body.email,
    subject: "Appointment scheduled",
    html: `    <section id="mail" style="font-family: Arial, Helvetica, sans-serif; text-align: left; width: 100%;position: relative;">
        <div id="image" style="width: 100%;">
            <img src="https://www.lumahealth.io/wp-content/uploads/2018/05/Transparency-in-the-Doctor-Patient-Relationship-1.jpg" alt="banner image" style="width: 100%;">
        </div>
        <div id="content" style="width: 100%;">
            <p>Dear Snehasish,</p>
            <p>Thank you for booking an appointment with our experts.</p>
            <p>We are pleased to inform you that your Appointment has been confirmed. The details of your appointment are mentioned below.</p>
            <p id="name">Name :</p>
            <p id="email">E-mail :</p>
            <p id="phone">Phone :</p>
            <p id="gender">Gender :</p>
            <p id="date">Date :</p>
            <br>
            <p>If you have any queries, You can contact us at +91 8097256743</p>
            <br>
            <p>Regards,<br>MyDoc</p>
            <a href="" style="text-decoration: none; width: 100%;"><button style="width: 130px; height: 35px; border-radius: 5px; position: absolute; left: 50%; transform: translateX(-50%); background-color: #3A96FF; outline: none; border: none; color: white; font-size: 16px;">Visit MyDoc</button></a>
        </div>
        <br>
        <br>
        <br>
        <br>
    </section>    `,
    };
    let newApp = new Appointment({
      name : req.body.name,
      email : req.body.email,
      phone : req.body.phone,
      age : req.body.age,
      gender : req.body.gender,
      date : req.body.date
    });
    newApp.save();

    (async () => {
      try {
        await sgMail
          .send(emailData)
          .then(sent => {
            return res.send('Booked successfully');
          })
          .catch(err => {
            console.log(err, 'error');
            return res.send(err);
          })
      } 
      catch(error) {
        console.log(error, 'error');
      }
    })();
  console.log(req);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'))
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(process.env.PORT || 5000, () => console.log('server running on port 5000'));