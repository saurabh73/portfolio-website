import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Style from "./sidebar.module.scss";
import PropTypes from 'prop-types';
import Img from "gatsby-image";
// TODO: Optimize this
import linkedin from 'simple-icons/icons/linkedin';
import twitter from 'simple-icons/icons/twitter';
import github from 'simple-icons/icons/github';
import devTo from 'simple-icons/icons/dev-dot-to';
import Icon from './../icon';

const SidebarContent = ({ children }) => {
  const icons = {
    'linkedin': linkedin["path"],
    'twitter': twitter["path"],
    'github': github["path"],
    'dev.to': devTo["path"]
  }
  const data = useStaticQuery(graphql`{
    profile: sanityResume {
      id
      basics {
        name
        profiles {
          network
          url
          username
          iconLink
          iconTheme
        }
        label
        email
        picture {
          asset {
            fixed(height: 160, width: 160) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    resume: file(name: {eq: "saurabh-dutta-resume"}, relativeDirectory: {in: "files"}) {
      id
      publicURL
    }
  }`);
  return (
    <>
      <div className="text-center">
        <div className={`${Style.image} image-wrapper`}>
          <Img
            fixed={data.profile.basics.picture.asset.fixed}
            className="image"
          />
        </div>
        <h3 className="text-primary">{data.profile.basics.name}</h3>
        <p>{data.profile.basics.label}</p>
        <a href={'mailto:' + data.profile.basics.email}>{data.profile.basics.email}</a>
      </div>

      <>{children}</>

      <div className="contact-content my-3">
        <div className="row mx-0 justify-content-between">
          {data.profile.basics.profiles.map((item, index) => (
            <a
              href={item.url}
              target="__blank"
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{ height: 32, width: 32 }}>
              <Icon
                className="social-icon"
                size={20}
                style={{}}
                path={icons[item.network]}>
              </Icon>
            </a>
          ))}
        </div>
      </div>
      <div className="resume-section mt-3">
        <a className='btn btn-resume hvr-underline-from-center btn-block p-3'
          href={data.resume.publicURL} download>
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