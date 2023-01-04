import React, {createContext, useState} from 'react';
import {colors} from '../color';
import typography from '../typography';
import {box} from '../BoxModel';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    box,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
