import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import picc2 from "./picc2.png";
import clglogo from "./clglogo.png";
import "./Sponsers.scss";
import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {
  return (
    <>
      <div className="Sponsersbody">
        <PageHeader
          bgColor="#334d50"
          fgColor="#cbcaa5"
          heading="Our Partners"
        />

        <div className="middle">
          <div className="sponsers">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="boxx-1"
            >
              <h1>Title Partner</h1>
              <img className="imgg" src={picc2} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="boxx-2"
            >
              <h1> Venue Partner</h1>
              <img className="imgg" src={clglogo} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer bgColor="#cbcaa5" />
    </>
  );
};

export default Sponsers;
