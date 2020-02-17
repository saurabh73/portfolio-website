import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
    const pageName = "portfolio";
    return (
        <Layout page={pageName}>
            <SEO title={"/" + pageName} />
        </Layout>
    );
}

export default PortfolioPage;