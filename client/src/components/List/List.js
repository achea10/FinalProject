//========================================================
import React from "react";
import {Link} from "react-router-dom";
import "./List.css";
//========================================================

export const List = ({topics}) => {

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
      	{topics.map(topic => (
      		<li className="list-group-item">
      			<Link to={"/topics/" + topic._id}>
              <strong>
                <p>Topic Name: {topic.title}</p> 
                <p>Author: {topic.author}</p>
              </strong>
            </Link>
          </li>    
      	))}
      </ul>
    </div>
  );
};