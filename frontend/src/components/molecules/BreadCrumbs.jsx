import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ breadLink }) => {
  return (
    <div>
      <qdiv className="breadcrumbs">
        <ul>
          {breadLink.map((link, index) => {
            return (
              <li key={index} className="text-secondary font-medium mb-3 mx-3">
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </qdiv>
    </div>
  );
};

export default BreadCrumbs;
