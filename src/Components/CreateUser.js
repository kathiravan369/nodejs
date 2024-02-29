import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const[note,setNote] = useState()
    const[content,setContent] = useState()
    const navigate = useNavigate()
    

    const Submit = (e) =>{
       e.preventDefault();

       axios.post("http://localhost:5000/createUser",{note,content})
       .then(result => {
           console.log(result)
           navigate('/home')
       })
       .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Note</label>
                    <input type="text" placeholder='Enter Notes' className='form control'
                    onChange={(e) =>setNote(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Content</label>
                    <input type="text" placeholder='Enter content' className='form control'
                    onChange={(e) =>setContent(e.target.value)}/>
                </div>
                

                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser