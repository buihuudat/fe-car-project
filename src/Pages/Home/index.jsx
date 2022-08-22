import React from 'react'

import CarouselHome from './Carousel'

import { Box, Container, MenuItem, Paper, Typography, FormControl, InputLabel, Select } from '@mui/material'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LoadingButton from '@mui/lab/LoadingButton';
import Collection from './Collection';
import Brands from './Brands'
import News from './news';

const Home = () => {
  const [brand, setBrand] = React.useState('');
  const [body, setBody] = React.useState('');
  const [year, setYear] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    console.log(event)
  };
  return (
    <Box sx={{
      minHeight: '100vh',
    }}>
      <Box>
        <CarouselHome/>
      </Box>
      <Container>
        {/* find car */}
        <Paper 
         elevation={3} square
          sx={{
            margin: '0 auto',
            height: '200px',
            backgroundColor: 'primary',
            padding: 2
        }}>
          <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <TimeToLeaveIcon color='warning' fontSize='large' />
            <Typography 
              sx={{color: 'white'}} 
              fontWeight={600}
              variant='h4'>Find Your </Typography>
            <Typography 
              fontWeight={600}
              variant='h4'
              sx={{color: 'orange'}}>Car</Typography>
          </Box>
          <Box sx={{
            display: 'flex', 
            flexDirection: 'row', 
            p: 3,
            gap: 3
          }}>
            <FormControl fullWidth>
              <InputLabel id="select-brand">Select Brand</InputLabel>
              <Select
                labelId="select-brand"
                value={brand}
                label="Select Brand"
                onChange={handleChange}
                name={'brand'}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="Select-body">Select Body</InputLabel>
              <Select
                labelId="Select-body"
                value={body}
                label="Select Body"
                onChange={handleChange}
                name={'body'}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="select-year">Select Year</InputLabel>
              <Select
                labelId="select-year"
                value={year}
                label="Select Year"
                onChange={handleChange}
                name={'year'}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="select-price">Select Price</InputLabel>
              <Select
                labelId="select-price"
                value={price}
                label="Select Price"
                onChange={handleChange}
                name={'price'}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
            <LoadingButton fullWidth
            variant='outlined'>Search Car</LoadingButton>
          </Box>
        </Paper>
        {/* latest collection */}
        <Collection />
        {/* brand */}
        <Brands />
        {/* News */}
        <News />
      </Container>
    </Box>
  )
}

export default Home