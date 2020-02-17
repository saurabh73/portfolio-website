import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => {
    const pageName = "now";
    return (
        <Layout page={pageName}>
            <SEO title={"/" + pageName} />
        </Layout>
    );
}

export default NowPage;