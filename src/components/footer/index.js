import React from 'react';
const Footer = () => {
    return (
        <footer className="my-3">
            <nav className="navbar navbar-light bg-transparent justify-content-center">
                <span>
                    Made with <i className="fas fa-heart"></i> with <a href="https://www.gatsbyjs.org">Gatsby</a> © {new Date().getFullYear()}
                </span>
            </nav>
        </footer>
    );
}

export default Footer;