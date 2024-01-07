import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Sponsers.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {
  const images = [
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
    "/assets/images/Logo.svg",
  ];

  return (
    <>
      <div className="Sponsersbody">
        <PageHeader heading="Sponsers" />
        <div className="middle">
          <div className="sponsers">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Sponser ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsers;
