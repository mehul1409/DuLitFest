import ExploreCard from "../../Components/ExploreCard/ExploreCard";
import "./Home.scss";
import hometoppic from "./hometoppic.png";
import Footer from "../../Components/Footer/Footer";
import Ticket from "../../Components/Ticket/Ticket";
import { motion } from "framer-motion";
import clouds2 from './clouds2.png'
import phonecloud2 from './phonecloud2.png'

const Home = () => {
  return (
    <>
      <div className="home-cont-hero">
        <div className="home-hero">
          <img src={hometoppic} alt="" id="homeimg" />
        </div>
        {/* <div className="before-about"></div> */}
        
        
        <img src={clouds2} alt="clouds" className="clouds" />
        <img src={phonecloud2} alt="clouds" className="phoneclouds" />
        <div className="cloud-img-container">
        </div>
        <div className="cloud-img-container2"></div>
       
        <ExploreCard />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="home-about"
        >
          <div id="ribbon-bottom">
            <header className="ribbon-container">
              {/* <h1></h1> */}
              <h2 className="ribbon">
                <a className="ribbon-content">About Us</a>
              </h2>
              <div className="underpage">
                <div className="about-us">
                  <div className="about-us1">
                    Following the well-received inaugural Delhi University
                    Literature Festival, which featured engaging speaker
                    sessions, literary contests, and insightful book talks
                    commemorating DU's centennial and India's G20 leadership, we
                    are thrilled to announce an even more expansive, inclusive,
                    and lively second edition.
                  </div>
                  <div className="about-us1">
                    Officiated by the University of Delhi, we are
                    well-positioned to establish this as the nation's foremost
                    and largest student-led literary event. Set against the
                    backdrop of Delhi's brisk January ambiance, we are curating
                    a three-day literary fiesta at DU's esteemed Shri Ram
                    College of Commerce in the North Campus, scheduled for
                    January 19th to 21st, 2024. Nestled within this historic
                    institution, our aim is not only to celebrate literature but
                    also to infuse it with renewed vigour and enthusiasm.
                  </div>

                  <div className="about-us1">
                    The festival promises a diverse array of activities,
                    including author dialogues, curated panel discussions,
                    engaging workshops, shopping and culinary delights,
                    captivating musical performances, platforms for emerging
                    literary talent, curated book exhibitions, competitions, and
                    more.
                  </div>

                  <div className="aboutus1">
                    We are privileged to once again receive the guidance of Mr.
                    Sanjeev Sanyal, Member of the Economic Advisory Council to
                    the Prime Minister, as our Festival Patron, and Dr. Swapan
                    Dasgupta, Padma Bhushan awardee, esteemed columnist, and
                    former Rajya Sabha MP, as the Festival Director.
                  </div>

                  <div className="about-us1">
                    Our vision is to establish this literary festival as a
                    cherished tradition and set the tradition in stone for
                    generations of DU students and literary enthusiasts to
                    celebrate and perpetuate their love for literature.
                  </div>
                </div>
              </div>
            </header>
          </div>
        </motion.div>

        <Ticket />
        <Footer />
      </div>
    </>
  );
};

export default Home;
