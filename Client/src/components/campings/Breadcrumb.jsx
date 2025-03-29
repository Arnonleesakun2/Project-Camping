import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ name }) => {
  return (
    <div>
      <div className="breadcrumbs text-lg">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
