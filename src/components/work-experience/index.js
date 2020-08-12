import React from 'react';
import PropTypes from "prop-types";
import Helpers from './../../helpers';
import Img from "gatsby-image";
const WorkExperience = ({ experience }) => {
  return (
    <div className="py-3">
      <h3>{experience.designation} <span style={{ "fontSize": "1rem" }}>
        {Helpers.parseDate(experience.startDate, "MMM yyyy")} - {Helpers.parseDate(experience.endDate, "MMM yyyy")}</span>
      </h3>

      <div className="media">
        <Img
          alt={experience.company + 'Logo'}
          fixed={experience.logo.asset.fixed}
          className="mr-3 bg-white rounded"
        />
        <div class="media-body">
          <h5 class="mt-0"><a href={experience.link}>{experience.company}</a></h5>
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