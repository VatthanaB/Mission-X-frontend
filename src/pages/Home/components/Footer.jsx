import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.background}>
      <div className={styles.main_div}>
        <div className={styles.footer_col}>
          <h1>COMPANY</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Partners</p>
        </div>
        <div className={styles.footer_col}>
          <h1>COURSES</h1>
          <p>Register</p>
          <p>Login</p>
          <p>Projects</p>
          <p>Teachers</p>
          <p>Parents</p>
          <p>Ressources</p>
        </div>
        <div className={styles.footer_col}>
          <h1>SUPPORT</h1>
          <p>FAQs</p>
          <p>Helpdesk</p>
          <p>Contact Us</p>
        </div>
        <div className={styles.footer_col}>
          <h1>LEGAL</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.footer_col_special}>
          <h1>LevelUp Works</h1>
          <p>
            {" "}
            LevelUp Works is an Auckland-based enterprise dedicated to
            developing game-based learning software to help teachers in response
            to the New Zealand Digital Technologies & Hangarau Matihiko.
            alan@levelupworks.com (021) 668 185
          </p>
        </div>
      </div>
    </div>
  );
}
