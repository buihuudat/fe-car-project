import React from 'react'
import { Box, Button, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwittertIcon from '@mui/icons-material/Twitter';

import Banner from '../../components/common/Banner'
const Details_banner = require('../../access/images/image/about/findDealer.jpg')
const Details_about = require('../../access/images/image/about/dealerDetail-about.jpg')

const dataDetails = [
  {
    icon: <LocationOnIcon sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Location',
    sub1: '123 Hai Ba Trung, Q3, HCM',
    sub2: '45/5 Hoan Kiem, HN',
  },
  {
    icon: <PhoneIcon sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Contact Number',
    sub1: '+84 999955555',
    sub2: '+84 987654321',
  },
  {
    icon: <MailIcon sx={{width: '60px', height: '60px', m: '0 auto'}} />,
    title: 'Mail Address',
    sub1: 'contact.dealer@example.com',
    sub2: 'servicecenter@domain.com',
  },
]

const DealerDetails = () => {
  return (
    <Box p={8}>
      <Banner 
        img={Details_banner}
        title= 'Dealer Details'
        path={[{
          path: '/about',
          pathParent: 'About'
        }]}
      />
      <Container>
        <Grid container spacing={3} p={5}>
          <Grid item xs={6}>
            <img src={Details_about} alt='dealer details' 
              style={{width: '100%', height: '300px'}}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4' pl={3} fontWeight={600}>
              Mangattan Car Club
            </Typography>
            <Typography p={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cumque nostrum ullam voluptate, voluptatum, aliquam perspiciatis rem quo sapiente tempora modi sequi dolores? Saepe odit, necessitatibus molestiae harum deserunt ipsum.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color='success' />
                </ListItemIcon>
                <ListItemText primary='Service and repairs completed with genuine parts and accessories.' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color='success' />
                </ListItemIcon>
                <ListItemText primary='Service beys that feature modern diagnostic equipment tools.' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color='success' />
                </ListItemIcon>
                <ListItemText primary='Factory trained service technicians that know your vehicle best for you.' />
              </ListItem>
            </List>
            <Box sx={{p: 3, display: 'flex', flexDirection: 'row', gap: 3}}>
              <Button variant='contained' color='warning'>Visit website</Button>
              <Button variant='outlined' color='warning'>Request quote</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} pt={10}>
          {dataDetails.map((data, index) => (
          <Grid item xs={3} 
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
          <Grid item xs={3}
            sx={{display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            }}>
              <SocialDistanceIcon sx={{width: '60px', height: '60px', m: '0 auto'}} />
              <Typography variant='h5' p={3} fontWeight={600}>Social Profiles</Typography>
              <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center'}}>
                <IconButton><LinkedInIcon color='secondary' /></IconButton>
                <IconButton><FacebookIcon color='primary' /></IconButton>
                <IconButton><PinterestIcon color='error' /></IconButton>
                <IconButton><TwittertIcon color='primary'/></IconButton>
              </Box>
          </Grid>
        </Grid>
        <Typography align='center' pt={20} pb={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt voluptate, ratione perspiciatis autem minima vero aliquam illum eveniet laborum numquam possimus repudiandae molestiae eum! Quia repellat illo voluptatem cum!
      </Typography>
      <Grid container spacing={3} pb={5}>
        <Grid item xs={3}>
          <Typography align='center' variant='h2' fontWeight={600} color='orange'>2,543+</Typography>
          <Typography align='center' variant='h6' fontWeight={500}>YACHT FOR SALE</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align='center' variant='h2' fontWeight={600} color='orange'>500+</Typography>
          <Typography align='center' variant='h6' fontWeight={500}>GLOBAL CUSTOMERS</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align='center' variant='h2' fontWeight={600} color='orange'>30+</Typography>
          <Typography align='center' variant='h6' fontWeight={500}>SERVICE CENTER</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align='center' variant='h2' fontWeight={600} color='orange'>203+</Typography>
          <Typography align='center' variant='h6' fontWeight={500}>EMOLYEES</Typography>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default DealerDetails