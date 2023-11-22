import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/goal-logo.png";
import navImg from '../assets/nav-pic.png';

const Navbars = () => {
  return (
    <nav className="border-bottom border-2 border-primary">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/">
            <img src={navLogo} alt="navLogo" className="img-fluid" />
          </Link>
        </div>
        <div className="">
          <ul className="d-flex gap-5 align-items-center list-unstyled">
            <li>
              <Link to="/NewUser" className="text-decoration-none">New User</Link>
            </li>
            <li>
              <Link to="/AllUsers" className="text-decoration-none">All Users</Link>
            </li>
            <li >
                <img src={navImg} alt="navImg" className="d-none d-lg-block img-fluid"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
