import React from 'react'
import { Box, Container } from '@mui/material'

import Navbar from '../common/Navbar'
import { Outlet } from 'react-router-dom'
import BackToTop from '../common/ScrollTop'
import Footer from '../common/Footer'

const AppLayout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />  
      <BackToTop />
      <Footer />
    </Box>
  )
}

export default AppLayout