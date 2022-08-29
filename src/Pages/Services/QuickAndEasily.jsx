import { Button, Container, Typography,Box,
  Divider,
  Grid, } from "@mui/material";
import React from "react";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";


const dataContent2 = [
  {
    icon: <LocalShippingOutlinedIcon color="warning" sx={{width: '60px', height: '60px'}} />,
    title: "FREE DELIVERY",
    sub: "To entire Country",
  },
  {
    icon: <HandymanOutlinedIcon color="warning" sx={{width: '60px', height: '60px'}} />,
    title: "FREE SERVICING",
    sub: "More than 2 years",
  },
  {
    icon: <LocalAtmOutlinedIcon color="warning" sx={{width: '60px', height: '60px'}} />,
    title: "SECURE PAYMENT",
    sub: "Credit Card Payment",
  },
  {
    icon: <CardGiftcardOutlinedIcon color="warning" sx={{width: '60px', height: '60px'}} />,
    title: "FREE GIFTS",
    sub: "In every Purchase",
  },
];
const QuickAndEasily = ({text}) => {
  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: 5,
          p: 5
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Buy <span style={{ color: "orange" }}>{text} </span>
          Quick and Easily
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          Our service facility is indeprndently owned and operated providing
          full-service repair and maintenance services.
        </Typography>
        <Button sx={{width: 'max-content', m: '0 auto'}}
         variant='contained'
         size="large">find your car</Button>
        <Container>
          <Divider />
          <Grid container spacing={2} p={3}>
              {dataContent2.map((data, index) => (
            <Grid item xs={3} key={index}>
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {data.icon}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography align="left" variant="h6" fontWeight={600}>{data.title}</Typography>
                  <Typography align="left" variant="body2">{data.sub}</Typography>
                </Box>
              </Box>
            </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
  );
};

export default QuickAndEasily;
