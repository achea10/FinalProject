//=========================================================================
import React from "react";
import "./FormBtn.css";
//=========================================================================

const FormBtn = props =>

<button {...props} className="btn">
	{props.children}
</button>;		

export default FormBtn;