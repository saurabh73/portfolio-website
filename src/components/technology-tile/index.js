import React from 'react';
import PropTypes from "prop-types";
import Img from "gatsby-image";

const TechnologyTile = ({ technology }) => {
  return (
    <div className="card hvr-grow bg-transparent border-0 px-1" style={{ "width": "100%" }} >
      {technology.image && technology.image.asset.fluid &&
        <Img
          className="card-img-top rounded"
          fluid={technology.image.asset.fluid}
          style={{
            height: "96px",
            backgroundColor: "rgba(150,150,150,0.1)"
          }}
          imgStyle={{
            objectFit: "contain",
            padding: "16px"
          }}
          alt="Card image cap">
        </Img>
      }
      <div className="card-body px-0 text-center">
        <span className="card-title">{technology.name}</span>
      </div>
    </div>
  );
}

TechnologyTile.propTypes = {
  technology: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    stackCategory: PropTypes.string,
    proficiency: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    image: PropTypes.object,
    showBadge: PropTypes.bool
  }).isRequired
};
export default TechnologyTile;
