import React from "react";
import {useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"


const Login = () => {
    const nav = useNavigate()
    const [input, setInput] = useState({
        
        email:"",
        password:""
    })
    
    const handleChange = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const sendRequest = async ()=> {
        const res = await axios.post('http://localhost:4000/api/login', {
            
            email: input.email,
            password: input.password
            
        }).catch(err=>console.log(err))

        const data = await res.data
        console.log(res.data)
        return data
    }
    const handleSubmit =(e) => {
        e.preventDefault()
         //console.log(input)
         sendRequest().then(()=>nav('/user'))
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
<Box margin='auto' width={350} display="flex" flexDirection={'column'}>
    <Typography variant="h1">Login</Typography>
    <TextField name="email" onChange={handleChange} variant="standard" value={input.email} placeholder="Email" margin="normal" type={"email"}/>
    <TextField name="password" onChange={handleChange} variant="standard" value={input.password} placeholder="Password" margin="normal" type={"password"}/>
    <Button variant="standard" type="submit" >Login</Button>
</Box>
            </form>
        </div>
    )

}
export default Login