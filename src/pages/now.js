import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => {
  const pageName = "now";
  return (
    <Layout page={pageName}>
      <SEO title={"/" + pageName} />
      <div className="box" >
        <h1>Test</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia architecto? Ipsa ea commodi, fugiat dolorum neque necessitatibus laborum sunt quo ullam aut nostrum nihil labore optio atque obcaecati ipsum.</p>
      </div>
    </Layout>
  );
}

export default NowPage;