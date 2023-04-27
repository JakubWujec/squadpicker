import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={Link} to="/">
          Team Creator
        </Typography>
        <Button component={Link} to="/teams">Teams</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
