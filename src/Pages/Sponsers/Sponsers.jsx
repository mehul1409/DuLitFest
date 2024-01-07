import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import picc2 from './picc2.png'
import clglogo from './clglogo.png'
import "./Sponsers.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {
  return (
    <>
      <div className="Sponsersbody">
        <PageHeader heading="Our Partners" />
        <div className="middle">
          <div className="sponsers">
            <div className='box-1'>
              <h1>Venue Partner</h1>
              <img src={picc2} alt='' />
            </div>
            <div className='box-2'>
              <h1>Title Parter</h1>
              <img src={clglogo} alt='' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsers;
