import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Style from "./sidebar.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { isMobile } from "react-device-detect";
const Sidebar = ({ hasScrolled }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const data = useStaticQuery(graphql`{
    sanityProfileSummary {
      id
      bio
      name
      socialLinks {
        handle
        link
        domain
      }
      jobTitle
      image {
        asset {
          fixed(height: 180, width: 180) {
            ...GatsbySanityImageFixed
          }
        }
      }
      contactQR {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      resume {
        asset {
          url
        }
      }
    }
  }`);

  const handleResize = () => {
    setWidth(ref.current.offsetWidth - 30);
  };

  useEffect(() => {
    console.log(data);
    handleResize();
    if (ref.current) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return (
    <aside className="col-12 col-md-12 col-xl-3" ref={ref}>
      <div
        className={`${Style.sidebar} box shadow flip-right mb-4`}
        style={{
          width: hasScrolled ? `${width}px` : "100%",
          position: hasScrolled && !isMobile ? "fixed" : "relative",
        }}
      >
        <div className="text-center">
          <Img
            fixed={data.sanityProfileSummary.image.asset.fixed}
            className={Style.image}
          />
          <h3 className="text-primary">{data.sanityProfileSummary.name}</h3>
          <p>{data.sanityProfileSummary.jobTitle}</p>
          <p className="text-left">
            {data.sanityProfileSummary.bio}
          </p>
        </div>

        <div className="contact-content my-3">
          <div className="row mx-0 justify-content-between">
            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
              <i class="fab fa-lg fa-github text-dark"></i>
            </div>
            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
              <i class="fab fa-lg fa-github text-dark"></i>
            </div>
            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
              <i class="fab fa-lg fa-github text-dark"></i>
            </div>
            <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
              <i class="fab fa-lg fa-github text-dark"></i>
            </div>

          </div>
        </div>

        <div className="qr-section my-3 d-none d-sm-block">
          <p className="font-weight-bold mb-0">Import Contact</p>
          <Img fluid={data.sanityProfileSummary.contactQR.asset.fluid} />
        </div>

        <div className="resume-section mt-3">
          <a target="_blank" href={data.sanityProfileSummary.resume.asset.url} className="btn btn-primary btn-block py-3 box-border flip-right" download={`saurabh-dutta-resume-${new Date().toISOString().split('T')[0]}`}>
            Download Resume
          </a>
        </div>
      </div>
    </aside >
  );
};

Sidebar.propTypes = {
  hasScrolled: PropTypes.bool.isRequired,
};

export default Sidebar;
