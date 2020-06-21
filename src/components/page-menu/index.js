import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
const PageMenu = ({ activePage, isVertical }) => {
  const routes = {
    home: "/",
    portfolio: "/portfolio",
    uses: "/uses",
    now: "/now",
    blog: "/blog",
  };

  const addActiveClass = page => {
    const activeClass = "active";
    if (activePage === page) {
      return `${activeClass}`;
    }
    return "";
  };

  return (
    <ul className={`page-menu nav ${isVertical ? "flex-column" : "flex-row"}`}>
      {Object.keys(routes).map(key => (
        <li className={`nav-item ${addActiveClass(key)}`.trim()} key={key}>
          <Link className="nav-link" to={routes[key]}>
            /{key}
          </Link>
        </li>
      ))}
    </ul>
  );
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
