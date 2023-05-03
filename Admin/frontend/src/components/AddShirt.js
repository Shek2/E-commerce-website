import React,{useState} from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddShirt = () => {

  const nav = useNavigate();

  const [inputs, setInputs] = useState({
    image:'',
    shirtName:'',
    shirtType:'',
    size:'',
    color:'',
    price:''
  });

  const handleChange = (e) =>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const sendRequest = async() => {
    axios.post("http://localhost:3333/shirts",{
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

  return (
    <form onSubmit={handleSubmit}>
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

      <Button variant='contained' type='submit'>Add Shirt</Button>
      </Box>
    </form>
  )
}

export default AddShirt