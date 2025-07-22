import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const inputRef = useRef()
    const navigate = useNavigate()
    const [items,setItems] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })

  async function saveData(){
     await axios.post('http://localhost:3000/user',{fname:items.fname,lname:items.lname,email:items.email,password:items.password})
     alert('Data successfully saved')
     navigate('/')
  }
  function dataChange(e){
    const name = e.target.name
    const value = e.target.value
    setItems({...items,[name]:value})
  }
  useEffect(()=>{
       inputRef.current.focus()
  },[])
  return (
    <>
       <div className='maincontainer'>  
          <div className='formdiv'>
            <h3 className='text-center'><u>SIGN UP</u></h3>
                <br />
                        <Form.Group >
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "marginBottom": "20px" }} ref={inputRef} required type="text" name='fname' placeholder='Enter First Name' value={items.fname} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "mar": "20px" }} required type="text" name='lname' placeholder='Enter Last Name' value={items.lname} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Email ID</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="email" placeholder='Enter emailId' name='email' value={items.email} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="password" name='password' placeholder='Enter the password' value={items.password} onChange={dataChange}/>
                        </Form.Group>
                        <button className='signinbtn' onClick={saveData}>SAVE</button>
                        <button className='signinbtn' onClick={()=>navigate('/')}>BACK</button>
                    </div>
                </div>
    </>

  )
}

export default SignIn