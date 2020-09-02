import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkExperience from "../components/work-experience";
import Img from "gatsby-image";


export const query = graphql`
  {
    profile: sanityProfileSummary {
      id
      bio
      workExperiences {
        company
        link
        designation
        description
        startDate
        endDate
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
      endDate(formatString: "YYYY-MM")
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
        {data.profile.bio.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
      </div>
      <div className="box">
        <h1 className="title">Work Experience <span className="subTitle">({totalExperience} years)</span></h1>

        {data.profile.workExperiences.map((experience, index) => (
          <WorkExperience key={index} experience={experience}></WorkExperience>
        ))}
      </div>
      <div className="box">
        <h1 className="title">Technologies &amp; Frameworks</h1>
        <div className="technologies-grid py-3">
          {data.languages.nodes.map((technology) => (
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
