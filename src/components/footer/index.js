import React from 'react';
const Footer = () => {
    return (
        <footer>
            <nav className="navbar navbar-light bg-transparent justify-content-center">
                <span>
                    Made by Saurabh with <i class="fas fa-heart"></i> using <a href="https://www.gatsbyjs.org">Gatsby</a> © {new Date().getFullYear()}
                </span>
            </nav>
        </footer>
    );
}

export default Footer;