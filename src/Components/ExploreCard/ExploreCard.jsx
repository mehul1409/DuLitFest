import "./ExploreCard.css";
import { Link } from "react-router-dom";

const ExploreCard = () => {
  return (
    <div className="exploree">
      <div className="Exploreheading">
        <h1 className="headexp">Explore the Event</h1>
      </div>
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">SPONSERS</h2>
            <button className="btn">
              <Link to="/sponsers">MORE</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">PROGRAMME</h2>
            <button className="btn">
              <Link to="/programme">MORE</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">SPEAKERS</h2>
            <button className="btn">
              <Link to="/speakers">MORE</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">CONTACT</h2>
            <button className="btn">
              <Link to="/contact">MORE</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreCard;
