/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./../sidebar";
import Content from "./../content";
import SEO from "./../seo";
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <Sidebar></Sidebar>
            <Content>{children}</Content>
          </div>
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
     {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.propTypes = {
  siteTitle: PropTypes.string,
}

Layout.defaultProps = {
  siteTitle: ``,
}


export default Layout
