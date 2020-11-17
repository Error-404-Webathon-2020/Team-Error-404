import React, { Component ,  useState} from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../css/chatpage.css'

// <style>
// @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
// </style>


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Poppins ',
  headerBgColor: '#3A96FF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#3A96FF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class Result extends Component{
  constructor(props) {
    super(props);

    this.state = {
       result:''
    };
  }
  componentWillMount() {
    const { steps } = this.props;
    console.log(this.props);
    const { name ,age ,dry_coughYN ,headacheYN ,shortness_breathYN ,tiredness_YN   } = steps;
   //preprocessing ........
    if( dry_coughYN.value === "Yes" && headacheYN.value==="Yes" && shortness_breathYN.value==="Yes" && tiredness_YN.value==="Yes")
    { 
      const {result } =  this.state ;
      this.setState({result:"You are at  risk"});
    }
    else if( dry_coughYN.value === "Yes" && headacheYN.value==="No" && shortness_breathYN.value==="Yes" && tiredness_YN.value==="Yes")
    { 
      const {result } =  this.state ;
      this.setState({result:"You are at  risk"});
    }
    else if( dry_coughYN.value === "No" && headacheYN.value==="No" && shortness_breathYN.value==="Yes" && tiredness_YN.value==="Yes")
    { 
      const {result } =  this.state ;
      this.setState({result:"You are at  risk"});
    }
    
    else if( dry_coughYN.value === "Yes" && headacheYN.value==="Yes" && shortness_breathYN.value==="No" && tiredness_YN.value==="No")
    { 
      const {result } =  this.state ;
      this.setState({result:"Health condition looks  normal"});
    }
     else if( age>=50 && shortness_breathYN.value==="Yes" || age>=50 && headacheYN.value === "Yes"&& dry_coughYN.value ==="Yes" )
        {
            const {result } = this.state ;
            this.setState({result:"You are at  risk"});
        }
        else{
          const {result } =  this.state ;
         this.setState({result:"Health condition looks  normal"});

        }

    //this.setState({ });
  }
  render() {
    const { result } = this.state;
     let com =null 
    if(result === "You are at  risk")
    {
      com = (<div style={{backgroundColor:"#E8290B" , borderRadius:"7px",padding:"3px"}}> <h4 style={{color:"white"}}>{result}</h4></div>);
    }
    if(result ==="Health condition looks  normal")
    {
      com =(<div style={{backgroundColor:"#45CE30", borderRadius:"7px", padding:"3px"}}> <h4 style={{color:"white"}}>{result}</h4></div>);
    }
    return (
       <React.Fragment>
       {com}
       </React.Fragment> //pro
    );

} }

Result.propTypes = {
  steps: PropTypes.object,
};

Result.defaultProps = {
  steps: undefined,
};
//.............................................
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      dry_coughYN:'',
      headacheYN:'',
      shortness_breathYN:'',
      tiredness_YN:'',
      
    };
  }
  
  componentWillMount() {
    const { steps } = this.props;
    console.log(this.props);
    const { name ,age ,dry_coughYN ,headacheYN ,shortness_breathYN ,tiredness_YN   } = steps;

    this.setState({ name, age ,dry_coughYN ,headacheYN ,shortness_breathYN ,tiredness_YN });
  }

  render() {
    const { name, age , dry_coughYN ,shortness_breathYN ,tiredness_YN ,headacheYN } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Dry Cough</td>
              <td>{dry_coughYN.value}</td>
            </tr>
            <tr>
              <td>Headache</td>
              <td>{headacheYN.value}</td>
            </tr>
            <tr>
              <td>Tiredness</td>
              <td>{tiredness_YN.value}</td>
            </tr>
            <tr>
              <td>Shortness in Breathing</td>
              <td>{shortness_breathYN.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const SimpleForm =()=> {
  
     const [show ,setShow] = useState(false)
    
     const botHide=()=>{
       setShow(false)
     }
     const botShowHide=()=>{
       setShow(!show)
     }

    return (
      <React.Fragment>
      
      { show == true && <div className="chatPage">
      <ThemeProvider theme={theme} >    
      <ChatBot
      inputStyle={{borderBottom:'none'}}
      submitButtonStyle={{paddingTop:"0px"}}
      userAvatar="https://res.cloudinary.com/simi/image/upload/v1605544521/person_n2iwss.jpg"
      botAvatar="https://res.cloudinary.com/simi/image/upload/v1605544479/bot_hepzt6.jpg"
      headerTitle="Diagnose Covid-19"
      
      speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: 'age_msg',
          },
          {
            id: 'age_msg',
            message: 'Hi {previousValue}! What is ur age?',          
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: 'covid_19',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value <= 0) {
                return 'Not a valid age';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;}
          },
          {
              id:"covid_19",
              message:"Are you here to test for  covid-19?",
              trigger:"covid_19YN"
          },
          {
              id:"covid_19YN",
              options: [
                { value: "Yes", label: 'Yes' ,  trigger:"answer_Q" },
                { value: "No", label: 'No', trigger: 'end_message' },
                
              ],
          },
          {
            id:"answer_Q",
            message:"Okay ! Answer these questions",
            trigger:"shortness_breath"

          },
          {
              id:"end_message",
              options: [
                { value: "Book Appointment", label: 'Book Appointment' ,  trigger:"Click_book_A" },
                { value: "Contact Us", label: 'Contact Us', trigger: 'Click_go_contact' },
                
              ],
          },
          {
            id:"shortness_breath",
            message:"Do you feel shortness of breathing ?",
            trigger:"shortness_breathYN"
          },
          {
            id:"shortness_breathYN",
            options: [
              { value: "Yes", label: 'Yes' ,  trigger:"tiredness" },
              { value: "No", label: 'No', trigger: 'tiredness' },
              
            ],
          },
          {
            id:"tiredness",
            message:"Do you feel tiredness ?",
            trigger:"tiredness_YN"
          },
          { 
            id:"tiredness_YN",
           options: [
            { value: "Yes", label: 'Yes' ,  trigger:"headache" },
            { value: "No", label: 'No', trigger: 'headache' },
            
          ],

          },
          {
            id:"headache",
            message:"Are you having headache?",
            trigger:"headacheYN"
          },
          {
            id:"headacheYN",
            options: [
              { value: "Yes", label: 'Yes' ,  trigger:"dry_cough" },
              { value: "No", label: 'No', trigger: 'dry_cough' },
              
            ],
          },
          {
            id:"dry_cough",
            message:"Are you having dry cough?",
            trigger:"dry_coughYN"
          },
          {
            id:"dry_coughYN",
            options: [
              { value: "Yes", label: 'Yes' ,  trigger:"review" },
              { value: "No", label: 'No', trigger: 'review' },
              
            ],
          },
          {
            id:"review",
            component: <Review/> ,
            asMessage:true ,
            trigger: "update"
          },
          {
            
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update_YN',
            
          },{
            id:"update_YN",
            options: [
              { value: "Yes", label: 'Yes' ,  trigger:"update_Y" },
              { value: "No", label: 'No', trigger: 'end_result' },
              
            ],
          },
          {
            id:"update_Y",
            message :"Which field you want to update ?" ,
            trigger:"update_options"
          },
          {
            id:"update_options",
            options: [
              { value: "name", label: 'name' ,  trigger:"update_name" },
              { value: "age", label: 'age', trigger: 'update_age' },
               { value: "Headache", label: 'headache', trigger: 'update_headache' },  // label change
              { value: "Tiredness", label: 'tiredness', trigger: 'update_tiredness' },
              { value: "Dry cough", label: 'Dry Cough', trigger: 'update_cough' },
              { value: "Breathing Problem", label: 'Shortness in Breathing', trigger: 'update_breathing' },
              
            ],

          }, 
          {
            id :"update_name",
            update:'name',
            trigger:'review'
          },
          {
            id:"update_headache",
            update:'headacheYN',
            trigger:"review"
          },
          {
            id:"update_age",
            update:"age",
            trigger:"review"
          },
          {
            id:"update_tiredness",
            update:"tiredness_YN",
            trigger:"review"
          },
          {
            id:"update_cough",
            update:"dry_coughYN",
            trigger:"review"
          },
          {
            id:"update_breathing",
            update:"shortness_breathYN",
            trigger:"review"
          },
          {
            id:"end_result",
            component:<Result/>,
            asMessage:true,
            trigger:"end_message"
          },
          {
            id:"Click_book_A",
            component:(
               <a href="https://mydoct.netlify.app/appointment.html" target="_blank" style={{textDecoration:"none"}}>
                <div><strong>Click here to book Appointment</strong></div>      
               </a>
            ),
            end:true
          },{
            id:'Click_go_contact',
            component:(
              <a href="https://mydoct.netlify.app/contact.html" target="_blank"  style={{textDecoration:"none"}}>
                <div><strong>Click to Contact us!</strong></div>
              </a>
            ),
            end: true
          }
          
          
        ]}
      />
      </ThemeProvider>
       
      </div> }
      

      <div style={{position:"fixed" , right:"30px" , bottom:"15px" , zIndex:"50"}}>
      <img  style={{width:"60px" , height:"60px" , borderRadius:"50%" , cursor:"pointer", marginTop:"5px"}} src="https://res.cloudinary.com/simi/image/upload/v1605544492/chatbot_square_zr4og2.jpg" onClick={botShowHide} />
      </div>
      
     
      </React.Fragment>
    );
  
}

export default SimpleForm;