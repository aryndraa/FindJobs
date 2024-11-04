import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ breadLink }) => {
  return (
    <div>
      <qdiv className="breadcrumbs text-secondary">
        <ul>
          {breadLink.map((link, index) => {
            return (
              <li key={index} className="font-medium mb-3">
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
