import React from "react";
import { useTheme } from "../context/theme.context";
import { setThemeInLocalStorage } from "../utils/theme";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  function darkThemeHandler() {
    setTheme("dark");
    setThemeInLocalStorage("dark");
  }

  function lightThemeHandler() {
    setTheme("light");
    setThemeInLocalStorage("light");
  }

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={lightThemeHandler}>Light</button>
      ) : (
        <button onClick={darkThemeHandler}>Dark</button>
      )}
    </div>
  );
}
