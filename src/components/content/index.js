import React from 'react';
import PropTypes from 'prop-types';
const Content = ({ children }) => {
    return (
        <div className="col-12 col-md-12 col-xl-9 bg-dark p-5">
            {children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired
}

export default Content;