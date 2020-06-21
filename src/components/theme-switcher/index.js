import React from 'react';
import Style from './theme-switcher.module.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const ThemeSwitcher = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div className={Style.wrapper} >
            <input type="checkbox" className={Style.switch} id="switch"
              checked={theme === 'theme-light'}
              onChange={e => toggleTheme(e.target.checked ? 'theme-light' : 'theme-dark')}
            />
            <label htmlFor="switch" className={`switch-label ${Style.switchLabel}`}>
              <div className={Style.toggle}></div>
            </label>
          </div>
        );
      }}
    </ThemeToggler>
  );
}

export default ThemeSwitcher;