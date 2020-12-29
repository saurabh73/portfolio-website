import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkExperience from "../components/work-experience";
import Img from "gatsby-image";
import Helpers from './../helpers';
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
    languages: allSanityTechnology(sort: {fields: proficiency, order: DESC}, filter: {category: {eq: "language"}}) {
      ...SanityTechnologyConnectionFragment
    }
    tools: allSanityTechnology(sort: {fields: proficiency, order: DESC}, filter: {category: {eq: "tools"}}) {
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
        <div className="technologies-grid py-3">
          {data.languages.nodes.map((technology) => (
            <div key={technology.id} className="card bg-transparent border-0" style={{ "width": "100%" }} >
              <Img
                className="card-img-top rounded"
                fluid={technology.image.asset.fluid}
                style={{
                  width: "96px",
                  height: "96px",
                  backgroundColor: "rgba(150,150,150,0.1)"
                }}
                imgStyle={{
                  objectFit: "contain",
                  padding: "16px"
                }}
                alt="Card image cap">
              </Img>
              <div className="card-body">
                <h6 className="card-title">{technology.name}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="technologies-grid py-3">
          {data.tools.nodes.map((technology) => (
            <div key={technology.id} className="card bg-transparent border-0" style={{ "width": "100%" }} >
              <Img
                className="card-img-top bg-white rounded"
                fluid={technology.image.asset.fluid}
                style={{
                  width: "100px",
                  height: "100px",
                }}
                imgStyle={{
                  objectFit: "contain",
                  padding: "5px"
                }}
                alt="Card image cap">
              </Img>
              <div className="card-body">
                <h6 className="card-title">{technology.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout >
  );
};

export default IndexPage;
