import React, { useState } from "react";
import "./Technology.css";

function TechNav({ onSelectTechnology }) {
  const [activeTechnology, setActiveTechnology] = useState("Launch vehicle");

  const handleSelectTechnology = (technologyMember) => {
    setActiveTechnology(technologyMember);
    onSelectTechnology(technologyMember);
  };
  return (
    <>
      <div className="technology-nav-container">
        <ul className="technology-nav">
          <li
            onClick={() => handleSelectTechnology("Launch vehicle")}
            className={`technology-nav-btn ${
              activeTechnology === "Launch vehicle" ? "active" : ""
            }`}
          >
            1
          </li>
          <li
            onClick={() => handleSelectTechnology("Spaceport")}
            className={`technology-nav-btn ${
              activeTechnology === "Spaceport" ? "active" : ""
            }`}
          >
            2
          </li>
          <li
            onClick={() => handleSelectTechnology("Space capsule")}
            className={`technology-nav-btn ${
              activeTechnology === "Space capsule" ? "active" : ""
            }`}
          >
            3
          </li>
        </ul>
      </div>
    </>
  );
}

export default TechNav;
