import LandingPage from "../../Components/LandingPage/LandingPage";
import "./Home.scss";
import homeHero from "./homeHero.png";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-hero">
        <img src={homeHero} alt="" id="homeimg" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
