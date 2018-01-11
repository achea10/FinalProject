//=========================================================================
import React from "react";
import {Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom"
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import "./Nav.css";
//=========================================================================

const navInstance = () =>

<nav className="navbar">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to='/sign-up' className="navbar-brand">Music TYE</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/forum">Forum</Link></li>
      <li><Link to="/learn">Learn</Link></li>
      <li><Link to="/playlist">Playlist</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/sign-up"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>

export default navInstance;
