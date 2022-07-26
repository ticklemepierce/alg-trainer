import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export const PuzzleCard = ({ puzzle, title, link, mask = undefined }) => {
  let imgUrl = `http://cube.rider.biz/visualcube.php?fmt=svg&size=200&pzl=${puzzle}`;
  if (!!mask && mask !== '') {
    imgUrl += mask;
  }
  return (
    <Card sx={{ maxWidth: 200, textAlign: 'center', m: 2 }}>
      <CardActionArea>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <CardContent sx={{ p: 0, '&:last-child': { p: 0 }}}>
            <img src={imgUrl} />
            <Typography variant="h5" component="div" p="10">
              {title}
            </Typography>
          </CardContent>     
        </Link>
      </CardActionArea>
    </Card>
  );
}
