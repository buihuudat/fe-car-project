import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './access/styles/font.scss'
import './access/styles/custom-scrollbar.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'

import Home from './Pages/Home';
import About from './Pages/About';
import CompareCarPage from './Pages/About/CompareCarPage';
import CompareDetailsPage from './Pages/About/CompareDetailsPage';
import FindDealerPage from './Pages/About/FindDealerPage';
import DealerDetails from './Pages/About/DealerDetails';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' index element={<Home />} />

            <Route path='about' element={<About />} />
            <Route path='about/compare_cars' element={<CompareCarPage />} />
            <Route path='about/compare_details' element={<CompareDetailsPage />} />
            <Route path='about/find_dealers' element={<FindDealerPage />} />
            <Route path='about/dealers_details' element={<DealerDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App