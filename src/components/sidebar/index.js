import React, { useState, useEffect, useRef } from "react";
import Style from "./sidebar.module.scss";
import SidebarContent from "./content";
const Sidebar = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(250);
  const handleResize = () => {
    setWidth(ref.current.offsetWidth - 30);
  };

  useEffect(() => {
    handleResize();
    if (ref.current) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return (
    <aside className="col-12 col-md-12 col-lg-4 col-xl-3" ref={ref}>
      <div
        className={`${Style.sidebar} box shadow flip-right mb-3`}
        style={{ width: `${width}px` }}
      >
        <SidebarContent></SidebarContent>
      </div>
    </aside >
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
