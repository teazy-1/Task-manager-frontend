import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fynGirl from "../assets/fynGirl.png";
import navLogo from "../assets/nav-logo.png";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const allNavLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/new">New Task</Link>
        <Link to="/taska">All Task</Link>
      </>
    ) : location.pathname === "/tasks" ? (
      <Link to="/new">New Task</Link>
    ) : location.pathname === "/new" ? (
      <Link to="tasks">All Task</Link>
    ) : location.pathname === "/new" || location.pathname === "edit" ? (
      <Link to="/tasks"> All Task</Link>
    ) : null;
  };

  return (
    <div className="nav-con">
      <nav className="d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>

        <div className="d-flex align-items-center inner-nav justify-content-between">
          {allNavLinks()}
          <img src={fynGirl} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
