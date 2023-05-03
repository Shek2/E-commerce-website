import { Button } from '@mui/material';
import React from 'react'
import "./Shirt.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Shirt = (props) => {

  const nav = useNavigate();
   
    const {_id,image,shirtName,shirtType,size,color,price} = props.shirt;

    const deleteHandler = async () => {
      await axios
      .delete(`http://localhost:3333/shirts/${_id}`)
      .then((res) => res.data)
      .then(() =>  nav("/"))
      .then(() => nav("/shirts"));
    };

  return (
    <div className='card'>
       <img src={image} alt='Shirt img' />
        <h4>{shirtName} ({shirtType})</h4>
        <p><strong>{size}</strong> {color} Color</p>
        <h3>Rs {price}</h3>

        <Button src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_LkIxnvbwJ0sj4R" async>Buy Now</Button>
    </div>
  )
}

export default Shirt