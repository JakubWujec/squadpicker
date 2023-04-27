import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";


const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: "16px" }}>
        <Button component={Link} to="/" variant="contained" size="large">
          Players
        </Button>
        <Button component={Link} to="/teams" variant="contained" size="large">
          Teams
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
