import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Style from './theme-switcher.module.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const ThemeSwitcher = ({ }) => {



  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={Style.wrapper} >
          <input type="checkbox" className={Style.switch} id="switch"
            onChange={e => toggleTheme(e.target.checked ? 'theme-dark' : 'theme-light')}
            checked={theme === 'theme-dark'} />
          <label htmlFor="switch" className={Style.switchLabel}>
            <div className={Style.toggle}></div>
          </label>
        </div>
      )}
    </ThemeToggler>
  );
}

export default ThemeSwitcher;