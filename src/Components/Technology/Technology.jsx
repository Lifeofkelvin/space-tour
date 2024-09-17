import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import TechNav from "./TechNav";
import "./Technology.css";

function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technology[0]
  );

  const handleTechnologyChange = (technologyName) => {
    const technology = data.technology.find(
      (dest) => dest.name === technologyName
    );
    setSelectedTechnology(technology);
  };

  useEffect(() => {
    document.body.classList.add("body-technology");

    return () => {
      document.body.classList.remove("body-technology");
    };
  }, []);

  return (
    <>
      <div className=" container">
        <div className="pick">
          <span>02</span>
          <p>Pick your technology</p>
        </div>
        <div className="technology-content">
          <div className="tech-left-container">
            <div className="technology-img">
              <img
                src={selectedTechnology.images.portrait}
                alt={selectedTechnology.name}
              />
            </div>
          </div>
          <div className="tech-right-container">
            <TechNav onSelectTechnology={handleTechnologyChange} />
            <div className="tech-details">
              <div className="technology-details">
                <p className="role">The terminolgy...</p>
                <h1>{selectedTechnology.name.toLocaleUpperCase()}</h1>
              </div>
              <p className="technology-intro">
                {selectedTechnology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
