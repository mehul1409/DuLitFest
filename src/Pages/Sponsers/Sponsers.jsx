import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import picc2 from "./picc2.png";
import clglogo from "./clglogo.png";
import mediaPartner1 from "/assets/images/Republic_TVMediaPartner.webp";
import mediaPartner2 from "/assets/images/SangamMediaPartner.jpg";
import knowledgePartner from "/assets/images/KnowledgePartner.png";
import partner from "/assets/images/CPSPartner.jpg";
import "./Sponsers.scss";
import { motion } from "framer-motion";

const Sponsers = () => {
  return (
    <>
      <PageHeader bgColor="#334d50" fgColor="#cbcaa5" heading="Our Partners" />
      <div className="Sponsersbody">
        <div className="middle">
          <div className="sponsers">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={picc2} alt="" />
              <h1 className="SponsorsTitle">Title Partner</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={clglogo} alt="" />
              <h1 className="SponsorsTitle"> Venue Partner</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={mediaPartner1} alt="" />
              <h1 className="SponsorsTitle"> Media Partner</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={mediaPartner2} alt="" />
              <h1 className="SponsorsTitle"> Media Partner</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={partner} alt="" />
              <h1 className="SponsorsTitle"> Partner</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="Sponsersboxx"
            >
              <img className="imgg" src={knowledgePartner} alt="" />
              <h1 className="SponsorsTitle"> Knowledge Partner</h1>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer bgColor="#cbcaa5" />
    </>
  );
};

export default Sponsers;
