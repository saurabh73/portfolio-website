/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./../sidebar";
import Content from "./../content";
import Footer from "./../footer";
import Header from "./../header";

const Layout = ({ children, page }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [theme, setTheme] = useState("");

  const updateTheme = (themeValue) => {
    console.log("From Layout " + themeValue);
    setTheme(themeValue);
    const classList = document.body.classList;
    classList.remove("theme-light");
    classList.remove("theme-dark");
    classList.add(themeValue);
    window.localStorage.setItem("theme", themeValue);
  };

  return (
    <>
      <Header activePage={page} setTheme={updateTheme}></Header>
      <main style={{ marginTop: "10rem", display: "flex", justifyContent: "center" }}>
        <div className="container mx-0">
          <div className="row">
            <Sidebar></Sidebar>
            <Content>{children}</Content>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
}

Layout.defaultProps = {
  page: ``,
}


export default Layout
