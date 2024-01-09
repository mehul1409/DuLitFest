
import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import EventDetailsDay1 from "../../assets/data/EventDetailsDay1";
import EventDetailsDay2 from "../../assets/data/EventDetailsDay2";
import EventDetailsDay3 from "../../assets/data/EventDetailsDay3";
import { motion } from "framer-motion";
import "./Programme.scss";
import Footer from "../../Components/Footer/Footer";

const Programme = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const getEventDetails = () => {
    switch (selectedDay) {
      case "Day1":
        return EventDetailsDay1;
      case "Day2":
        return EventDetailsDay2;
      case "Day3":
        return EventDetailsDay3;
      default:
        return [];
    }
  };

  return (
    <>
      <PageHeader bgColor="#808080" fgColor="rgb(251, 219, 208, 1)" heading="Programme" />
      <div className="hello">
        <div className="outer-1">
          <div className="day-buttons">
            <button className={selectedDay === "Day1" ? "activeDay" : ""} onClick={() => handleDayClick("Day1")}>Day 1</button>
            <button className={selectedDay === "Day2" ? "activeDay" : ""} onClick={() => handleDayClick("Day2")}>Day 2</button>
            <button className={selectedDay === "Day3" ? "activeDay" : ""} onClick={() => handleDayClick("Day3")}>Day 3</button>
          </div>
          <motion.div className="box-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="Day1"
            >
              {`Day - ${selectedDay.slice(-1)} - 19th January, 2024`}
            </motion.div>
            <ul>
              {getEventDetails().map((event, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="one"
                  key={index}
                  style={{
                    backgroundColor:
                      event.Place === "Shridhar Shriram Auditorium" ? "pink" : "yellow",
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
