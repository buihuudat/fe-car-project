import React from 'react'
import { Box, Button, Container, Fade, Modal, Paper, TextField, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';

import Banner from '../../components/common/Banner'
import { useState } from 'react'

const fincancce_banner = require('../../access/images/image/about/finance_banner.jpg')

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  gap: 3
};

const FinanceCalculatorPage = () => {
  const [vehiclePrice, setVehiclePriceErrText] = useState('')
  const [periodInMonth, setPeriodInMonthErrText] = useState('')
  const [downPayment, setDownPaymentErrText] = useState('')

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const CurrentFormat = (m) => new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(m)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const vehiclePrice = data.get('vehiclePrice')
    const periodInMonth = data.get('periodInMonth')
    const downPayment = data.get('downPayment')
    let err = false

    if (vehiclePrice === '') {
      err = true
      setVehiclePriceErrText('Please fill this field')
    }
    if (periodInMonth === '') {
      err = true
      setPeriodInMonthErrText('Please fill this field')
    }
    if (downPayment === '') {
      err = true
      setDownPaymentErrText('Please fill this field')
    }
    if (err) return

    setDownPaymentErrText('')
    setPeriodInMonthErrText('')
    setVehiclePriceErrText('')
    const vehiclePriceCal = (vehiclePrice - downPayment) / periodInMonth
    const periodInMonthCal = vehiclePrice - downPayment
    const downPaymentCal = vehiclePrice

    setMonthlyPayment(vehiclePriceCal)
    setTotalAmount(periodInMonthCal)
    setTotalPayment(downPaymentCal)
    setOpen(true)
  }
  return (
    <Box p={8}>
      <Banner 
        img={fincancce_banner}
        title='Finance Calculator'
        path={[{
          path: '/about',
          pathParent: 'About'
        }]}
      />
      <Container>
        <Typography variant='h4' fontWeight={600} align='center' p={3}>
          Finance Calculator
        </Typography>
        <Paper component={'form'} onSubmit={handleSubmit}
          sx={{m: '0 auto', p: 5, display: 'flex', flexDirection: 'column', gap: 2, maxWidth:'500px'}}
        >
          <TextField
            label='Vehicle price'
            name='vehiclePrice'
            type={'number'}
            margin='normal'
            error={vehiclePrice !== ''}
            helperText={vehiclePrice}
          />
          <TextField
            label='Period in Month'
            type={'number'}
            name='periodInMonth'
            margin='normal'
            error={periodInMonth !== ''}
            helperText={periodInMonth}
          />
          <TextField
            label='Down Payment'
            type={'number'}
            name='downPayment'
            margin='normal'
            error={downPayment !== ''}
            helperText={downPayment}
          />
          <Button type='submit' p={3} fullWidth variant='outlined' size='large' color='warning'>
            Calculate
          </Button>
        </Paper>
      </Container>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h4" fontWeight={600}>
              Monthly Payment
            </Typography>
            <Typography variant='h5'>{CurrentFormat(monthlyPayment)}</Typography>
            <Typography variant="h4" fontWeight={600}>
              Total Amount Without Down Payment
            </Typography>
            <Typography variant='h5'>{CurrentFormat(totalAmount)}</Typography>
            <Typography variant="h4" fontWeight={600}>
              Total Amount With Down Payment
            </Typography>
            <Typography variant='h5'>{CurrentFormat(totalPayment)}</Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default FinanceCalculatorPage