import React, {createContext} from "react";
import { colors, colors, colors } from "../color";
import typography from "../typography";
import boxModel from "../BoxModel";



export const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const isLightTheme = true

    const theme = {
        colors : isLightTheme ? colors.light : colors.dark,
        typography,
        boxModel,
    };

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider