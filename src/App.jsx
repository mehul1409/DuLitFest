import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import Speakers from "./Pages/Speakers/Speakers";
import Programme from "./Pages/Programme/Programme";
import Register from "./Pages/Register/Register";
import Sponsers from "./Pages/Sponsers/Sponsers";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";

import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import { lazy, Suspense } from "react";

// const Home = lazy(()=>import("./Pages/Home/Home"));
// const Speakers = lazy(()=>import("./Pages/Speakers/Speakers"));
// const Programme = lazy(()=>import("./Pages/Programme/Programme"));
// const Register = lazy(()=>import("./Pages/Register/Register"));
// const Sponsers = lazy(()=>import("./Pages/Sponsers/Sponsers"));
// const Contact = lazy(()=>import("./Pages/Contact/Contact"));


const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />
  }
  else {
    return (
      <>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sponsers" element={<Sponsers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </>
    )
  }
};

export default App;
