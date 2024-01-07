import ExploreCard from "../../Components/ExploreCard/ExploreCard";
import "./Home.scss";
import homeHero from "./homeHero.png";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-hero">
        <img src={homeHero} alt="" id="homeimg" />
      </div>
      <ExploreCard/>
      <Footer />
    </>
  );
};

export default Home;
