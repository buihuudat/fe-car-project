import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { NestedMenuItem } from "mui-nested-menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

const logo = require("../../access/images/image/logo.png");

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = React.useState("");
  const open = Boolean(anchorEl);

  const [scroll, setScroll] = React.useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setScroll(true) : setScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleClick = (e) => {
    setName(e.target.textContent.toLowerCase());
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  return (
    <Box flexGrow={1}>
      <AppBar position="fixed" sx={{ height: "max-content" }}>
        <Container>
          <Box
            sx={scroll? {display: 'none'}:{
              p: "1rem 0",
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <MenuItem>
              <AccessTimeIcon />
              <Typography>Monday-Saturday 7:00AM - 6:00PM</Typography>
            </MenuItem>
            <MenuItem>
              <LocationOnIcon />
              <Typography>143 Nguyen Du Ward 7, Go Vap, HCM</Typography>
            </MenuItem>
            <Button color="inherit" variant="outlined">
              <PhoneIcon />
              0987654321
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              p: "1.1rem 0",
            }}
            color="inherit"
          >
            {/* logo */}
            <Box
              sx={{ display: "flex", color: "inherit", textDecoration: "none" }}
              component={Link}
              to="/"
            >
              <Avatar src={logo} alt="logo" sx={{ width: 40, height: 40 }} />
              <Typography variant="h4" fontWeight={600}>
                otoDeal
              </Typography>
            </Box>
            {/* nav link */}
            <Box>
              {/* home */}
              <Button component={Link} to="/" color="inherit">
                HOME
              </Button>
              {/* pages */}
              <Button
                color="inherit"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                PAGES
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={name === "pages" && open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem component={Link} to="/about" onClick={handleClose}>
                  About
                </MenuItem>
                <NestedMenuItem label="Compare" parentMenuOpen={open}>
                  <MenuItem
                    component={Link}
                    to="/compare_cars"
                    onClick={handleClose}
                  >
                    Compare Cars
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/compare_details"
                    onClick={handleClose}
                  >
                    Compare Details
                  </MenuItem>
                </NestedMenuItem>
                <NestedMenuItem label="Dealers" parentMenuOpen={open}>
                  <MenuItem
                    component={Link}
                    to="/find_dealers"
                    onClick={handleClose}
                  >
                    Find Dealers
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/dealers_details"
                    onClick={handleClose}
                  >
                    Dealers Details
                  </MenuItem>
                </NestedMenuItem>
                <MenuItem
                  component={Link}
                  to="/finance_calculator"
                  onClick={handleClose}
                >
                  Finance Calculator
                </MenuItem>
                <MenuItem component={Link} to="/FAQs" onClick={handleClose}>
                  FAQs
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/testimonials"
                  onClick={handleClose}
                >
                  Testimonials
                </MenuItem>
              </Menu>
              {/* services */}
              <Button
                color="inherit"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                SERVICES
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={name === "services" && open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem
                  component={Link}
                  to="/service_style1"
                  onClick={handleClose}
                >
                  Service Style 1
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/service_style2"
                  onClick={handleClose}
                >
                  Service Style 2
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/service_details"
                  onClick={handleClose}
                >
                  Service Details
                </MenuItem>
              </Menu>
              {/* shop */}
              <Button
                color="inherit"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                SHOP
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={name === "shop" && open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem component={Link} to="/our_shop" onClick={handleClose}>
                  Our Shop
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/classified_shop"
                  onClick={handleClose}
                >
                  Classified Shop
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/shop_list"
                  onClick={handleClose}
                >
                  Shop List
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/product_details1"
                  onClick={handleClose}
                >
                  Product Details 1
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/product_details2"
                  onClick={handleClose}
                >
                  Product Deatils 2
                </MenuItem>
              </Menu>
              {/* news */}
              <Button
                color="inherit"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                NEWS
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={name === "news" && open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem
                  component={Link}
                  to="/blog_list"
                  onClick={handleClose}
                >
                  Blog List
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/blog_grid"
                  onClick={handleClose}
                >
                  Blog Grid
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/blog_details"
                  onClick={handleClose}
                >
                  Blog Details
                </MenuItem>
              </Menu>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                CONTACT
              </Button>
            </Box>
            {/* cart */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Cart">
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingBagIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tooltip title="Search">
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Toolbar />
    </Box>
  );
};

export default Navbar;
