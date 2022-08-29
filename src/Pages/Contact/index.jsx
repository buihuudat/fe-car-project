import React from 'react'
import { Box, Container, Typography, Grid, TextField } from '@mui/material'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import Banner from '../../components/common/Banner'
import LoadingButton from '@mui/lab/LoadingButton';

const dataDetails = [
  {
    icon: <LocationOnIcon color='warning' sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Location',
    sub1: '123 Hai Ba Trung, Q3, HCM',
    sub2: '45/5 Hoan Kiem, HN',
  },
  {
    icon: <PhoneIcon color='warning' sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Contact Number',
    sub1: '+84 999955555',
    sub2: '+84 987654321',
  },
  {
    icon: <MailIcon color='warning' sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Mail Address',
    sub1: 'contact.dealer@example.com',
    sub2: 'servicecenter@domain.com',
  },
]

const Contact = () => {
  return (
    <Box>
      <Banner
        title={'Contact'}
        path={[{
          path: '/',
          pathParent: 'Home'
        }]}
      />
      <Container sx={{p:10}}>
        <Typography variant='h4' p={5} fontWeight={600} align={'center'}>
          Contact Information
        </Typography>
        <Grid container spacing={10}>
        {dataDetails.map((data, index) => (
          <Grid item xs={4} 
            key={index}
            sx={{display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            }}>
              {data.icon}
              <Typography variant='h5' p={3} fontWeight={600}>{data.title}</Typography>
              <Typography variant='body2'>{data.sub1}</Typography>
              <Typography variant='body2'>{data.sub2}</Typography>
          </Grid>
              ))}
        </Grid>
      </Container>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7837.578313215893!2d106.68473512281001!3d10.827441151213312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1661435098076!5m2!1svi!2s"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        <Container>
          <Box p={5} component={'form'} sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <Typography variant='h4' fontWeight={600} align='center'>
            Contact us
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Name'
                name='name'
                margin='normal'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Phone'
                name='phone'
                margin='normal'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Email'
                name='email'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label='Message'
                name='message'
                margin='normal'
                multiline
                rows={5}
              />
            </Grid>
          </Grid>
          <LoadingButton
            loading={false}
            fullWidth
            variant='outlined'
            size='large'
          >
            Send now
          </LoadingButton>
          </Box>
        </Container>
    </Box>
  )
}

export default Contact