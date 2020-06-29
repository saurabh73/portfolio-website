import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Style from "./sidebar.module.scss";
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import FileDownloader from "./../file-downloader";

const SidebarContent = ({ children }) => {
  const [showQrCode, setShowQrCode] = useState(false);
  const toggleQrCode = () => {
    setShowQrCode(!showQrCode);
  }
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
      email
      image {
        asset {
          fixed(height: 180, width: 180) {
            ...GatsbySanityImageFixed
          }
        }
      }
      contactQR {
        asset {
          fixed(height: 180, width: 180) {
            ...GatsbySanityImageFixed
          }
        }
      }
      resume {
        asset {
          id
          url
          originalFilename
        }
      }
    }
  }`);

  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <div className="text-center">
        <div className={`${Style.image} image-wrapper`}>
          <Img
            fixed={data.sanityProfileSummary.image.asset.fixed}
            className="image"
          />
          <Img
            fixed={data.sanityProfileSummary.contactQR.asset.fixed}
            className="image-hover" style={{ opacity: showQrCode ? 1 : 0 }}
          />
        </div>

        <h3 className="text-primary">{data.sanityProfileSummary.name}</h3>
        <p>{data.sanityProfileSummary.jobTitle}</p>
        <p>{data.sanityProfileSummary.email}</p>
      </div>

      <>{children}</>

      <div className="contact-content my-3">
        <div className="row mx-0 justify-content-between">
          <div className="d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
            <i className="fab fa-lg fa-github text-light"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
            <i className="fab fa-lg fa-twitter text-light"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
            <i className="fab fa-lg fa-linkedin text-light"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ height: 32, width: 32 }}>
            <i className="fab fa-lg fa-dev text-light"></i>
          </div>
          <div role="button" tabIndex={0}
            className="d-flex justify-content-center align-items-center"
            style={{ height: 32, width: 32 }}
            onMouseEnter={() => setShowQrCode(true)}
            onMouseLeave={() => setShowQrCode(false)}
            onClick={() => toggleQrCode()}
            onKeyPress={() => toggleQrCode()}>
            <i className="fas fa-lg fa-qrcode text-light"></i>
          </div>
        </div>
      </div>
      <div className="resume-section mt-3">
        <FileDownloader
          fileName={`${data.sanityProfileSummary.resume.asset.originalFilename.replace(".pdf", "")}-${new Date().toISOString().split('T')[0]}.pdf`}
          classList={['btn', 'btn-primary', 'btn-block', 'py-3', 'box-border', 'flip-right']}
          link={data.sanityProfileSummary.resume.asset.url}
          title={"Download Resume"}
        ></FileDownloader>
      </div>
    </>
  );
};

SidebarContent.propTypes = {
  children: PropTypes.node,
};

export default SidebarContent;