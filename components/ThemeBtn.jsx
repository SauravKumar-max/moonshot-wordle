import React, { useEffect, useState } from "react";
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "../utils/theme";
import { Icons } from "./Icons";

export default function ThemeBtn() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localStorageTheme = getThemeFromLocalStorage();
    if (localStorageTheme) {
      setThemeInLocalStorage(localStorageTheme);
      setTheme(localStorageTheme);
    } else {
      setThemeInLocalStorage("light");
      setTheme("light");
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
          <Icons name="light" className={"w-5 h-5 stroke-2"} />
        </button>
      ) : (
        <button type="button" onClick={darkThemeHandler}>
          <Icons name="dark" className={"w-5 h-5 stroke-2"} />
        </button>
      )}
    </div>
  );
}
