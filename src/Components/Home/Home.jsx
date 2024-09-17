import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.classList.add("body-home");

    return () => {
      document.body.classList.remove("body-home");
    };
  }, []);
  return (
    <>
      <div className="homepage container">
        <div className="homepage-content">
          <div className="left-container">
            <span className="intro">So, you want to travel to</span>
            <h1>Space</h1>
            <p className="info">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="right-container">
            <Link className="explore-btn" to="destination">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
