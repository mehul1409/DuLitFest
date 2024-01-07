import LandingPage from "../../Components/LandingPage/LandingPage";
import "./Home.scss";
import homeHero from './homeHero.png'

const Home = () => {

  return (
  <>
    <div className="home-hero">
      <img src={homeHero} alt="" id="homeimg"/>
    </div>
  </>
  );

};

export default Home;
