import { createContext, useContext, useEffect, useState } from "react";
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "../utils/theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localStorageTheme = getThemeFromLocalStorage();
    if (localStorageTheme) {
      setThemeInLocalStorage(localStorageTheme);
      setTheme(localStorageTheme);
    } else {
      setThemeInLocalStorage("dark");
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
