import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = ({img, title, path}) => {
  return (
    <Box sx={{
      width: '100%',
      height: '500px',
      background: 'url(https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      flexDirection: 'column'
    }}>
      <Typography variant='h1' fontWeight={700}>
        {title}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}>
        {path.map(({path, pathParent}, index) => (
        <Link 
          key={index}
          underline="hover" 
          color="inherit" href={path}>
          {pathParent}
        </Link>
        ))}
        <Typography>{title}</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default Banner