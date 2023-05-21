import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Compatibility } from "../../types";
import { CompatibilityValue } from '../../enums';
interface Props {
  compatibilities: Compatibility[];
  onDelete: (compatibility: Compatibility) => void;
}
const TeamCompatibilitiesList = ({ compatibilities, onDelete }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>LINK</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>Action</TableCell>
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
              <TableCell>
                <IconButton onClick={() => onDelete({ playerA, playerB, value })}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamCompatibilitiesList;