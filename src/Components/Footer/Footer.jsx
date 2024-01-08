import "./Footer.scss";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import wave1 from "./wave1.png";

const Footer = (props) => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  style={{ backgroundColor: props.bgColor }}><path fill="#1f2937" fillOpacity="1" d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,245.3C480,256,549,224,617,181.3C685.7,139,754,85,823,74.7C891.4,64,960,96,1029,128C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

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
      <div className="px-4 pt-2 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 bg-gray-800 text-white">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
          <div className="sm:col-span-2 text-white">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/assets/images/Logo.svg" alt="logo" className="h-28" />
              <span className="ml-2 w-20 text-xl font-bold tracking-wide text-white uppercase">
                Delhi University Literature Festival
              </span>
            </a>
          </div>
          <div className="space-y-2 text-sm ">
            <p
              className="text-xl font-bold tracking-wide text-white"
              id="paragraph"
            >
              Contacts
            </p>
            <div className="flex">
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
            </div>
            <div className="flex ">
              <p className="mr-1 text-white " id="paragraph">
                Email:
              </p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                contact@dulitfest.org
              </a>
            </div>
            <div className="flex ">
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
                University of Delhi, Maurice Nagar, Roop Nagar, New Delhi, Delhi, 110007
              </a>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-whitetransition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <CiInstagram className="text-3xl" />
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white " id="paragraph">
            © Copyright 2024 DU LitFest. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
