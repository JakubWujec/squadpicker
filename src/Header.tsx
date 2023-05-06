import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: "16px" }}>
        <Button component={Link} to="/" variant="contained" size="large">
          {t('players')}
        </Button>
        <Button component={Link} to="/teams" variant="contained" size="large">
          {t('teams')}
        </Button>
        <Button component={Link} to="/compatiblities" variant="contained" size="large">
          {t('compatibilities')}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
