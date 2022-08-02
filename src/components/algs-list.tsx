import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { useOutletContext, useNavigate } from "react-router-dom";
import { IAlgs, Step, Alg } from "../puzzles";

// TODO move to puzzles (which should be renamed to types)
interface IAlgsListContext {
  algs: IAlgs,
  step: Step
}

export const AlgsList = () => {
  const {algs, step} = useOutletContext<IAlgsListContext>();
  const navigate = useNavigate();

  const startTrainer = () => navigate('trainer');

  const getImage = (alg: Alg) => 
    `https://cubiclealgdbimagegen.azurewebsites.net/generator?${step.visualCubeParams}&case=${alg}`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>      
      <Button variant="contained" sx={{my: 4, mx: 'auto'}} size="large" onClick={startTrainer}>
        Start Trainer
      </Button>
      <TableContainer component={Paper} sx={{ maxWidth: 650, m: '0 auto' }}>
        <Table  aria-label="simple table">
          <TableBody>
            {Object.keys(algs!).map((alg) => (
              <TableRow
                key={alg}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={getImage(alg)} height={75} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {alg}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
    
