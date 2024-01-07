import "./Footer.scss";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import wave1 from './wave1.png'

const Footer = () => {
  return (
    <>
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ backgroundColor: "transparent" }}>
        <path
          className="bg-transparent"
          fill="#1f2937"
          fill-opacity="1"
          d="M0,64L120,101.3C240,139,480,213,720,234.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
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
          <div className="space-y-2 text-sm">
            <p className="text-xl font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@lorem.mail
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
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
          <p className="text-sm text-white">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
