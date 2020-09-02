import React from 'react';
import PropTypes from "prop-types";
import Helpers from './../../helpers';
import Img from "gatsby-image";
const WorkExperience = ({ experience }) => {
  return (
    <div className="py-3 work-experience">
      <h4>{experience.designation}</h4>
      <div className="media">
        <Img
          alt={experience.company + 'Logo'}
          fluid={experience.logo.asset.fluid}
          className="mr-3 mb-3 bg-white rounded company-logo"
        />
        <div className="media-body">
          <h4 className="mt-0"><a href={experience.link}>{experience.company}</a></h4>
          <h6 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{Helpers.parseDate(experience.startDate, "MMM yyyy")} - {Helpers.parseDate(experience.endDate, "MMM yyyy")}</h6>
          {experience.description.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    logo: PropTypes.object
  }).isRequired
};


export default WorkExperience;