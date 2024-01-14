import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Sponsers.scss";
import sponsersdetail from "./sponsers";

const Sponsers = () => {
  return (
    <>
      <PageHeader bgColor="#334d50" fgColor="#cbcaa5" heading="Our Partners" />
      <div className="sponsersContainer">
        <div className="sponsers">
          {sponsersdetail.map((sponsers, index) => (
            <div className="partners" key={index}>
              <div className="partnerstitle">{sponsers.title}</div>
              <div className="partnersLogo">
                <img src={sponsers.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer bgColor="#cbcaa5" />
    </>
  );
};

export default Sponsers;
