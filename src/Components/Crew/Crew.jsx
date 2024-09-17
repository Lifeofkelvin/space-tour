import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import "./Crew.css";
import CrewNav from "./CrewNav";

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);

  const handleCrewChange = (crewName) => {
    const crew = data.crew.find((crew) => crew.name === crewName);
    setSelectedCrew(crew);
  };

  useEffect(() => {
    document.body.classList.add("body-crew");

    return () => {
      document.body.classList.remove("body-crew");
    };
  }, []);

  return (
    <>
      <div className=" container">
        <div className="pick">
          <span>02</span>
          <p>Pick your crew</p>
        </div>
        <div className="crew-content">
          <div className="left-container">
            <div className="crew-img">
              <img src={selectedCrew.images.png} alt={selectedCrew.name} />
            </div>
          </div>
          <div className="right-container">
            <p className="role">{selectedCrew.role}</p>
            <div className="crew-details">
              <h1>{selectedCrew.name.toLocaleUpperCase()}</h1>
              <p className="crew-intro">{selectedCrew.bio}</p>
            </div>
            <CrewNav onSelectCrew={handleCrewChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
