import "./ExploreCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExploreCard = () => {
  return (
    <div className="exploree">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="Exploreheading">
        <h1 className="headexp">Explore the Event</h1>
      </motion.div>
      <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="page-content">
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
      </motion.main>
    </div>
  );
};

export default ExploreCard;
