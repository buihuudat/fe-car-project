import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CollectionCard from './Card';

const tabLabel = [
  { name: 'SUV' },
  { name: 'SEDAN' },
  { name: 'ELECTRIC' },
  { name: 'HYBRID' },
  { name: 'LUXURY' },
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Collection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', pt: 3 }}>
      <Typography align='center' variant='h4' p={1} fontWeight={500}>Compare Cars</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} variant='fullWidth' onChange={handleChange} aria-label="basic tabs example">
          {tabLabel.map(({name}, index) => (
            <Tab label={name} key={index} {...a11yProps(index)} />
          ))} 
        </Tabs>
      </Box>
      {tabLabel.map(({name}, index) => (
      <TabPanel key={index} value={value} index={index}>
        Item One
      </TabPanel>
      ))}
      <CollectionCard />
    </Box>
  );
}
