import { Box, Container } from '@mui/material'
import React from 'react'
import Banner from '../../components/common/Banner'
import Feedback from './Feedback'

const Testimonial = () => {
  return (
    <Box>
      <Banner
        title='Testimonials'
        path={[{
          path: '/about',
          pathParent: 'About'
        }]}
      />
      <Container>
      <Feedback />
      </Container>
    </Box>
  )
}

export default Testimonial