import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom'



function Login() {
    const history = useNavigate();

    const[name,setName] = useState(' ')
    const[email,setEmail] = useState(' ')
    const[password,setPassword] =useState(' ')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/",{
               name,email,password 
            })
            .then(res =>{
                if(res.data==="exist"){
                    history("/home")
                }else if(res.data==="notexist"){
                    alert("user have not dign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form action="/" method="post">
            <input type ="name" onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter Name Plz.."/>
            <input type ="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email Plz.."/>
            <input type ="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Enter Password  Plz.."/>
            <input type ="submit"  onClick={submit}/>

        </form>
        <br/>
        <p>Or</p>
        <br/>
        <Link to ='/signup'>signup page</Link>
    </div>
  )
}

export default Login