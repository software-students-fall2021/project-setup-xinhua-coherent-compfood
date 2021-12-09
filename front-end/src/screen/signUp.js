import  React, { useState, useEffect } from 'react';
import '../signUp.css';
import axios from 'axios'
const SignUp = () => {
    const [fname, setfname] = useState("initialState")
    const [lName, setlname] = useState("initialState")
    const [username, setusername] = useState("initialState")
    const [password, setpassword] = useState("initialState")
    
    const handleSubmit = (event) => {
      event.preventDefault(); 
      const payload = {
          firt_name: fname,
          last_name: lName,
          username: username,
          password: password
        };
      axios({
        url: 'http://localhost:61001/signup',
        method: 'POST',
        data: payload
      })
        .then(() => {
          console.log('Data has been sent to the server');
          this.resetUserInputs();
          this.getBlogPost();
        })
        .catch(() => {
          console.log('Internal server error');
        });;
  
    };
    

   

    return (
      <form onSubmit={handleSubmit}>
      <div>
          <div className = "sign-up-page-title">
              Sign up Page
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "First Name.."
              onChange = {(event) =>{
                setfname(event.target.value)
              }}        
            />
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Last Name.."
              onChange = {(event) => {
                setlname(event.target.value)
              }}
            />
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "username..."
              onChange = {(event) => {
                setusername(event.target.value)
              }}
            />
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "password..."
              onChange = {(event) => {
                setpassword(event.target.value)
              }}  
            
            />
                { console.log("ok", fname)  } 
                {console.log("hi")}
          </div>

          <div className = "signup-button-outside-border">
              <button className = "signup-button">
                  Sign up
              </button>
          </div>
          <div>
            <p>Already have an account with CompFood? <a href="/login">Log In</a></p>
          </div>
      </div>
      </form>
    );
}

export default SignUp;