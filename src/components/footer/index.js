import React from "react";
const Footer = () => {
  return (
    <footer className="my-3">
      <nav className="navbar navbar-light bg-transparent justify-content-center">
        <ul className="nav flex-column text-center">
          <li className="nav-item">
            Made with <i className="fas fa-heart"></i> and{" "}
            <i className="fas fa-coffee"></i> by Saurabh
          </li>
          <li className="nav-ite">
            View source on{" "}
            <a href="https://github.com/saurabh73/portfolio-website">Github</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
