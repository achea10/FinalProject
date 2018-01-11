//=========================================================================
import React from "react";
import "./Button.css";
import {LinkContainer} from "react-router-bootstrap";
//=========================================================================

const Button = props =>

<LinkContainer to={props.path}>
	<button {...props} className="button">
		{props.children}
	</button>
</LinkContainer>;		

export default Button;