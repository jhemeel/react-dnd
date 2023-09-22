import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ authUser, userSignOut }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <Link to="/">galerie de photos</Link>
          </div>
        </div>
        <div className="center">
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="" className="menu-item">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-item">
                  Photos
                </a>
              </li>
              { authUser ? (
                <li className="">
                <a href="" className="">
                  <button onClick={userSignOut} className="auth-btn-2">Logout</button>
                </a>
              </li>
              ):
              (
                 <li className="">
                 <a href="" className="">
                   <Link to="/login"><button className="auth-btn-2">Login</button></Link>
                 </a>
               </li>)
              }
             

            </ul>
          </div>
        </div>
        <div className="right">
        { authUser ? (
                <li className="">
                <a href="" className="">
                  <button onClick={userSignOut} className="auth-btn-2">Logout</button>
                </a>
              </li>
              ):
              (
                 <li className="">
                 <a href="" className="">
                   <Link to="/login"><button className="auth-btn-2">Login</button></Link>
                 </a>
               </li>)
              }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
