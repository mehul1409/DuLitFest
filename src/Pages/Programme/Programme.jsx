import PageHeader from "../../Components/PageHeader/PageHeader";
import EventDetailsDay1 from "../../assets/data/EventDetailsDay1";
import EventDetailsDay2 from "../../assets/data/EventDetailsDay2";
import EventDetailsDay3 from "../../assets/data/EventDetailsDay3";
import "./Programme.scss";
const Programme = () => {
  return (
    <>
      <PageHeader heading="Programme" bgColor="" />
      <div className="outer-1">

        <div className="box-1">
          <div className="Day1">
            Day-1 -19th January,2024
          </div>
          <ul>
            {EventDetailsDay1.map((event, index) => (
              <div className="one" key={index}>
                <div className="top">
                  <p>{event.time}</p>
                  <p>{event.Place}</p>
                </div>
                <h1> {event.Event_Name}</h1>
                <p> {event.Address}</p>
              </div>
            ))}
          </ul >

        </div>
        <div className="box-1">
          <div className="Day2">
            Day-2 -20th January,2024
          </div>
          <ul>
            {EventDetailsDay2.map((event, index) => (
              <div className="one" key={index}>
                <div className="top">
                  <p>{event.time}</p>
                  <p>{event.Place}</p>
                </div>
                <h1> {event.Event_Name}</h1>
                <p> {event.Address}</p>
              </div>
            ))}
          </ul >
        </div >
        <div className="box-1">
          <div className="Day3">
            Day-3 -20th January,2024
          </div>
          <ul>
            {EventDetailsDay3.map((event, index) => (
              <div className="one" key={index}>
                <div className="top">
                  <p>{event.time}</p>
                  <p>{event.Place}</p>
                </div>
                <h1> {event.Event_Name}</h1>
                <p> {event.Address}</p>
              </div>
            ))}
          </ul >
        </div >
      </div>
    </>
  );
};

export default Programme;
