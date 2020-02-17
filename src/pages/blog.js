import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
    const pageName = "blog";
    return (
        <Layout page={pageName}>
            <SEO title={"/" + pageName} />
        </Layout>
    );
}

export default BlogPage;