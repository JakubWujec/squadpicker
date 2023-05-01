import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { Player } from "./types";
interface Props {
  compatibilities: [Player, Player][];
}
const TeamCompatibilitiesList = ({ compatibilities }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>LINK</TableCell>
            <TableCell>Player</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compatibilities.map(([playerA, playerB]) => (
            <TableRow key={`${playerA.name}-${playerB.name}`}>
              <TableCell>{playerA.name}</TableCell>
              <TableCell><LinkIcon /></TableCell>
              <TableCell>{playerB.name}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamCompatibilitiesList;