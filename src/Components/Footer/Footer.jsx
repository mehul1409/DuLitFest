import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";
import phonefoot from "./phonefoot.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = (props) => {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ duration: 1.5, delay: 0.3 }}
    //       viewport={{ once: true }}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ backgroundColor: props.bgColor }}
      >
        <path
          fill="rgb(62, 0, 103)"
          fillOpacity="1"
          d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,245.3C480,256,549,224,617,181.3C685.7,139,754,85,823,74.7C891.4,64,960,96,1029,128C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ backgroundColor: "prop.bgColor" }}
      >
        <path
          className="bg-transparent"
          fill={props.fgColor}
          fillOpacity="1"
          d="M0,64L120,101.3C240,139,480,213,720,234.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      {/* <div className= "svgfooter"> */}
      {/* <img src={wave1} alt="wave" style={{mixBlendMode: "multiply"}} /> */}
      {/* </div> */}
      <div className="design-underline"></div>
      <div className="px-4 py-2 mx-auto sm:max-w-full md:max-w-full lg:max-w-full  Colorbg-backgroundColor text-white">
        <div
          className="flex flex-col-reverse items-start lg:flex-row md:flex-row md:justify-between text-white py-4 md:py-0 "
          style={{ marginRight: "2%" }}
        >
          <div className="sm:col-span-2 text-white mr-8 md:mr-0 mt-4">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <img
                src="/assets/images/Logo.svg"
                alt="logo"
                className="h-20 md:h-28"
              />
              <span className="ml-2 mr-10 md:mr-0 md:w-20 text-md font-bold tracking-wide text-white uppercase md:text-xl">
                Delhi University Literature Festival
              </span> */}
              <img src={phonefoot} alt="logo" className="phonefoot" />
            </a>
          </div>
          <div className="space-y-2 text-sm pt-2">
            <p
              className="text-2xl font-bold tracking-wide text-white"
              id="paragraph"
            >
              Contact us
            </p>
            {/* <div className="flex">
              <p className="mr-1 text-white " id="paragraph">
                Phone:
              </p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                8595842343
              </a>
            </div> */}
            <div className="flex">
              <p className="mr-1 mb-2 text-white " id="paragraph">
                Email :
              </p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                id="foot-contact"
              >
                contact@dulitfest.org
              </a>
            </div>
            {/* <div className="flex ">
              <p className="mr-1 text-white " id="paragraph">
                Address:
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                University of Delhi, Maurice Nagar, Roop Nagar, New Delhi,
                Delhi, 110007
              </a>
            </div> */}
          </div>
          <div className="pt-4">
            <span className="text-2xl font-bold text-white " id="footsocial">
              Follow us
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://www.instagram.com/dulitfest?igsh=M2swdHU0ZG5odWli"
                className="text-whitetransition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/delhi-university-literature-festival/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaLinkedinIn className="text-2xl text-white" />
              </a>
              <a
                href="https://x.com/dulitfest?t=q9T6I9tY6MVR_Unh8NtJOg&s=09"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                target="_blank"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className=" pt-1 pb-1 border-t ">
          <p className="text-sm text-white text-center">
            © Copyright 2024 DU LitFest. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
