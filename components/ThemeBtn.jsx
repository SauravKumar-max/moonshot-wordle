import React, { useEffect, useState } from "react";
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "../utils/theme";
import { Icons } from "./Icons";

export default function ThemeBtn() {
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
        <button type="button" onClick={lightThemeHandler}>
          <Icons name="light" className={"w-6 h-6 stroke-2"} />
        </button>
      ) : (
        <button type="button" onClick={darkThemeHandler}>
          <Icons name="dark" className={"w-6 h-6 stroke-2"} />
        </button>
      )}
    </div>
  );
}
