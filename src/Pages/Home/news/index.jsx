import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Post from './post'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const News = () => {
  
  return (
    <Box sx={{ pt: 8 }}>
      <Typography variant='h4' fontWeight={600} align='center' p={3}>Latest News</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Post />
        </Grid>
        <Grid item xs={4}>
            <Post />
        </Grid>
        <Grid item xs={4}>
            <Post />
        </Grid>
        <Grid item xs={4}>
            <Post />
        </Grid>
        <Grid item xs={4}>
            <Post />
        </Grid>
      </Grid>
    </Box>
  )
}

export default News