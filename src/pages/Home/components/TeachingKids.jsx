import React from "react";
import styles from "./TeachingKids.module.css";
import group1 from "../../../assets/Home/Group 1.png";
import group2 from "../../../assets/Home/Group 2.png";
import group3 from "../../../assets/Home/Group 3.png";
import group4 from "../../../assets/Home/Group 4.png";

export default function TeachingKids() {
  return (
    <div className={styles.main_div}>
      <h2>
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h2>
      <div className={styles.img_div}>
        <div className={styles.img_div1}>
          <img src={group1} alt="group1" />
          <img src={group2} alt="group1" />
        </div>
        <div className={styles.img_div2}>
          <img src={group3} alt="group1" />
          <img src={group4} alt="group1" />
        </div>
      </div>
    </div>
  );
}
