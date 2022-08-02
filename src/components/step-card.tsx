import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { Step } from '../puzzles';

export const StepCard = ({ step }: {step: Step }) => {
  const imgUrl = `https://cubiclealgdbimagegen.azurewebsites.net/generator?${step.visualCubeParams}`
  return (
    <Card sx={{ maxWidth: 200, textAlign: 'center', m: 2 }}>
      <CardActionArea>
        <Link to={step.slug} style={{ textDecoration: "none", color: "inherit" }}>
          <CardContent sx={{ p: 0, '&:last-child': { p: 0 }}}>
            <img src={imgUrl} height={200} width={200} />
            <Typography variant="h5" component="div" p="10">
              {step.displayName}
            </Typography>
          </CardContent>     
        </Link>
      </CardActionArea>
    </Card>
  );
}
