import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.loader_body}>
        {/* <div className={styles.spinner_container}> */}

        {/* </div> */}
        {/* <div className='loadbox'> */}
        <img
          src="/assets/images/Logo.svg"
          alt="Please-wait"
          className={styles.loader_du_img}
        ></img>
        {/* </div> */}
      </div>
    </>
  );
};

export default Loader;
