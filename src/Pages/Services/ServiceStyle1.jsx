import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActions,
} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import IronOutlinedIcon from "@mui/icons-material/IronOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import QuickAndEasily from './QuickAndEasily'
import Feedback from '../About/Feedback'
const service1 = require("../../access/images/image/services/style1.jpg");

const dataContent = [
  {
    icon: <DirectionsCarIcon />,
    title: "Body Work Repair",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <AccountTreeOutlinedIcon />,
    title: "Electronic Diagnostics",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <WorkspacesOutlinedIcon />,
    title: "Tyre Fitting",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <AirOutlinedIcon />,
    title: "Air Conditioning",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <CastleOutlinedIcon />,
    title: "Accident Repairs",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <FlipCameraAndroidOutlinedIcon />,
    title: "Paint Body and Parts",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <IronOutlinedIcon />,
    title: "Braking Repair",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
  {
    icon: <LanOutlinedIcon />,
    title: "Mobile Mechanic",
    img: service1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et, ipsa ullam at quos deserunt sapiente accusamus quaerat rem unde quam praesentium saepe autem natus quia atque vitae! Libero, aliquid!",
  },
];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ServiceStyle1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box pb={8}>
      <Container
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          p: 8,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {dataContent.map((data, index) => (
            <Tab
              key={index}
              icon={data.icon}
              iconPosition="start"
              label={data.title}
              {...a11yProps(index)}
              sx={{ width: "max-content", pr: 15 }}
            />
          ))}
        </Tabs>
        {dataContent.map((data, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Card>
              <CardMedia
                component={"img"}
                image={data.img}
                height={500}
                alt={data.title}
              />
              <CardContent p={3}>
                <Typography variant="h5" fontWeight={600} pt={3} pb={3}>
                  {data.title}
                </Typography>
                <Typography variant="body2">{data.content}</Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ ml: "auto" }}>
                  <ArrowRightAltIcon />
                </Button>
              </CardActions>
            </Card>
          </TabPanel>
        ))}
      </Container>
      <QuickAndEasily text={'Your Car'} />
      <Feedback />
    </Box>
  );
}
