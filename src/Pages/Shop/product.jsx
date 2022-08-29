import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://smartdatawp.com/motodeal/classified/wp-content/uploads/sites/11/2019/01/Group-395-255x177.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography align='center' fontWeight={600} color='orange' variant="h5" component="div">
            100
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" fullWidth>
          <AddShoppingCartOutlinedIcon /> 
        </Button>
      </CardActions>
    </Card>
  );
}
