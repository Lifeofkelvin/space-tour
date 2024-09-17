import React, { useState } from "react";

function CrewNav({ onSelectCrew }) {
  const [activeCrew, setActiveCrew] = useState("");

  const handleSelectCrew = (crewMember) => {
    setActiveCrew(crewMember);
    onSelectCrew(crewMember);
  };

  return (
    <>
      <div className="crew-nav-container">
        <ul className="crew-nav">
          <li
            onClick={() => handleSelectCrew("Douglas Hurley")}
            className={`crew-nav-btn ${
              activeCrew === "Douglas Hurley" ? "active" : ""
            }`}
          ></li>
          <li
            onClick={() => handleSelectCrew("Mark Shuttleworth")}
            className={`crew-nav-btn ${
              activeCrew === "Mark Shuttleworth" ? "active" : ""
            }`}
          ></li>
          <li
            onClick={() => handleSelectCrew("Victor Glover")}
            className={`crew-nav-btn ${
              activeCrew === "Victor Glover" ? "active" : ""
            }`}
          ></li>
          <li
            onClick={() => handleSelectCrew("Anousheh Ansari")}
            className={`crew-nav-btn ${
              activeCrew === "Anousheh Ansari" ? "active" : ""
            }`}
          ></li>
        </ul>
      </div>
    </>
  );
}

export default CrewNav;
