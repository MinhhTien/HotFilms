import { useState, createContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
//import { dark, light } from '../theme';

const DarkModeContext = createContext({
  darkMode: true,
  toggleTheme: () => {},
  theme: createTheme({
    palette: {
      mode: 'light',
    },
  }),
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handle = () => {
    // return darkMode ? createTheme(dark) : createTheme(light)
    return darkMode
      ? createTheme({
          palette: {
            mode: 'dark',
          },
        })
      : createTheme({
          palette: {
            mode: 'light',
          },
        });
  };
  const theme = useMemo(
    handle,
    //() => ( darkMode ? createTheme(dark) : createTheme(light)),
    [darkMode]
  );

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeProvider, DarkModeContext };
