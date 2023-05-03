import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography sx={{fontFamily:"fantasy"}} variant='h2'>Dreamz Buy</Typography>
        <Typography sx={{fontFamily:"fantasy"}}  variant='h3'>1881</Typography>
      </Box>
    </div>
  )
}

export default About