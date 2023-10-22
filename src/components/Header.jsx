import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const head = ["Unread", "Read", "Favorites"];
  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h3 style={{ color: "#636363" }}>Filter By:</h3>
        {head.map((item, index) => (
          <div key={index}>
            <Link
              style={{ textDecoration: "none", color: "#636363", fontSize: 18 }}
              to={
                item === "Favorites"
                  ? "/favorite"
                  : item === "Read"
                  ? "/"
                  : item === "Unread"
                  ? "/"
                  : null
              }
            >
              {item}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
