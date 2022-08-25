import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import Banner from '../../components/common/Banner'
import CarComparison from '../Home/CarComparison'

const compareCard = require("../../access/images/image/about/compareCars.png");
const compareBanner = require('../../access/images/image/compare-banner.jpg')

const CompareCarPage = () => {
  return (
    <Box>
      <Banner
        img={compareBanner}
        title='Compare Cars'
        path={[{
          path: '/about',
          pathParent: 'About'
        }]}
      />
      <Container>
      <Typography variant="h4" fontWeight={600} p={3} align='center'>
        Compare Cars
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4} width={300}>
          <Card>
            <CardMedia component={"img"} image={compareCard} height={150} />
            <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography align="center" variant="h6" p={2}>
                Add Car 01
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} width={300}>
          <Card>
            <CardMedia component={"img"} image={compareCard} height={150} />
            <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography align="center" variant="h6" p={2}>
                Add Car 01
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} width={300}>
          <Card>
            <CardMedia component={"img"} image={compareCard} height={150} />
            <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography align="center" variant="h6" p={2}>
                Add Car 01
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <CarComparison />
    </Container>
    </Box>
  )
};

export default CompareCarPage;
