import React from "react";
import nzflag from "../../assets/NavBar/NZFlag.png";
import maoriflag from "../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../assets/NavBar/LevelUpWorks-blue.png";

import styles from "./TeacherDashboardNavbar.module.css";

export default function TeacherDashboardNavbar(props) {
  return (
    <React.Fragment>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img
            onClick={() => {
              window.location.href = "/";
            }}
            className={styles.level_up_img}
            src={levelUp}
            alt=""
          />
        </li>
        <div className={styles.nav_link}>
          <li className={styles.li}>
            <button className={styles.button_help}>Help Center</button>
          </li>

          <li className={styles.li}>
            <button className={styles.button_more}>More Project</button>
          </li>
        </div>

        <li className={`${styles.li} `}>
          <div className={styles.right_div}>
            <div className={styles.flags}>
              <img src={nzflag} alt="" />
              <img src={maoriflag} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}
