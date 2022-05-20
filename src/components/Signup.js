import React from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const nav = useNavigate()
    const [input, setInput] = useState({
        name:"",
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
        const res = await axios.post('http://localhost:4000/api/signup', {
            name: input.name,
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
         sendRequest().then(()=>nav('/login'))

    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
<Box margin='auto' width={350} display="flex" flexDirection={'column'}>
    <Typography variant="h1">Signup</Typography>
    <TextField name="name" onChange={handleChange} variant="standard"  value={input.name} placeholder="Name" margin="normal" type={"name"}/> 
    <TextField name="email" onChange={handleChange} variant="standard" value={input.email} placeholder="Email" margin="normal" type={"email"}/>
    <TextField name="password" onChange={handleChange} variant="standard" value={input.password} placeholder="Password" margin="normal" type={"password"}/>
    <Button variant="standard" type="submit" >Signup</Button>
</Box>
            </form>
        </div>
    )
}

export default Signup