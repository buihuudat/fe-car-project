import { Avatar, Box, Button, ButtonGroup, Container, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const logo = require('../../access/images/image/logo.png')
const card1 = require('../../access/images/image/footer/card-1.png')
const card2 = require('../../access/images/image/footer/card-2.png')
const card3 = require('../../access/images/image/footer/card-3.png')
const card4 = require('../../access/images/image/footer/card-4.png')

const firstData = [
  {text: '143 Nguyen Du, Ward 7, Go Vap, HCM', icon: <LocationOnIcon />},
  {text: 'buihuudat.dev@gmail.com', icon: <MailIcon />},
  {text: '038 987 1053', icon: <PhoneIcon />},
]
const pageInfoData = [
  {text: 'About us'},
  {text: 'Compare Cars'},
  {text: 'Compare Details'},
  {text: 'Finance Calculator'},
  {text: 'Faq'},
]
const quickLinkData = [
  {text: 'Finance'},
  {text: 'Compare Vehicles'},
  {text: 'General FAQ'},
  {text: 'Testimonial'},
  {text: 'Admin Login'},
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Footer = () => {
  return (
    <Box mt={8} sx={{backgroundColor: 'action.hover', p: '3rem 0'}}>
      <Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Box>
          <img src={logo} alt='logo' style={{
            width: '100px'
          }} />
          <List>
            {firstData.map((data, index) => (
              <ListItem key={index}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography 
            color={'orange'}
            fontWeight={600}
            variant='h5'
            >Page Info</Typography>
          <List>
            {pageInfoData.map(({text}, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
        <Typography 
            color={'orange'}
            fontWeight={600}
            variant='h5'
            >Quick Link</Typography>
          <List>
            {quickLinkData.map(({text}, index) => (
                <ListItem key={index}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
        </Box>
        <Box sx={{display: 'flex', gap: 3, flexDirection: 'column', alignItems: 'start'}}>
          <Typography 
            color={'orange'}
            fontWeight={600}
            variant='h5'
            >Subcribe us
          </Typography>
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            {[
              <FacebookIcon color='primary' />,
              <YouTubeIcon color='error' />,
              <TwitterIcon color='primary' />,
              <GoogleIcon color='secondary' />
            ].map((icon, index) => (
              <IconButton size='large' key={index}>{icon}</IconButton>
            ))}
          </Box>
        </Box>
      </Box>
      <Paper sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        gap: 5
      }}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ad, corrupti debitis voluptatem at quasi! Ipsam ab quia fugiat deleniti, dolore optio repellat quas labore, minima, tenetur sapiente veniam qui.
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
          <img style={{width:'70px', height: '40px'}} src={card1} />
          <img style={{width:'70px', height: '40px'}} src={card2} />
          <img style={{width:'70px', height: '40px'}} src={card3} />
          <img style={{width:'70px', height: '40px'}} src={card4} />
        </Box>
      </Paper>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        pt: 3
      }}>
        <Typography>Copyright Reserved by <Link href='https://facebook.com/1150694301'>Bui Huu Dat</Link> 2022</Typography>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Term of use</Button>
          <Button>Privacy Environmental</Button>
          <Button>Policy</Button>
        </ButtonGroup>
      </Box>
      </Container>
    </Box>
  )
}

export default Footer