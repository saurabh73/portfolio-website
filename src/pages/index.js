import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkExperience from "../components/work-experience";
import Img from "gatsby-image";
export const query = graphql`
  {
    sanityProfileSummary {
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
      technologies {
        name
        image {
          asset {
            fixed(width: 100, height: 100) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const pageName = "home";
  const data = useStaticQuery(query);
  const totalExperience = new Date(new Date() - new Date("2014/10/01")).getFullYear() - 1970;
  console.log(data);
  return (
    <Layout page={pageName}>
      <SEO title={"/" + pageName} />
      <div className="box">
        <h1 className="title">About Me</h1>
        {data.sanityProfileSummary.bio.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
      </div>
      <div className="box">
        <h1 className="title">Work Experience <span className="subTitle">({totalExperience} years)</span></h1>

        {data.sanityProfileSummary.workExperiences.map((experience, index) => (
          <WorkExperience key={index} experience={experience}></WorkExperience>
        ))}
      </div>
      <div className="box">
        <h1 className="title">Technologies &amp; Frameworks</h1>
        <div className="technologies-grid py-3">
          {data.sanityProfileSummary.technologies.map((technology, index) => (
            <div key={index} className="card bg-transparent border-0" style={{ "width": "100%" }} >
              <Img
                className="card-img-top"
                fixed={technology.image.asset.fixed}
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
