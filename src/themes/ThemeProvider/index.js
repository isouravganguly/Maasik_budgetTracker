import React, {createContext} from 'react';
import {colors} from '../color';
import typography from '../typography';
import {box} from '../BoxModel';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const isLightTheme = true;

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    box,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
