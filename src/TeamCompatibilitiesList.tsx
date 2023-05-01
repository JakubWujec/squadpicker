import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import { Compatibility } from "./types";
import { CompatibilityValue } from './enums';
interface Props {
  compatibilities: Compatibility[];
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
          {compatibilities.map(({ playerA, playerB, value }) => (
            <TableRow key={`${playerA.name}-${playerB.name}`}>
              <TableCell>{playerA.name}</TableCell>
              <TableCell>
                {value === CompatibilityValue.MustPlayTogether ? <LinkIcon /> : <LinkOffIcon />}
              </TableCell>
              <TableCell>{playerB.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamCompatibilitiesList;