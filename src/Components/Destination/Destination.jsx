import DestNav from "./DestinationNav";
import data from "../../data/data.json";
import { useEffect, useState } from "react";
import "./Destination.css";

function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const handleDestinationChange = (destinationName) => {
    const destination = data.destinations.find(
      (dest) => dest.name === destinationName
    );
    setSelectedDestination(destination);
  };

  useEffect(() => {
    document.body.classList.add("body-destination");
    return () => {
      document.body.classList.remove("body-destination");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="pick">
          <span>01</span>
          <p>Pick your destination</p>
        </div>
        <div className="destination-content">
          <div className="left-container">
            <div className="destination-img">
              <img
                src={selectedDestination.images.png}
                alt={selectedDestination.name}
              />
            </div>
          </div>
          <div className="right-container">
            <DestNav onSelectDestination={handleDestinationChange} />

            <div className="location">
              <h1>{selectedDestination.name.toLocaleUpperCase()}</h1>
              <p className="location-intro">
                {selectedDestination.description}
              </p>
              <hr />

              <div className="distance-travel">
                <div className="distance">
                  <span>Avg. distance</span>
                  <h2>{selectedDestination.distance}</h2>
                </div>
                <div className="travel">
                  <span>Est. travel time</span>
                  <h2>{selectedDestination.travel}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
