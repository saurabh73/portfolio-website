import React, { useState, useEffect, useRef } from 'react';
import Style from './sidebar.module.scss';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Sidebar = () => {

    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    const data = useStaticQuery(graphql`
        query {
            profileImage: file(relativePath: { eq: "profile.jpeg" }) {
                childImageSharp {
                    fixed(width: 180, height: 180) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const handleResize = () => {
        console.log("trigger resize");
        setWidth(ref.current.offsetWidth - 30);
    }

    useEffect(() => {
        handleResize();
        if (ref.current) {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [ref]);

    return (
        <aside className="col-12 col-md-12 col-xl-3" ref={ref}>
            <div className={`${Style.sidebar} box shadow flip-right mb-4`} style={{ width: `${width}px` }} >
                <div className="text-center"> 
                <Img fluid={data.profileImage.childImageSharp.fixed} className={Style.image} />                   
                    <h3>Saurabh Dutta</h3>
                    <div className="">Full Stack Developer</div>
                </div>

                <div className="contact-content my-3">
                    <ul className="list-group">
                        <li className="list-group-item border-0 px-0 py-1 bg-transparent">Cras justo odio</li>
                        <li className="list-group-item border-0 px-0 py-1 bg-transparent">Dapibus ac facilisis in</li>
                        <li className="list-group-item border-0 px-0 py-1 bg-transparent">Morbi leo risus</li>
                        <li className="list-group-item border-0 px-0 py-1 bg-transparent">Porta ac consectetur ac</li>
                        <li className="list-group-item border-0 px-0 py-1 bg-transparent">Vestibulum at eros</li>
                    </ul>
                </div>

                <div className="resume-section mt-3">
                    <button className="btn btn-primary btn-block py-3 box-border flip-right">Download Resume</button>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;