import React, { useContext } from "react";
import styles from "./CTA.module.css";
import classroom from "../../../assets/Home/classroom.png";
import { ModalContext } from "../contexts/ModalContext";

export default function CTA(props) {
  // Modal context import to display signup component
  const { signupHandler } = useContext(ModalContext);
  return (
    <div className={styles.main_div}>
      <div className={styles.img_div}>
        <img src={classroom} alt="Classroom img" />
      </div>

      <div className={styles.cta_Text_div}>
        <div className={styles.cta_text}>
          <h1>What are you waiting for ?</h1>
          <h2>Start teaching Digital Technologies today.</h2>
          <p>
            if you need more information, we are happy to answer any questions
            you may have.
          </p>
          <div className={styles.button_div}>
            <button className={styles.btn_enquire}>ENQUIRE NOW</button>
            <button onClick={signupHandler} className={styles.btn_sign}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
