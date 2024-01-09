import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Speakers.scss";
import SpeakersDetails from "../../assets/data/SpeakersDetails";
import SpeakerCard from "../../Components/SpeakerCard/SpeakerCard";
import Footer from "../../Components/Footer/Footer";

const Speakers = () => {
  return (
    <>
      <PageHeader
        bgColor="#aa4b6b"
        fgColor="rgba(185, 234, 255, 1)"
        heading="Speakers"
        textColor="white"
      />
      <div className="team_container ">
        <div className="card_container">
          {SpeakersDetails.map((speaker, index) => (
            <SpeakerCard
              key={index}
              imgUrl={speaker.imgUrl}
              name={speaker.name}
              tag={speaker.tag}
            />
          ))}
        </div>
      </div>
      {/* <div className="team_container">
        <div className="card_container">
          {SpeakersDetails.map((speaker, index) => (
            <SpeakerCard
              key={index}
              imgUrl={speaker.imgUrl}
              name={speaker.name}
              tag={speaker.tag}
            />
          ))}
        </div>
      </div> */}
      <Footer bgColor="rgba(185, 234, 255, 1)" />
    </>
  );
};

export default Speakers;
