import React from 'react';
import PropTypes from 'prop-types';
import Style from "./content.module.scss";
const Content = ({ children }) => {
    return (
        <div className={Style.themeLight + " col-12 col-md-12 col-xl-9 p-5"}>
            {children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired
}

export default Content;