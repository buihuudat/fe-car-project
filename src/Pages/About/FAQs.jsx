import {
  Box,
  Button,
  Collapse,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Banner from "../../components/common/Banner";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const dataContent = [
  {
    Q: "When do I get charged for a ride?",
    A:
      "Working with over 900 companies in 160 countries, we " +
      "can find the right car in the right place, at the right price. Working with over " +
      "900 companies in 160 countries, we can fint the right car in the right place, at the right price.",
  },
  {
    Q: "Can I pay fir an trip with cash?",
    A:
      "Working with over 900 companies in 160 countries, we " +
      "can find the right car in the right place, at the right price. Working with over " +
      "900 companies in 160 countries, we can fint the right car in the right place, at the right price.",
  },
  {
    Q: "Can I pay for an trip with credit card or online?",
    A:
      "Working with over 900 companies in 160 countries, we " +
      "can find the right car in the right place, at the right price. Working with over " +
      "900 companies in 160 countries, we can fint the right car in the right place, at the right price.",
  },
  {
    Q: "Can I get a ride from an airport?",
    A:
      "Working with over 900 companies in 160 countries, we " +
      "can find the right car in the right place, at the right price. Working with over " +
      "900 companies in 160 countries, we can fint the right car in the right place, at the right price.",
  },
  {
    Q: "How do I get a price estimate in the app?",
    A:
      "Working with over 900 companies in 160 countries, we " +
      "can find the right car in the right place, at the right price. Working with over " +
      "900 companies in 160 countries, we can fint the right car in the right place, at the right price.",
  },
];

const FAQs = () => {
  const [open, setOpen] = React.useState(true);
  const [indexOpen, setIndexOpen] = React.useState(0);
  const handleClick = (index) => {
    const curentIndex = indexOpen
    setIndexOpen(index)
    setOpen(curentIndex === index ? !open : true);
  };

  return (
    <Box>
      <Banner
        title={"FAQ's"}
        path={[
          {
            path: "/about",
            pathParent: "About",
          },
        ]}
      />
      <Container sx={{p: 8}}>
        <Typography variant="h4" fontWeight={600} align='center' p={3}>
        General Questions
        </Typography>
        {dataContent.map((data, index) => (
          <Paper key={index} square elevation={0} >
            <ListItemButton onClick={() => handleClick(index)} sx={{width:800, m: '0 auto'}}>
              <ListItemText primary={data.Q} />
              {indexOpen===index&&open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={indexOpen===index&&open} timeout="auto" unmountOnExit sx={{width:800, m: '0 auto'}}>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={data.A} />
                </ListItemButton>
              </List>
            </Collapse>
          </Paper>
        ))}
        <Typography variant="h4" fontWeight={600} align='center' pt={15}>
        Ask A Question
        </Typography>
        <Box
          component={'form'}
          p={3}
          sx={{
            display: 'flex',
            flexDirection: 'column', gap: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid container width={700} sx={{m: '0 auto'}}>
            <Grid item xs={6} p={2}>
              <TextField
                fullWidth
                label='Name'
                name='name'
              />
            </Grid>
            <Grid item xs={6} p={2}>
              <TextField
                fullWidth
                label='Phone'
                name='phone'
              />
            </Grid>
            <Grid item xs={6} p={2}>
              <TextField
                fullWidth
                label='Email'
                name='email'
              />
            </Grid>
            <Grid item xs={6} p={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                value={10}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} p={2}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              name='message'
            />
            </Grid>
          </Grid>
          <Button 
            type='submit'
            variant='outlined'
            sx={{width: 670, m: '0 auto'}}
          >Ask now</Button>
        </Box>
        <Typography align='center' p={3} pt={10}>
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
      </Container>
    </Box>
  );
};

export default FAQs;
