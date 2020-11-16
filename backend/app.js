const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("SG."+ process.env.apiKey);
const mongoose = require('mongoose');
const app = express();
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
    html: `<h1>Appointment scheduled</h1>
    <p style="color:blue">${req.body.name}</p>
    <p style="color:yellow">${req.body.date}</p>`,
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

app.listen(process.env.PORT || 5000, () => console.log('server running on port 5000'));