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
import FinanceCalculatorPage from './Pages/About/FinanceCalculatorPage';
import FAQs from './Pages/About/FAQs';
import Testimonial from './Pages/About/Testimonial';
import ServiceStyle1 from './Pages/Services/ServiceStyle1';
import ServiceDetail from './Pages/Services/ServiceDetail';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';

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
            <Route path='about/finance_calculator' element={<FinanceCalculatorPage />} />
            <Route path='about/FAQs' element={<FAQs />} />
            <Route path='about/testimonials' element={<Testimonial />} />

            <Route path='services/service_style1' element={<ServiceStyle1 />} />
            <Route path='services/service_details' element={<ServiceDetail />} />

            <Route path='shop/our_shop' element={<Shop />} />

            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App