import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



function Home() {
    const[users,setUsers] = useState([])

     useEffect(() =>{
        axios.post('http://localhost:5000/home')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

     },[])
     
    const handleDelete = (id) =>{
        axios.delete('http://localhost:5000/deleteUser/'+id)
        .then(res => {console.log(res)
              window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
 
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        
        <div className='w-50 bg-white rounded p-3'>
        <h1>Hello and welcome to the home</h1>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <Link to="/" className='btn btn-success'>logout</Link>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Notes</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                 {
                  users.map((user) => {
                        return <tr>
                            <td>{user.note}</td>
                            <td>{user.content}</td>
                            <td><Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                            <button className='btn btn-danger'
                            onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    })
                 }

                </tbody>



            </table>
            
            </div> 
       
        
        
    </div>
  )
}

export default Home