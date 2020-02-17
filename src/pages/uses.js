import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const UsesPage = () => {
    const pageName = "uses";
    return (
        <Layout page={pageName}>
            <SEO title={"/" + pageName} />
        </Layout>
    );
}

export default UsesPage;