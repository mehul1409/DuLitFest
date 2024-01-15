import React, { useRef, useState } from "react";
import "./RegisterForm.scss";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { motion } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    profession: "",
    checkboxes: {
      option1: false,
      option2: false,
      option3: false,
    },
  });
  const formRef = useRef(null);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    profession: "",
    checkboxes: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? { ...prevData[name], [value]: checked } : value,
    }));
  };

  const checkEmailExists = async (email) => {
    try {
      const day1Query = query(
        collection(db, "Day1"),
        where("email", "==", email)
      );
      const day2Query = query(
        collection(db, "Day2"),
        where("email", "==", email)
      );
      const day3Query = query(
        collection(db, "Day3"),
        where("email", "==", email)
      );

      const [day1Docs, day2Docs, day3Docs] = await Promise.all([
        getDocs(day1Query),
        getDocs(day2Query),
        getDocs(day3Query),
      ]);

      const day = day1Docs.size > 0 || day2Docs.size > 0 || day3Docs.size > 0;
      if (day === true) {
        if (day1Docs.size > 0) {
          return "1";
        } else if (day2Docs.size > 0) {
          return "2";
        } else if (day3Docs.size > 0) {
          return "3";
        }
      }
      return false;
    } catch (error) {
      console.error("Error checking email existence: ", error);
      // Log the specific error for better debugging
      toast.error("Error checking email existence. See console for details", {
        position: toast.POSITION.TOP_CENTER,
        className: "custom-toast-error",
      });
      return false; // Assume email doesn't exist in case of an error
    }
  };

  const addToFirestore = async (formData) => {
    try {
      console.log("Adding your data to database");
      if (formData.checkboxes.option1) {
        const docRef = await addDoc(collection(db, "Day1"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        //console.log("Document written with ID: ", docRef.id);
      }
      if (formData.checkboxes.option2) {
        const docRef = await addDoc(collection(db, "Day2"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        // console.log("Document written with ID: ", docRef.id);
      }
      if (formData.checkboxes.option3) {
        const docRef = await addDoc(collection(db, "Day3"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        // console.log("Document written with ID: ", docRef.id);
      }
      // toast("Registered Successfully");
      toast.success("Registered Successfully", {
        position: toast.POSITION.TOP_CENTER,
        className: "custom-toast-success",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Encountered some error, Please try again", {
        position: toast.POSITION.TOP_CENTER,
        className: "custom-toast-error",
      });
      // alert("Encountered some error, Please try again");
    }
  };
  const addToGoogleSheet = async (Data) => {
    const formData = new FormData(formRef.current);
    console.log("Entered google send function");

    const postToGoogleSheet = async (url) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        console.log("Response Status:", response.status);

        if (!response.ok) {
          // Handle non-successful responses
          console.error("Error:", response.statusText);
          throw new Error("Failed to send data to Google Sheet");
        }

        const responseData = await response.text();
        console.log("Response Data:", responseData);
      } catch (error) {
        console.error("Error:", error.message);
        throw error; // Rethrow the error for further handling if needed
      }
    };

    if (Data.checkboxes.option1) {
      try {
        await postToGoogleSheet(
          "https://script.google.com/macros/s/AKfycbzw2ZQOme_P3LRcIG4NQius9SJQS437zTsK1C9xn28pnIYslz0hSSMxz5p0GD470y0b/exec"
        );
      } catch (error) {
        console.log("Retrying with an alternative URL for option1");
        try {
          await postToGoogleSheet(
            "https://script.google.com/macros/s/AKfycbzW69SbEzn5AtU1W7NkBjx99pDip7VzkBgslwXC5uLavGVpejnm5WuuW5-OTQTnAjxS/exec"
          );
        } catch (retryError) {
          console.error("Failed to send data for option1:", retryError.message);
          // Handle the error, perhaps by notifying the user or logging
        }
      }
    }

    if (Data.checkboxes.option2) {
      try {
        await postToGoogleSheet(
          "https://script.google.com/macros/s/AKfycbwPnVdfR-Zwhj76IJ1SWy-gGm85px9Juov0cjZ25Uc9CmGJG6qlO-jEKWr8_GfpAcgO/exec"
        );
      } catch (error) {
        console.log("Retrying with an alternative URL for option2");
        try {
          await postToGoogleSheet(
            "https://script.google.com/macros/s/AKfycbyllvSghOdeOdcwiZ81I77dVuk94m1UMOeEKlriwOERJpoBj524G5DC99FhbrqZoCBx/exec"
          );
        } catch (retryError) {
          console.error("Failed to send data for option2:", retryError.message);
          // Handle the error, perhaps by notifying the user or logging
        }
      }
    }

    if (Data.checkboxes.option3) {
      try {
        await postToGoogleSheet(
          "https://script.google.com/macros/s/AKfycbxc6epjgg3xtGpAq2UdP4u5xXV3KC1BSByorgQL0uBlvS7_Zc-9lRzw-9y9QU74sMbopQ/exec"
        );
      } catch (error) {
        console.log("Retrying with an alternative URL for option3");
        try {
          await postToGoogleSheet(
            "https://script.google.com/macros/s/AKfycby97wHs4404UPlMlN5GcGYwU5EnpvW25GQjKqy-REXNTUeCfwOy41ei5161_M--SsKt/exec"
          );
        } catch (retryError) {
          console.error("Failed to send data for option3:", retryError.message);
          // Handle the error, perhaps by notifying the user or logging
        }
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || +formData.age <= 0) {
      errors.age = "Invalid age";
    }
    if (!formData.gender.trim()) {
      errors.gender = "Gender is required";
    }
    if (!formData.profession.trim()) {
      errors.profession = "College/Profession is required";
    }

    if (!Object.values(formData.checkboxes).some((isChecked) => isChecked)) {
      errors.checkboxes = "At least one checkbox must be selected";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted:", formData);
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        toast.error(`User Already Registered`, {
          position: toast.POSITION.TOP_CENTER,
          className: "custom-toast-error",
        });
        return; // Stop execution if email exists
      }
      const send1 = await addToFirestore(formData);
      const send2 = await addToGoogleSheet(formData);
      //reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        profession: "",
        checkboxes: {
          option1: false,
          option2: false,
          option3: false,
        },
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="RegistrationPage">
        <div className="RegistrationPageSection">
          <div className="regisGuidelineSection">
            <div className="GuidelineContainer">
              <div className="RegistrationPageHeader">
                <div className="RegistrationPageHeaderSectionHeader_text">
                  <div className="RegistrationPageHeaderSectionHeader_text_text-content">
                    Rules of the DU Literature Festival
                  </div>
                  <div className="RegistrationPageHeaderUnderline"></div>
                </div>
              </div>
              <div className="regisGuidelines">
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Registration & Entry to the venue are on a First Come, First
                    Serve basis.
                  </li>
                  <li>
                    Entry to the venue may temporarily closed to avoid
                    overcrowding and/or keeping in view the security
                    requirements.
                  </li>
                  <li>
                    Entry to non-SRCC students will be from Gate No. 2 of the
                    College only.
                  </li>
                  <li>
                    For SRCC students, entry will be from Gate No. 3 of the
                    College.
                  </li>
                  <li>
                    Please carry your College ID and Government ID to the venue
                    for entry.
                  </li>
                  <li>
                    Keep your IDs handy at the Entry Gate for ready reference at
                    the Registration Counter. Your ID will be matched against
                    your registered ID filled at the time of registration.
                  </li>
                  <li>
                    You would be given identification bands/ID cards at the
                    Registration Desk at the venue after registration. Kindly
                    wear them for the duration of the Literature Fest inside the
                    Campus.
                  </li>
                  <li>
                    Heavy Baggage is not allowed at the festival venue due to
                    security protocols.
                  </li>
                  <li>
                    Bringing alcohol, Drugs, and any other narcotic substance
                    would lead you to be immediately ejected out of the
                    Festival.
                  </li>
                  <li>
                    Kindly observe general discipline and decorum. Be mindful of
                    the classes ongoing during the Literature Fest.
                  </li>
                  <li>
                    Parking at the venue is highly limited. We strongly
                    encourage attendees to use public transport.
                  </li>
                  <li>
                    Entry to the Statue Lawn, Stadium and the SRCC Main building
                    is restricted for outsiders.
                  </li>
                  <li>
                    We are aiming for a 100% ecologically sustainable event.
                    Kindly do not litter in the venue.
                  </li>
                  <li>
                    Please carry your own water bottles to help us further
                    reduce the ecological footprint of the event.
                  </li>
                  <li>
                    This is an event for appreciation of literature and literary
                    thought. Therefore, political activity of any kind is highly
                    prohibited during the course of the festival. 
                  </li>
                  <li>
                    For smooth and meaningful functioning of the programme,
                    kindly follow the instructions as given by the Organizing
                    team. 
                  </li>
                  <li>
                    The discretion of the Organizing team and SRCC over any
                    issue pertaining to the festival shall be final.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="regis">
            <div className="RegistrationPageHeader">
              <div className="RegistrationPageHeaderSectionHeader_text">
                <div className="RegistrationPageHeaderSectionHeader_text_text-content">
                  Registration Form
                </div>
                <div className="RegistrationPageHeaderUnderline"></div>
              </div>
            </div>

            <motion.form
              ref={formRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="registration-form"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className="reginput"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.name}</p>
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  className="reginput"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>

              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  className="reginput"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.phone}</p>
              </div>

              <div>
                <label htmlFor="age">Age:</label>
                <input
                  className="reginput"
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.age}</p>
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  className="reginput"
                  id="gender"
                  name="gender"
                  placeholder="Select Gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                  <option value="Perfer Not To Say">Prefer Not to Say</option>
                </select>
                <p className="error">{formErrors.gender}</p>
              </div>

              <div>
                <label htmlFor="profession">College/Profession:</label>
                <input
                  className="reginput"
                  type="text"
                  id="profession"
                  name="profession"
                  placeholder="Enter your college/profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                />
                <p className="error">{formErrors.profession}</p>
              </div>

              <div className="form-group">
                <label>Days you will be attending the fest:</label>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 1</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option1"
                      checked={formData.checkboxes.option1}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 2</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option2"
                      checked={formData.checkboxes.option2}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="checkbox-group">
                  <label className="dayylab">
                    <div className="dareg">
                      <li className="reglist">Day 3</li>
                    </div>
                    <input
                      className="dayregi"
                      type="checkbox"
                      name="checkboxes"
                      value="option3"
                      checked={formData.checkboxes.option3}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <p className="error">{formErrors.checkboxes}</p>
              </div>

              <div className="heyreg">
                <button className="regbtn" onClick={handleFormSubmit}>
                  Register
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
