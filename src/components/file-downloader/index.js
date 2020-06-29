import React from 'react';
import PropTypes from 'prop-types';

const FileDownloader = ({ link, title, fileName, classList }) => {
  return (
    <a className={`${classList.join(' ')}`} download={fileName} target="__blank" href={link} >
      {title}
    </a >
  );
};


FileDownloader.propTypes = {
  classList: PropTypes.array,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

FileDownloader.defaultProps = {
  classList: []
}

export default FileDownloader;