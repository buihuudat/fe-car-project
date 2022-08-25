import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Banner from '../../components/common/Banner'
import CarComparison from '../Home/CarComparison'

const detailBanner = require('../../access/images/image/about/details-banner.jpg')

const CompareDetailsPage = () => {
  return (
    <Box>
      <Banner 
        img={detailBanner}
        title='Compare Details'
        path={[{
          path: '/about/compare-details',
          pathParent: 'About'
        }]}
      />
      <Container>
        <Typography variant='h4' fontWeight={600} p={3} align='center'>
          Car Comparison
        </Typography>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography variant='h5' fontWeight={600}>
                Car Comparison Features
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <img src='https://smartdatawp.com/motodeal/classified/wp-content/uploads/sites/11/2020/01/4.jpg' alt='car 1' />
                <Typography variant='h5' fontWeight={600}>
                  car 1
                </Typography>
                <Typography color='orange' variant='h6' fontWeight={500}>
                  price
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <img src='https://smartdatawp.com/motodeal/classified/wp-content/uploads/sites/11/2020/01/4.jpg' alt='car 1' />
                <Typography variant='h5' fontWeight={600}>
                  car 2
                </Typography>
                <Typography color='orange' variant='h6' fontWeight={500}>
                  price 2
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <CarComparison />
      </Container>
    </Box>
  )
}

export default CompareDetailsPage