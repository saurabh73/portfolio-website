import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioCard from "../components/portfolio-card";


export const query = graphql`{
  portfolio: allSanityPortfolio(sort: {order: ASC, fields: order}) {
    nodes {
      id
      link
      name
      description
      background
      tags
      role
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
    }
  }
}`

const PortfolioPage = () => {
  const pageName = "portfolio";
  const data = useStaticQuery(query);
  return (
    <Layout page={pageName}>
      <SEO title={"/" + pageName} />
      <div className="box">
        <h1 className="title">Projects</h1>

        {data.portfolio.nodes.map((portfolio) => (
          <PortfolioCard portfolio={portfolio} />
        ))}
      </div>
    </Layout>
  );
};

export default PortfolioPage;
