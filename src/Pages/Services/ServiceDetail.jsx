import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import Banner from "../../components/common/Banner";
import AboutBanner from "../About/AboutBanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import QuickAndEasily from "./QuickAndEasily";
const detail_banner = require("../../access/images/image/services/detail_banner.jpg");
const wheels = require("../../access/images/image/services/wheels.png");

const dataContent = [
  { text: "Emergency Brake Shoe Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Emergency Brake Shoe Replacement" },
  { text: "Emergency Brake Shoe Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Emergency Brake Shoe Replacement" },
  { text: "Emergency Brake Shoe Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Brake Pad Replacement" },
  { text: "Brake Rotors/Discs Replacement" },
  { text: "Emergency Brake Shoe Replacement" },
];

const ServiceDetail = () => {
  return (
    <Box>
      <Banner
        img={detail_banner}
        title="Services Details"
        path={[
          {
            path: "/services",
            pathParent: "Services",
          },
        ]}
      />
      <Typography p={3} variant="h4" fontWeight={600} align="center">
        Why choose us ?
      </Typography>
      <AboutBanner />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <img src={wheels} alt="wheels" style={{ height: "400px" }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight={600}>
              Changing car wheels with Abs Braking
            </Typography>
            <Typography pt={3} pb={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              atque corrupti ullam. Minima vitae aliquam nisi labore tenetur non
              voluptas atque provident reiciendis sunt! Nisi vitae eos illum
              quos. Corrupti.
            </Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              atque corrupti ullam. Minima vitae aliquam nisi labore tenetur non
              voluptas atque provident reiciendis sunt! Nisi vitae eos illum
              quos. Corrupti.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box>
        <Typography p={5} variant="h4" fontWeight={600} align="center">
          Why Choose Us
        </Typography>

        <Container>
          <Grid container spacing={1} pb={5}>
            {dataContent.map(({ text }, index) => (
              <Grid item xs={4} key={index}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>

          <QuickAndEasily text={'Tractor'} />
        </Container>
      </Box>
    </Box>
  );
};

export default ServiceDetail;
