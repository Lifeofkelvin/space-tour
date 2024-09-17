import React, { useState } from "react";

import "./Destination.css";

function DestinationNav({ onSelectDestination }) {
   const [activeDestination, setActiveDestination] = useState("");

   const handleSelectDestination = (destinationMember) => {
     setActiveDestination(destinationMember);
     onSelectDestination(destinationMember);
   };
  return (
    <>
      <div className="dest-nav-container">
        <ul className="dest-nav">
          <li
            onClick={() => handleSelectDestination("Moon")}
            className={`dest-nav-btn ${
              activeDestination === "Moon" ? "active" : ""
            }`}
          >
            MOON
          </li>
          <li
            onClick={() => handleSelectDestination("Mars")}
            className={`dest-nav-btn ${
              activeDestination === "Mars" ? "active" : ""
            }`}
          >
            MARS
          </li>
          <li
            onClick={() => handleSelectDestination("Europa")}
            className={`dest-nav-btn ${
              activeDestination === "Europa" ? "active" : ""
            }`}
          >
            EUROPA
          </li>
          <li
            onClick={() => handleSelectDestination("Titan")}
            className={`dest-nav-btn ${
              activeDestination === "Titan" ? "active" : ""
            }`}
          >
            TITAN
          </li>
        </ul>
      </div>
    </>
  );
}

export default DestinationNav;
