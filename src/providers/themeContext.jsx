import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        setIsDark,
        isDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const { isDark,setIsDark } = useContext(ThemeContext);
  return { isDark,setIsDark };
}