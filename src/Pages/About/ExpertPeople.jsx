import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


const dataPeople = [
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Robert Brandon",
    duty: "CEO & Founder",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Fablo Escober",
    duty: "Head of Design",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Fablo Escober",
    duty: "CEO",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Albert Dominos",
    duty: "Founder",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Fablo Escober",
    duty: "Head of Design",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Robert Brandon",
    duty: "CEO & Founder",
    fb: 'https://facebook.com/1150694301',
    yt: 'https://youtube.com',
    tt: 'https://twitter.com',
    gg: 'https://google.com',
  },
];

const ExpertPeople = () => {
  const [show, setShow] = React.useState(undefined);
  const handleShow = (index) => {
    setShow(index)
  };
  return (
    <Container sx={{ p: "2rem 0" }}>
      <Typography p={3} align="center" variant="h4" fontWeight={600}>
        Expert People
      </Typography>
      <Grid container spacing={3}>
        {dataPeople.map((data, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ width: 245, height: 320 }} onMouseLeave={() => setShow(undefined)}>
              {show == index && <Box
                sx={{
                  width: 245,
                  height: 320,
                  zIndex: 2,
                  position: "absolute",
                  backdropFilter: "blur(50px)",
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'all 2s',
                  flexDirection: 'row',
                  gap: 2
                }}
              >
              <IconButton href={data.fb}>
                <FacebookIcon color='primary' /></IconButton>
              <IconButton href={data.yt}>
                <YouTubeIcon color='error' /></IconButton>
              <IconButton href={data.tt}>
                <TwitterIcon color='primary' /></IconButton>
              <IconButton href={data.gg}>
                <GoogleIcon color='secondary' /></IconButton>
              </Box>}
              <CardActionArea onMouseMove={() => handleShow(index)}>
                <CardMedia
                  component={"img"}
                  image={data.img}
                  height="200"
                  alt={data.name}
                />
                <CardContent>
                  <Typography
                    color={"orange"}
                    align="center"
                    p={2}
                    variant={"h5"}
                    fontWeight={600}
                  >
                    {data.name}
                  </Typography>
                  <Typography align="center">{data.duty}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExpertPeople;
