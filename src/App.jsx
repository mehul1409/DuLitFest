import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Speakers from "./Pages/Speakers/Speakers";
import Programme from "./Pages/Programme/Programme";
import Register from "./Pages/Register/Register";
import Sponsers from "./Pages/Sponsers/Sponsers";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import Loader from "./Components/Loader/Loader";

const App = () => {
  // const [loading, setloading] = useState(true);
  // const loadcontent = () => {
  //   setloading(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("load" , loadcontent);
  //   return  () => {window.removeEventListener("load" , loadcontent)}
  // }, []);

  // return loading ? (
  //   <Loader />
  // ) : (
  //   <>
  //     <Navbar />
  //     <ScrollToTop />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/speakers" element={<Speakers />} />
  //       <Route path="/programme" element={<Programme />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/sponsers" element={<Sponsers />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //   </>
  // );

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sponsers" element={<Sponsers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
};

export default App;
