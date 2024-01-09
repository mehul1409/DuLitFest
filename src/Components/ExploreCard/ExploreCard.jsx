import "./ExploreCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vector from './vector.png'
import Crousel from "../Crousel/Crousel";
import SectionHeader from "../SectionHeader/SectionHeader";

const ExploreCard = () => {
  return (
    <div className="exploree">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="Exploreheading"
      >
        {/* <img src={vector} alt="image" className="backii backii1" /> */}
        <SectionHeader text="EXPLORE FESTIVAL" />
        {/* <h1 className="headexp">Explore the Event</h1> */}
      </motion.div>

      <div className="crousel-div">
        <Crousel />
      </div>


      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="page-content"
      >
        <div className="card">
          <div className="content">
            <h2 className="title">Partners</h2>
            <button className="btn">
              <Link to="/sponsers">More</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Programme</h2>
            <button className="btn">
              <Link to="/programme">More</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Speakers</h2>
            <button className="btn">
              <Link to="/speakers">More</Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Contact</h2>
            <button className="btn">
              <Link to="/contact">More</Link>
            </button>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ExploreCard;
