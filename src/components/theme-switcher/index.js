import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Style from './theme-switcher.module.scss';

const ThemeSwitcher = ({setTheme}) => {
    const [toggleState, setToggleState] = useState(false);

    useEffect(() =>{
        const themeValue = window.localStorage.getItem('theme') === 'theme-light';
        // console.log(themeValue);
        setTheme(themeValue ? "theme-light" : "theme-dark");
        setToggleState(!themeValue)
    }, [setTheme]);

    const handleClick = () => {
        if (toggleState) {
            setTheme("theme-light");
        } else {
            setTheme("theme-dark");
        }
        setToggleState(!toggleState);
    }


    return (
        <div className={Style.wrapper} >
            <input type="checkbox" className={Style.switch} id="switch" onChange={handleClick} checked={toggleState} />
            <label htmlFor="switch" className={Style.switchLabel}>
                <div className={Style.toggle}></div>
            </label>
        </div>
    );
}

ThemeSwitcher.propTypes = {
    setTheme: PropTypes.func.isRequired
}

export default ThemeSwitcher;