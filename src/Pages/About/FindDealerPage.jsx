import React from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import Banner from "../../components/common/Banner";
import { Grid } from "@mui/material";
import moment from 'moment'
import { useState } from "react";

const findDealer = require("../../access/images/image/about/findDealer.jpg");
const days = [
  {name: 'Monday', time: '8h - 17h'},
  {name: 'Tuesday', time: '8h - 17h'},
  {name: 'Wednesday', time: '8h - 17h'},
  {name: 'Thursday', time: '8h - 17h'},
  {name: 'Friday', time: '8h - 17h'},
  {name: 'Saturday', time: '8h - 17h'},
  {name: 'Sunday', time: '7h - 18h'},
]
const FindDealerPage = () => {
  const dayOfW = moment(new Date()).format('e')
  const [selected, setSelected] = useState(dayOfW)

  return (
    <Box>
      <Banner
        img={findDealer}
        title="Find Dealers"
        path={[
          {
            path: "/about",
            pathParent: "About",
          },
        ]}
      />
      <Grid container>
        <Grid item xs={4}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              p: 3
            }}
          >
            <Typography p={3} variant="h4" fontWeight={600}>
              Location name
            </Typography>
            <Typography p={2} variant="h6">
              Location
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center'}}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Day</InputLabel>
            <Select
              size='small'
              onChange={e => setSelected(e.target.value)}
              defaultValue={dayOfW}
              autoWidth
              label="Age"
            >
              {days.map((day, index) => (
                <MenuItem key={index} value={index}>
                  {index === parseInt(dayOfW) ? '(Today) ' + day.name : day.name}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
            <Typography>
              {days[selected].time}
            </Typography>
            </Box>
            <Box sx={{display: 'flex', p: 4, flexDirection: 'row', gap: 4, alignItems: 'center'}}>
              <Button variant="contained" color='warning'>Deaker details</Button>
              <Button variant='outlined' color='warning'>Request quote</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7837.578313215893!2d106.68473512281001!3d10.827441151213312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1661435098076!5m2!1svi!2s"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindDealerPage;
