import React, { useState }from 'react'
import axios from "axios"
import { useNavigate , Link } from 'react-router-dom'

function Signup() {

    const history = useNavigate();

    const [name , setName ] = useState(' ')
    const [ email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
   
    async function submit(e){
        e.preventDefault();
        try{

            await axios.post("http://localhost:5000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                   
                    alert("User already existed")

                

                }else if (res.data==="notexist"){

                    history("/",{state:{id:email}})

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

    <div className='signup'>
        <h1>Signup</h1>
        <form action="/signup" method="Post">
            <input type="name" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter name plz ....' name="" id=""/>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email plz ....' name="" id=""/>
            <input type="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password plz ....' name="" id=""/>
            <input type="submit" onClick={submit}/>

        </form>
        <br/>
        <p>Or</p>
        <br/>

        <Link to="/">Login</Link>

    </div>
  )
}

export default Signup