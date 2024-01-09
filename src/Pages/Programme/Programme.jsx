import PageHeader from "../../Components/PageHeader/PageHeader";
import EventDetailsDay1 from "../../assets/data/EventDetailsDay1";
import EventDetailsDay2 from "../../assets/data/EventDetailsDay2";
import EventDetailsDay3 from "../../assets/data/EventDetailsDay3";
import { motion } from "framer-motion";
import "./Programme.scss";
import Footer from "../../Components/Footer/Footer";

const Programme = () => {
  return (
    <>
      <PageHeader bgColor="#808080" fgColor="rgb(251, 219, 208, 1)" heading="Programme" />
      <div className="hello">
        <div className="outer-1">
          <motion.div
            // initial={{ x: '-100vw' }}
            // animate={{ x: '0.7vw' }}
            // transition={{ duration: 1 }}
            className="box-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
              className="Day1"
            >
              Day - 1 - 19th January, 2024
            </motion.div>
            <ul>
              {EventDetailsDay1.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="one"
                  key={index}
                  style={{
                    backgroundColor:
                      event.Place === "Shridhar Shriram Auditorium"
                        ? "pink"
                        : "yellow",
                  }}
                >
                  <div className="top">
                    <p>{event.time}</p>
                    <p>{event.Place}</p>
                  </div>
                  <h1> {event.Event_Name}</h1>
                  <p> {event.Address}</p>
                </motion.div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            // initial={{ x: '-100vw' }}
            // animate={{ x: '0.7vw' }}
            // transition={{ duration: 2 }}
            className="box-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="Day1"
            >
              Day - 2 - 20th January, 2024
            </motion.div>
            <ul>
              {EventDetailsDay2.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="one"
                  key={index}
                  style={{
                    backgroundColor:
                      event.Place === "Shridhar Shriram Auditorium"
                        ? "pink"
                        : "yellow",
                  }}
                >
                  <div className="top">
                    <p>{event.time}</p>
                    <p>{event.Place}</p>
                  </div>
                  <h1> {event.Event_Name}</h1>
                  <p> {event.Address}</p>
                </motion.div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            // initial={{ x: '-100vw' }}
            // animate={{ x: '0.7vw' }}
            // transition={{ duration: 2 }}
            className="box-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="Day1"
            >
              Day - 3 - 20th January, 2024
            </motion.div>
            <ul>
              {EventDetailsDay3.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="one"
                  key={index}
                  style={{
                    backgroundColor:
                      event.Place === "Shridhar Shriram Auditorium"
                        ? "pink"
                        : "yellow",
                  }}
                >
                  <div className="top">
                    <p>{event.time}</p>
                    <p>{event.Place}</p>
                  </div>
                  <h1> {event.Event_Name}</h1>
                  <p> {event.Address}</p>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
        <Footer bgColor="rgb(251, 219, 208, 1)" />
      </div>
    </>
  );
};

export default Programme;
