import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SidebarContent from "./../sidebar/content";
const PageMenu = ({ activePage, isVertical }) => {
  const routes = {
    home: "/",
    portfolio: "/portfolio",
    uses: "/uses",
    blog: "/blog",
  };

  const addActiveClass = page => {
    const activeClass = "active";
    if (activePage === page) {
      return `${activeClass}`;
    }
    return "";
  };

  const menu = <ul className={`page-menu nav ${isVertical ? "nav-mobile" : "flex-row"}`}>
    {Object.keys(routes).map(key => (
      <li className={`nav-item ${addActiveClass(key)}`.trim()} key={key}>
        <AniLink cover className="nav-link" to={routes[key]} duration={1} bg="#000099">
          /{key}
        </AniLink>
      </li>
    ))}
  </ul>;

  if (isVertical) {
    return (
      <SidebarContent>
        {menu}
      </SidebarContent>
    );
  } else {
    return menu;
  }
};

PageMenu.propTypes = {
  activePage: PropTypes.string.isRequired,
  isVertical: PropTypes.bool,
};

PageMenu.defaultProps = {
  activePage: "home",
  isVertical: false,
};

export default PageMenu;
