import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import ThemeSwitcher from './../theme-switcher';

const Header = ({ activePage }) => {

    const routes = {
        home: "home",
        portfolio: "portfolio",
        uses: "uses",
        now: "now",
        blog: "blog",
    }

    const addActiveClass = (page) => {
        const activeClass = 'active';
        if (activePage === page) {
            return `${activeClass}`;
        }
        return "";
    };

    return (
        <header className="navbar  navbar-expand-lg fixed-top">
            <div className="container">
                <div className="row mx-0 w-100 justify-content-end">
                    <div className="col-12 col-md-12 col-xl-9 px-0">
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={`nav-item ${addActiveClass(routes.home)}`.trim()}>
                                    <Link className="nav-link" to="/">/{routes.home}</Link>
                                </li>
                                <li className={`nav-item ${addActiveClass(routes.portfolio)}`.trim()}>
                                    <Link className="nav-link" to={'/' + routes.portfolio}>/{routes.portfolio}</Link>
                                </li>
                                <li className={`nav-item ${addActiveClass(routes.uses)}`.trim()}>
                                    <Link className="nav-link" to={'/' + routes.uses}>/{routes.uses}</Link>
                                </li>
                                <li className={`nav-item ${addActiveClass(routes.now)}`.trim()}>
                                    <Link className="nav-link" to={'/' + routes.now}>/{routes.now}</Link>
                                </li>
                                <li className={`nav-item ${addActiveClass(routes.blog)}`.trim()}>
                                    <Link className="nav-link" to={'/' + routes.blog}>/{routes.blog}</Link>
                                </li>
                            </ul>
                            <ThemeSwitcher></ThemeSwitcher>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    activePage: PropTypes.string.isRequired,
}




export default Header;
