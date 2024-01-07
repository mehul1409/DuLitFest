import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Speakers.scss";
import SpeakersDetails from "../../assets/data/SpeakersDetails";
import SpeakerCard from "../../Components/SpeakerCard/SpeakerCard";
import Footer from "../../Components/Footer/Footer";

const Speakers = () => {
  return (
    <>
      <PageHeader heading="Speakers" bgColor="
#536976
" fgColor="
#bbd2c5" textColor="white" />
      {/* <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      <div className="team_container">
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
      <Footer bgColor="#536976" />
    </>
  );
};

export default Speakers;
