import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { resources } from "../../i18n/config";

const availableLanguages = Object.keys(resources)

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", gap: "16px" }}>
        <Button component={Link} to="/squadpicker/" variant="contained" size="large">
          {t('players')}
        </Button>
        <Button component={Link} to="/squadpicker/teams" variant="contained" size="large">
          {t('teams')}
        </Button>
        <Button component={Link} to="/squadpicker/compatiblities" variant="contained" size="large">
          {t('compatibilities')}
        </Button>
        <span style={{ marginLeft: "auto" }}>
          <LanguageSelector languages={availableLanguages} selectedLanguage={`${i18n.resolvedLanguage}`} onChange={changeLanguage} />
        </span>

      </Toolbar>
    </AppBar>
  );
};



export default Header;
