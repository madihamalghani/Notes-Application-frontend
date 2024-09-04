import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name:'', email: '', password: '',cpassword:'' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {

      e.preventDefault();
 const {name,email,password}=credentials;
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",

          },
          body: JSON.stringify({ name,email,password }),

      });
      const json = await response.json();
      console.log(json);
      
        //save auth-token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/");
   

      if(json.success){
          //save auth-token and redirect
          localStorage.setItem('token',json.authtoken);
          navigate("/");
          props.showAlert('Congratulations your account has successfully been created', 'success');
      }else{
         props.showAlert('Invalid cradentials', 'danger');
      }

  }
  const onchange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
  
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onchange} required aria-describedby="emailHelp" />
          <div id="name" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onchange} minLength={5} required aria-describedby="emailHelp" />
          <div id="email" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} minLength={5} required />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
