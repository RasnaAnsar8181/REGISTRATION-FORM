 import { useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Details() {
    const navigate = useNavigate()
    const location = useLocation()
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const inputRef = useRef()
    const [isreadOnly,setisreadOnly] = useState(true)
    console.log(location.state._id)

    function changeData(){
        setisreadOnly(false)
        inputRef.current.focus()
    }
    async function saveData(){
        await axios.put(`http://localhost:3000/user/${location.state._id}`,{fname:fname,lname:lname,email:email,password:password})
        alert('Data successfully saved')
        navigate('/')
     }
    function getData(){
            setFname(location.state.fname)
            setLname(location.state.lname)
            setEmail(location.state.email)
            setPassword(location.state.password)
        }
    useEffect(()=>{ 
        getData()
    },[])
    
    return (
        <>
            <div className='maincontainer'>
                    <div className='formdiv'>
                        <Form.Group >
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control className='field' style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} ref={inputRef} readOnly={isreadOnly} type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control className='field' style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} readOnly={isreadOnly} type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Email ID</b></Form.Label>
                            <Form.Control className='field' style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} readOnly={isreadOnly} type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control className='field' style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} readOnly={isreadOnly} type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>                       
                        <ButtonGroup>
                            <Button className='m-3' onClick={changeData}>EDIT</Button> 
                            <Button className='m-3' onClick={saveData}>SAVE</Button>
                            <Button className='m-3' onClick={()=>navigate('/')}>BACK</Button>
                        </ButtonGroup>         
                    </div>
            </div>
        </>
    )
}

export default Details



