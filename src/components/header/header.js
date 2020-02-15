import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <div className={style.themeLight}>
    <header className={style.header}>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
