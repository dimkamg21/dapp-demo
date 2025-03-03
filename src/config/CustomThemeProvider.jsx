import React, { useState } from 'react'
import { ThemeProvider } from'@mui/material/styles';
import getTheme from './theme.js';

// Create our context
export const CustomThemeContext = React.createContext({
  currentTheme: 'light',
  setTheme: null,
})

const CustomThemeProvider = ({ children }) => {
  // 1) Read from localStorage, defaulting to 'normal' if no value is found
  const currentTheme = localStorage.getItem('appTheme') || 'light'
  const [themeName, _setThemeName] = useState(currentTheme)

  // 2) Our theme object
  const theme = getTheme(themeName)

  // 3) Wrap state setter to also store new theme in localStorage
  const setThemeName = (name) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  // 4) Provide currentTheme & setTheme to all children
  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
