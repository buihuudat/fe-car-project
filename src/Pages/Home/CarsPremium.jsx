import {
  Box,
  Divider,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import GradientIcon from "@mui/icons-material/Gradient";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CardRender = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="/car">
        <CardMedia
          component="img"
          height="140"
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db95bcf2-00e9-4b0f-883e-fc841c545363/decq64l-c4824949-18d7-42a6-a94e-a698e5fcc90f.jpg/v1/fill/w_470,h_250,q_70,strp/winterdream_by_gunzfree_decq64l-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgxIiwicGF0aCI6IlwvZlwvZGI5NWJjZjItMDBlOS00YjBmLTg4M2UtZmM4NDFjNTQ1MzYzXC9kZWNxNjRsLWM0ODI0OTQ5LTE4ZDctNDJhNi1hOTRlLWE2OThlNWZjYzkwZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CPLZBJuNp9wNZEPQbvZSKbC0pZZTuhzzbmtgRFoLGnU"
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              color={"orange"}
              gutterBottom
              variant="h5"
              component="div"
            >
              1000 vnd
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              Build Year:
            </Typography>
            <Typography>2001</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Chip icon={<TireRepairIcon />} label="2500" />
          <Chip icon={<GradientIcon />} label="Manual" />
          <Chip icon={<LocalGasStationIcon />} label="20/24" />
        </Box>
      </CardActions>
    </Card>
  );
};

const CarsPremium = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} align="center" p={3}>
        Latest Premium Cars
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <CardRender />
        </Grid>
        <Grid xs={4}>
          <CardRender />
        </Grid>
        <Grid xs={4}>
          <CardRender />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarsPremium;
