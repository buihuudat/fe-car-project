import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

const imgBanner = require('../../access/images/image/about/about-banner.jpg')

const dataBanner = [
  {
    icon: <LocalShippingOutlinedIcon 
      sx={{ width: '60px', height: '60px' }}
    />,
    title: 'Free Shipping',
    content: 'Lorem ipsum dolor sit amet after consectetur adipisicing',
  },
  {
    icon: <MiscellaneousServicesOutlinedIcon 
    sx={{ width: '60px', height: '60px' }}
  />,
    title: '5 Free Servicing',
    content: 'Lorem ipsum dolor sit amet after consectetur adipisicing',
  },
  {
    icon: <HelpOutlineOutlinedIcon 
    sx={{ width: '60px', height: '60px' }}
  />,
    title: '24/7 Hepl Center',
    content: 'Lorem ipsum dolor sit amet after consectetur adipisicing',
  },
  {
    icon: <CardGiftcardOutlinedIcon 
    sx={{ width: '60px', height: '60px' }}
  />,
    title: 'Sure Gift Packs',
    content: 'Lorem ipsum dolor sit amet after consectetur adipisicing',
  },
]

const AboutBanner = () => {
  return (
    <Box
      sx={{
        background: `url(${imgBanner}) no-repeat fixed`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: 'max-content',
        padding: '0 3rem'
      }}
    >
      <Grid container p={4} justifyContent='center' spacing={4}>
        {dataBanner.map((data, index) => (
        <Grid item xs={2} key={index}>
            <Box sx={{}}>
              {data.icon}
              <Typography sx={{p: '1rem 0'}} color='orange' variant={'h5'} fontWeight={600}>{data.title}</Typography>
              <Typography>{data.content}</Typography>
            </Box>
        </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AboutBanner