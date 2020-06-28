import React, { useState } from "react";
import PropTypes from "prop-types";

import ThemeSwitcher from "./../theme-switcher";
import Hamburger from "react-hamburgers";
import PageMenu from "./../page-menu";
const Header = ({ activePage, isMenuActive, setIsMenuActive }) => {
  const [menuStateActive, setMenuStateActive] = useState(isMenuActive);

  return (
    <header className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="row mx-0 w-100 justify-content-end">
          <div className="col-12 col-md-12 col-lg-8 col-xl-9 px-0">
            {/* Mobile Header */}
            <div className="only-mobile-flex justify-content-between">
              <Hamburger
                active={menuStateActive}
                type="squeeze"
                onClick={() => {
                  console.log(`Menu Clicked ${menuStateActive}`);
                  setMenuStateActive(!menuStateActive);
                  setIsMenuActive(!menuStateActive);
                }}
              />
              <span className="mobile-page-name">{`/${activePage}`}</span>
              {/* add empty span */}
              <span style={{ width: "50px" }}></span>
            </div>
            {/* Desktop Header */}
            <div
              className="except-mobile-flex collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              <PageMenu activePage={activePage}></PageMenu>
            </div>
            <ThemeSwitcher></ThemeSwitcher>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  isMenuActive: PropTypes.bool,
  setIsMenuActive: PropTypes.func,
};

Header.defaultProps = {
  isMenuActive: false,
  setIsMenuActive: () => {
    console.log("menu action");
  },
};

export default Header;
