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
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';
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

  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
     OverlayScrollbars(document.body, {
      nativeScrollbarsOverlaid: {
        initialize: false
      }, 
      callbacks: {
        onInitialized: function() {
          this.scroll(0);
        },
        onScrollStart: ($event) =>{
          setHasScrolled($event.target.scrollTop > 0);
        }, 
        onScrollStop: ($event) => {
          setHasScrolled($event.target.scrollTop > 0);
        },
        onOverflowChanged: function() { // use
          this.scroll(0);
        }
      }
    });
  
  }, [setTheme, setHasScrolled]);

  const updateTheme = (themeValue) => {
    // console.log("From Layout " + themeValue);
    const classList = document.body.classList;
    classList.remove("theme-light");
    classList.remove("theme-dark");
    let currentTheme = themeValue || "theme-dark";
    localStorage.setItem("theme", currentTheme);
    classList.add(currentTheme);
    setTheme(currentTheme);
  };

  return (
    <>
      <Header activePage={page} setTheme={updateTheme}></Header>
        <main style={{ marginTop: "10rem", display: "flex", justifyContent: "center" }}>

          <div className="container mx-0">
            <div className="row">
              <Sidebar hasScrolled={hasScrolled}></Sidebar>
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
