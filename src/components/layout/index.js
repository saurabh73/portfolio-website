/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Sidebar from "./../sidebar";
import Content from "./../content";
import Footer from "./../footer";
import Header from "./../header";
import "overlayscrollbars/css/OverlayScrollbars.css";
import OverlayScrollbars from "overlayscrollbars";
import OverlayMenu from "react-overlay-menu";
import PageMenu from "./../page-menu";
const Layout = ({ children, page }) => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    OverlayScrollbars(document.body, {
      nativeScrollbarsOverlaid: {
        initialize: false,
      },
      callbacks: {
        onInitialized: function () {
          this.scroll(0);
        },
        onOverflowChanged: function () {
          this.scroll(0);
        },
      },
    });
  });

  return (
    <>
      <Header
        activePage={page}
        menuStateActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}>
      </Header>
      <OverlayMenu open={isMenuActive}>
        <PageMenu activePage={page} isVertical={true}></PageMenu>
      </OverlayMenu>
      <main>
        <div className="container mx-0">
          <div className="row">
            <Sidebar></Sidebar>
            <Content>{children}</Content>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
};

Layout.defaultProps = {
  page: ``,
};

export default Layout;
