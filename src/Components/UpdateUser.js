import React ,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
    const{id} = useParams()
     const[note,setNote] = useState()
     const[content,setContent] = useState()
     const navigate = useNavigate()

     useEffect(() =>{
        axios.get('http://localhost:5000/getUser'+id)
        .then(result => {console.log(result)
            setNote(result.data.note)
            setContent(result.data.content)
            
        })
        .catch(err => console.log(err))

    },[])

    const Update = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:5000/updateUser/"+id,{note,content})
        .then(result => {
            console.log(result)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Note</label>
                    <input type="text" placeholder='Enter your notes ' className='form control'
                    value={note} onChange={(e) =>setNote(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Content</label>
                    <input type="text" placeholder='Enter your content' className='form control'
                    value={content} onChange={(e) =>setContent(e.target.value)}/>
                </div>

                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser