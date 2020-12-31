import React from 'react';
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReadMore from "@crossfield/react-read-more";
import { BsChevronCompactDown } from "react-icons/bs";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="portfolio-card card my-5">
      <Img
        fluid={portfolio.image.asset.fluid}
        className="card-img-top portfolio-image-card"
        alt="Smart Coaching Portfolio"
        style={{ background: portfolio.background }}
      />
      <ReadMore initialHeight={400} readMore={props => (
        <button onClick={props.onClick}>
          {props.open ? 'Read Less' : 'Read More'}
          <span className="px-2">
            <BsChevronCompactDown style={{
              transform: `rotate( ${props.open ? '180deg' : '0deg'})`,
              transition: 'transform 0.25s',
            }} />
          </span>
        </button>
      )}>
        <div className="card-body portfolio-body" style={{ paddingTop: "30px" }}>
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="card-title">
                <a href={portfolio.link} target="__blank">{portfolio.name}</a>
              </h3>
              <p>{portfolio.description}</p>
            </div>
            <div className="col-12 col-md-6 project-info">
              <span className="portfolio-summary">Project Summary</span>
              <ul class="portfolio-aside-list">
                <li>
                  <span class="t-left">Role:</span>
                  <span class="t-right text-primary">{portfolio.role}</span>
                </li>
                <li>
                  <span class="t-left">Skills:</span>
                  <div class="t-right cate-link">
                    {portfolio.tags.map((tag) => (<span className="badge">{tag}</span>))}
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </ReadMore>
    </div >
  );
}

PortfolioCard.propTypes = {
  portfolio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.array,
    role: PropTypes.string,
    link: PropTypes.string,
    background: PropTypes.string,
    image: PropTypes.object,
    showBadge: PropTypes.bool
  }).isRequired
};

export default PortfolioCard;