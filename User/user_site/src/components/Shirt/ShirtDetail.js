import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'


const ShirtDetail = () => {

    const [inputs, setInputs] = useState({});
    const id = useParams().id;

    const nav = useNavigate();
   

    useEffect(()=>{
        const fetchHandler = async() => {
            await axios.get(`http://localhost:3333/shirts/${id}`)
            .then((res)=>res.data).then(data=>setInputs(data.shirt));
        };
        fetchHandler()
    },[id]);

    const sendRequest = async() => {
        await axios.put(`http://localhost:3333/shirts/${id}`,{
          image: String(inputs.image),
          shirtName: String(inputs.shirtName),
          shirtType: String(inputs.shirtType),
          size: String(inputs.size),
          color: String(inputs.color),
          price: Number(inputs.price),
        }).then(res=>res.data);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault(); 
        sendRequest().then(()=>nav('/shirts')) 
      }

      const handleChange = (e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
          }));
      };

  return (
    <div>
    {inputs && (   <form onSubmit={handleSubmit}>
    <Box display='flex' 
    flexDirection='column' 
    justifyContent={'center'} 
    maxWidth={700}
    alignItems={'center'}
    marginLeft={'auto'}
    marginRight={'auto'}
    marginTop={5}>

    <TextField value={inputs.image} onChange={handleChange} margin='normal' label='Image' fullWidth variant='outlined' name='image'/>

    <TextField value={inputs.shirtName} onChange={handleChange} margin='normal' label='Shirt Name' fullWidth variant='outlined' name='shirtName'/>

    <TextField value={inputs.shirtType} onChange={handleChange} margin='normal' label='Shirt Type' fullWidth variant='outlined' name='shirtType'/>

    <TextField value={inputs.size} onChange={handleChange} margin='normal' label='Size' fullWidth variant='outlined' name='size'/>

    <TextField value={inputs.color} onChange={handleChange} margin='normal' label='Color' fullWidth variant='outlined' name='color'/>

    <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' label='Price' fullWidth variant='outlined' name='price'/>

    <Button variant='contained' type='submit'>Update Shirt</Button>
    </Box>
  </form>)}
  </div>
  )
}

export default ShirtDetail