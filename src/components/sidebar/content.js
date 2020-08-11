import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Style from "./sidebar.module.scss";
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import simpleIcons from 'simple-icons';
import Icon from './../icon';

const SidebarContent = ({ children }) => {
  const data = useStaticQuery(graphql`{
    sanityProfileSummary {
      id
      bio
      name
      socialLinks {
        domain
        handle
        link
        iconTitle
      }
      jobTitle
      email
      image {
        asset {
          fixed(height: 160, width: 160) {
            ...GatsbySanityImageFixed
          }
        }
      }
      contactQR {
        asset {
          fixed(height: 160, width: 160) {
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

  useEffect(() => { });
  return (
    <>
      <div className="text-center">
        <div className={`${Style.image} image-wrapper`}>
          <Img
            fixed={data.sanityProfileSummary.image.asset.fixed}
            className="image"
          />
        </div>
        <h3 className="text-primary">{data.sanityProfileSummary.name}</h3>
        <p>{data.sanityProfileSummary.jobTitle}</p>
        <a href={'mailto:' + data.sanityProfileSummary.email}>{data.sanityProfileSummary.email}</a>
      </div>

      <>{children}</>

      <div className="contact-content my-3">
        <div className="row mx-0 justify-content-between">
          {data.sanityProfileSummary.socialLinks.map((item, index) => (
            <a
              href={item.link}
              target="__blank"
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{ height: 32, width: 32 }}>
              <Icon
                size={20}
                color="#fff"
                style={{}}
                path={simpleIcons[item.iconTitle]["path"]}>
              </Icon>
            </a>
          ))}
        </div>
      </div>
      <div className="resume-section mt-3">
        <a className='btn btn-primary btn-block p-3 box-border'
          download={`${data.sanityProfileSummary.resume.asset.originalFilename.replace(".pdf", "")}-${new Date().toISOString().split('T')[0]}.pdf`} target="__blank" href={data.sanityProfileSummary.resume.asset.url} >
          <i className="fas fa-download px-1"></i> Download Resume
        </a>
      </div>
    </>
  );
};

SidebarContent.propTypes = {
  children: PropTypes.node,
};

export default SidebarContent;