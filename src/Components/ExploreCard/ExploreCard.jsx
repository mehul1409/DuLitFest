import "./ExploreCard.css";
import { Link } from "react-router-dom";

const ExploreCard = () => {
  return (
    <div className="exploree">
      <div className="Exploreheading"><h1 className="headexp">Explore the Event</h1></div>
      <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">SPONSERS</h2>
            <button class="btn">
              <Link to='/sponsers'>MORE</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">PROGRAMME</h2>
            <button class="btn">
              <Link to='/programme'>MORE</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">SPEAKERS</h2>
            <button class="btn">
              <Link to='/speakers'>MORE</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">CONTACT</h2>
            <button class="btn">
              <Link to='/contact'>MORE</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreCard;
