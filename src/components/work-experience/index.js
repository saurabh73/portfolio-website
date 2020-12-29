import React from 'react';
import PropTypes from "prop-types";
import Helpers from './../../helpers';

const WorkExperience = ({ experience }) => {
  return (
    <div className="work-experience">
      <div className="work-item">
        <h5 className="work-title">{experience.position}</h5>
        <div className="mb-1" style={{ fontWeight: 'bold' }}>
          <span className="text-primary" style={{ whiteSpace: 'nowrap' }}>{Helpers.parseDate(experience.startDate, "yyyy")} - {Helpers.parseDate(experience.endDate, "yyyy")}</span>
          <a style={{ marginLeft: "5px", paddingLeft: "5px", borderLeft: "1px dotted gray", whiteSpace: 'nowrap' }}
            className="company-link"
            href={experience.website}
            target="__blank">{experience.company}
          </a>
        </div>
        {experience.summary.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    website: PropTypes.string,
    summary: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    logo: PropTypes.object,
    highlights: PropTypes.array
  }).isRequired
};


export default WorkExperience;