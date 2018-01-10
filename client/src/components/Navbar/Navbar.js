import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<Link className="navbar-brand" to="/">
				</Link>
			</div>
			<ul className="nav navbar-nav">
				<li 
					// className={
					// 	window.location.pathname === "/" ||
					// 	window.location.pathname === "/home" ? "active" : ""}
				>
					<Link to="/">Home</Link>
				</li>
				<li
					// className={window.location.pathname === "/feed" ? "active" : ""}
				>
					<Link to="/feed">Feed</Link>
				</li>
				<li
					// className={window.location.pathname === "/learn" ? "active" : ""}
				>
				<Link to="/learn">Learn</Link>

				</li>
			</ul>
		</div>
	</nav>

export default Navbar;

