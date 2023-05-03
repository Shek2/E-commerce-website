import React,{useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [value, setValue] = useState();

  return (
    <div>
        <AppBar sx={{backgroundColor:'red'}} position='sticky'>
            <Toolbar>
                <NavLink to='/' style={{color:'white' , textDecoration:'none'}} >
            <Typography variant='h5' style={{ fontWeight:'100', fontFamily:'fantasy'}}>
                Dreamz Buy
            </Typography>
            </NavLink>
            <Tabs sx={{ml:'auto'}} 
            textColor='inherit' 
            indicatorColor='primary' 
            value={value} 
            onChange={(e,val)=>setValue(val)}>

                <Tab LinkComponent={NavLink} to="/add" label='Add Product' sx={{ fontWeight:'500', fontFamily:'fantasy', color:'#000'}}/>

                <Tab LinkComponent={NavLink} to="/shirts" label='Shirts' sx={{ fontWeight:'500', fontFamily:'fantasy', color:'#000'}}/>

                <Tab LinkComponent={NavLink} to="/about" label='About us' sx={{ fontWeight:'500', fontFamily:'fantasy', color:'#000'}}/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
