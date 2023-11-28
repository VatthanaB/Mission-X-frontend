import React from "react";

import nzflag from "../../../assets/NavBar/NZFlag.png";
import maoriflag from "../../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../../assets/NavBar/LevelUpWorks-white.png";

import styles from "./NavbarProject.module.css";

export default function Navbar(props) {
  const studentDB = props.studentDB;

  return (
    <React.Fragment>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img
            onClick={() => (window.location.href = "/")}
            className={styles.level_up_img}
            src={levelUp}
            alt=""
          />
        </li>
        <div className={styles.nav_link}>
          <li className={styles.li}>
            <a href="/">HOME</a>
          </li>
          <li className={styles.li}>
            <a href="/">FEATURES</a>
          </li>
          <li className={styles.li}>
            <a
              onClick={() => {
                alert("Please login as Teacher to access this page");
              }}
              href="/"
            >
              TEACHERS
            </a>
          </li>
        </div>

        <li className={`${styles.li} `}>
          <div className={styles.right_div}>
            <div className={styles.flags}>
              <p>LANG</p>
              <img src={nzflag} alt="" />
              <img src={maoriflag} alt="" />
            </div>
            <div className={styles.register}>
              <img
                className={styles.avatar_img}
                src={`/images/students/${studentDB.profile_pic}`}
                alt="teacherPicture"
              />
              <p onClick={() => (window.location.href = "/Student-Profile")}>
                {studentDB.name}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}
