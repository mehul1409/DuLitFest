import ExploreCard from "../../Components/ExploreCard/ExploreCard";
import "./Home.scss";
import hometoppic2 from "./hometoppic2.png";
import Footer from "../../Components/Footer/Footer";
import Ticket from "../../Components/Ticket/Ticket";
import clouds2 from "./clouds2.png";
import phonecloud2 from "./phonecloud2.png";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <>
      <div className="home-cont-hero">
        <div className="home-hero">
          <img src={hometoppic2} alt="" id="homeimg" />
        </div>

        <div className="home-scroll">
          <div className="hh-cont">
            <img src={clouds2} alt="clouds" className="clouds" />
            <img src={phonecloud2} alt="clouds" className="phoneclouds" />
            <div className="hom-contt"></div>
          </div>

          <ExploreCard />
          <About />
          <Ticket />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
