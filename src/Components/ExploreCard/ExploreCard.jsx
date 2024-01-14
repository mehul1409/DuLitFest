import "./ExploreCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="crousel-div"
      >
        <Crousel />
      </motion.div>

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="page-content"
      >
        <div className="card">
          <Link to="/sponsers">
            <div className="content">
              <h2 className="title">Partners</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/programme">
            <div className="content">
              <h2 className="title">Programme</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/speakers">
            <div className="content">
              <h2 className="title">Speakers</h2>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/register">
            <div className="content">
              <h2 className="title">Register</h2>
            </div>
          </Link>
        </div>
      </motion.main>
    </div>
  );
};

export default ExploreCard;
