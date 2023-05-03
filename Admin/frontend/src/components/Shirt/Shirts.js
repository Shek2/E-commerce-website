import React,{useState,useEffect} from 'react';
import "./Shirt.css";
import axios from "axios"
import Shirt from './Shirt';
//import Shirts from './components/Shirt/Shirt;

const URL = "http://localhost:3333/shirts";

const fetchHandler = async() =>{
  return await axios.get(URL).then((res)=>res.data)
}

const Shirts = () => {

  const [shirts, setShirts] = useState();

  useEffect(() => {

    fetchHandler().then(data=>setShirts(data.shirts))
   
  }, []);
  console.log(shirts);
  
  return (
    <div>
      <ul>
        {shirts && shirts.map((shirt,i)=>(
          <li className='shirt' key={i}>
            <Shirt shirt={shirt}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shirts