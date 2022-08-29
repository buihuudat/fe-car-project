import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/common/Banner";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Sliser from "./slider";
import Search from "./search";
import Product from "./product";
const our_shop_banner = require("../../access/images/image/shop/our_shop_banner.jpg");

const Products = () => (
  <Box pt={3}>
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <img
        alt={"img"}
        src="https://smartdatawp.com/motodeal/classified/wp-content/uploads/sites/11/2019/01/Group-384-1-255x177.jpg"
        style={{ height: "60px", width: "100px" }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography fontWeight={600}>Product name</Typography>
        <Typography fontWeight={600} color="orange">
          Product price
        </Typography>
      </Box>
    </Box>
  </Box>
);

const SortProduct = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const Shop = () => {
  return (
    <Box>
      <Banner
        img={our_shop_banner}
        title="Our Shop"
        path={[
          {
            path: "/our_shop",
            pathParent: "Home",
          },
        ]}
      />
      <Container p={5}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Box>
              <Search />
              <Typography variant="h5" fontWeight={600}>
                Filter by price
              </Typography>
              <Sliser />
              <Box m={3} />
              <Typography variant="h5" fontWeight={600}>
                Product
              </Typography>
              <Products />
              <Products />
              <Products />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2">
                Showing 1-12 of 17 results
              </Typography>
              <SortProduct />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Product />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shop;
