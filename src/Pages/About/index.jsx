import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import Banner from '../../components/common/Banner'
import AboutBanner from './AboutBanner';
import ExpertPeople from './ExpertPeople';
import Feedback from './Feedback';

const imgContent = require('../../access/images/image/carAbout.png')

const About = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', pt: 3 }}>
      <Banner 
        img='https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        title='About'
        path={[{
          path: '/',
          pathParent: 'Home'
        }]}
      />

      <Container>
        <Grid p={5} container spacing={5}>
          <Grid item xs={6}>
            <Typography variant={'h4'} fontWeight={600}>
              World largest <span style={{color:'orange'}}>automotive</span> marketplace.
            </Typography>
            <Box sx={{ width: '100%', minHeight: '350px', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange}  variant="fullWidth">
                    <Tab label="SERVICES" value="1" />
                    <Tab label="OUR MISSION" value="2" />
                    <Tab label="OUR GOAL" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum non atque id iusto soluta perferendis quo, ipsum perspiciatis! Similique, delectus adipisci laudantium aperiam pariatur iure minima recusandae optio rem culpa.
                  </Typography>
                  <Grid container spacing={3} pt={3}>
                    <Grid item xs={6}>
                      <Box sx={{display: 'flex', gap: 1}}>
                        <DirectionsCarFilledOutlinedIcon 
                        color='warning'
                        sx={{
                          width: '50px',
                          height: '50px',
                        }} />
                        <Box>
                          <Typography variant={'h5'} fontWeight={600}>
                            Best Collection
                          </Typography>
                          <Typography variant='subtitle2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{display: 'flex', gap: 1}}>
                        <PriceCheckOutlinedIcon
                        color='warning'
                        sx={{
                          width: '50px',
                          height: '50px',
                        }} />
                        <Box>
                          <Typography variant={'h5'} fontWeight={600}>
                            Best Pricing
                          </Typography>
                          <Typography variant='subtitle2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="2">
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, expedita. Voluptas aliquam asperiores, quis laborum temporibus suscipit labore laboriosam est et maxime porro neque molestias veniam! Cupiditate perferendis quis nobis?
                  </Typography>
                </TabPanel>
                <TabPanel value="3">
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa veniam voluptate tempore quibusdam amet molestias assumenda excepturi. Quis dolorem dolores incidunt eius doloribus odio, laboriosam tenetur dicta velit a. 
                  </Typography>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src={imgContent} alt="about car" />
          </Grid>
        </Grid>
      </Container>
      <AboutBanner />
      <ExpertPeople />
      <Container>
      <Typography align='center' p={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt voluptate, ratione perspiciatis autem minima vero aliquam illum eveniet laborum numquam possimus repudiandae molestiae eum! Quia repellat illo voluptatem cum!
      </Typography>
      <Grid container spacing={3}>
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
      <Feedback />
      </Container>
    </Box>
  )
}

export default About