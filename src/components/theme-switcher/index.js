import React from "react";
import Style from "./theme-switcher.module.scss";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
const ThemeSwitcher = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) {
          return null;
        }
        return (
          <div className={Style.wrapper}>
            <input
              type="checkbox"
              className={Style.switch}
              id="switch"
              checked={theme === "light"}
              onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
            />
            <label
              htmlFor="switch"
              className={`switch-label ${Style.switchLabel}`}
            >
              <div className={Style.toggle}></div>
            </label>
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeSwitcher;
