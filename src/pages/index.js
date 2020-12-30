import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkExperience from "../components/work-experience";
import TechnologyTile from "../components/technology-tile";

export const query = graphql`
  {
    profile: sanityResume {
      id
      basics {
        summary
      }
      work {
        company
        website
        highlights
        startDate
        endDate
        position
        summary
        logo {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    languages: allSanityTechnology(filter: {showBadge: {eq: true}, category: {eq: "language"}}) {
      ...SanityTechnologyConnectionFragment
    }
    platforms: allSanityTechnology(filter: {showBadge: {eq: true}, stackCategory: {eq: "platform"}}) {
      ...SanityTechnologyConnectionFragment
    }
    frontend: allSanityTechnology(filter: {showBadge: {eq: true}, stackCategory: {eq: "frontend"}}) {
      ...SanityTechnologyConnectionFragment
    }
    backend: allSanityTechnology(filter: {showBadge: {eq: true}, stackCategory: {eq: "backend"}}) {
      ...SanityTechnologyConnectionFragment
    }
    database: allSanityTechnology(filter: {showBadge: {eq: true}, stackCategory: {eq: "database"}}) {
      ...SanityTechnologyConnectionFragment
    }
    tools: allSanityTechnology(filter: {showBadge: {eq: true}, category: {eq: "tools"}}) {
      ...SanityTechnologyConnectionFragment
    }
    buildTools: allSanityTechnology(filter: {showBadge: {eq: true}, category: {eq: "build tool"}}) {
      ...SanityTechnologyConnectionFragment
    }
  }
  fragment SanityTechnologyConnectionFragment on SanityTechnologyConnection {
    totalCount
    nodes {
      id
      name
      startDate(formatString: "YYYY-MM")
      proficiency
      showBadge
      image {
        asset {
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }

  `

const IndexPage = () => {
  const pageName = "home";
  const data = useStaticQuery(query);
  console.log(data);
  const totalExperience = new Date(new Date() - new Date("2014/10/01")).getFullYear() - 1970;
  return (
    <Layout page={pageName}>
      <SEO title={"/" + pageName} />
      <div className="box">
        <h1 className="title">About Me</h1>
        {data.profile.basics.summary.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
      </div>
      <div className="box">
        <h1 className="title">Work Experience</h1>
        <div className="work-experience-container">
          {data.profile.work.map((experience, index) => (
            <WorkExperience key={index} experience={experience}></WorkExperience>
          ))}
        </div>
      </div>
      <div className="box">
        <h1 className="title">Technical Skills</h1>
        <div className="mt-5">
          {/* Languages */}
          <h3 className="subTitle">Languages</h3>
          <div className="technologies-grid py-3">
            {data.languages.nodes.map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>

          <h3 className="subTitle">Backend</h3>
          <div className="technologies-grid py-3">
            {data.backend.nodes.map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>

          <h3 className="subTitle">Frontend</h3>
          <div className="technologies-grid py-3">
            {data.frontend.nodes.map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>

          <h3 className="subTitle">Database</h3>
          <div className="technologies-grid py-3">
            {data.database.nodes.map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>

          <h3 className="subTitle">Platforms</h3>
          <div className="technologies-grid py-3">
            {data.platforms.nodes.map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>

          <h3 className="subTitle">Tools</h3>
          <div className="technologies-grid py-3">
            {data.tools.nodes.concat(data.buildTools.nodes).map((technology) => (
              <TechnologyTile technology={technology}></TechnologyTile>
            ))}
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default IndexPage;
