import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
    <Typography sx={{fontFamily:"fantasy", color:'red'}} variant='h2'>Dreamz Buy</Typography>
    <Button LinkComponent={Link}to="/shirts" sx={{marginTop:'15'}} variant='contained'>
    <Typography sx={{fontFamily:"fantasy"}}  variant='h3'>View All Products</Typography>
    </Button>
  </Box>
  </div>
  )
}

export default Home