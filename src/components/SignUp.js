import React,{useState} from 'react'

import axios from 'axios';

import {Link} from "react-router-dom";

function SignUp() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    //any function helps me to access class component properties -> Hook

    let handleSubmit =(event) => {
        const obj = {name,email,password};
        const url = "https://employeedatabasee.onrender.com/employee/create-employee";
        axios.post(url,obj).then((res)=> {
          if(res.status === 200) {
            alert("Employeee added successfully");
          }
          else {
            alert("error");
            Promise.reject();
          }
        }).catch((err)=> {
          alert(err);
        });
        event.preventDefault();
    }

  return (
    
   <form onSubmit={handleSubmit}>
    <label for="name">Name</label>
    <input type="text" id="name" onChange={(e)=> {setName(e.target.value)}} />
    <label for="email">Email</label>
    <input id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" onChange={(e)=>{setPassword(e.target.value)}}/>
    <input type="submit" />
    <Link to="login" >Login</Link>
    <h2>
    <Link to="/view">View</Link>
    </h2>
   </form>
  )
}

export default SignUp
