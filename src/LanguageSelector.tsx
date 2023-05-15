import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';


type LanguageSelectorProps = {
  selectedLanguage: string,
  languages: string[],
  onChange: (language: string) => void
}

const LanguageSelector = ({ selectedLanguage, languages, onChange }: LanguageSelectorProps) => {

  function handleChange(event: SelectChangeEvent<string>) {
    onChange(event.target.value)
  }

  return (
    <FormControl>
      <Select
        id="language-select"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector