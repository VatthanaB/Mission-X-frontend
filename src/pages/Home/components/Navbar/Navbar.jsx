import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import nzflag from "../../../../assets/NavBar/NZFlag.png";
import maoriflag from "../../../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../../../assets/NavBar/LevelUpWorks-white.png";
import avatar from "../../../../assets/NavBar/Avatar-white.png";
import styles from "./Navbar.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

// NAVBAR COMPONENT
export default function Navbar(props) {
  const navigate = useNavigate();
  // Modal context import to display signup component
  const { loginHandler, signupHandler } = useContext(ModalContext);

  // Auth context import to check if user is logged in as a teacher or student
  const { handleTokenCheckStudent, handleTokenCheckTeacher } =
    useContext(AuthContext);

  // State to update navbar register section 🦄
  const [register, setRegister] = useState(
    <div className={styles.register}>
      <img className={styles.avatar_img} src={avatar} alt="" />
      <p onClick={signupHandler}>REGISTER</p>
      <span>|</span>
      <p onClick={loginHandler}>LOGIN</p>
    </div>
  );

  // Function to check if user is logged in as a teacher  before accessing teacher profile 🦄
  const checkTeacherAuth = () => {
    const check = handleTokenCheckTeacher();
    if (check) {
      navigate(`/Teacher-profile`);
    } else {
      alert("You need to be logged in as a teacher to access this page");
    }
  };

  // Function to check if user is logged in as a student before accessing student profile
  const checkStudentAuth = () => {
    const check = handleTokenCheckStudent();
    if (check) {
      window.location.href = `/Project-library`;
    } else {
      alert("You need to be logged in as a student to access this page");
    }
  };

  // useEffect to check if user is logged in as a teacher or student before updating navbar Register Section 🦄

  useEffect(() => {
    if (localStorage.getItem("studentToken")) {
      setRegister(
        <div className={styles.register}>
          <img
            onClick={checkStudentAuth}
            className={styles.avatar_img}
            src={avatar}
            alt=""
          />
          <p onClick={checkStudentAuth}>STUDENT PROJECTS</p>
          <span>|</span>
          <p
            onClick={() => {
              localStorage.removeItem("studentToken");
              window.location.reload();
            }}
          >
            LOGOUT
          </p>
        </div>
      );
    } else if (localStorage.getItem("teacherToken")) {
      setRegister(
        <div className={styles.register}>
          <img
            onClick={checkTeacherAuth}
            className={styles.avatar_img}
            src={avatar}
            alt=""
          />
          <p onClick={checkTeacherAuth}>TEACHER PROFILE</p>
          <span>|</span>
          <p
            onClick={() => {
              localStorage.removeItem("teacherToken");
              window.location.reload();
            }}
          >
            LOGOUT
          </p>
        </div>
      );
    } else {
      setRegister(
        <div className={styles.register}>
          <img className={styles.avatar_img} src={avatar} alt="" />
          <p onClick={signupHandler}>REGISTER</p>
          <span>|</span>
          <p onClick={loginHandler}>LOGIN</p>
        </div>
      );
    }
  }, []);

  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img
            onClick={() => {
              navigate("/");
            }}
            className={styles.level_up_img}
            src={levelUp}
            alt=""
          />
        </li>
        <div className={styles.nav_link}>
          <li className={styles.li}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.li}>
            <p>FEATURES</p>
          </li>
          <li onClick={checkTeacherAuth} className={styles.li}>
            <p>TEACHERS</p>
          </li>
        </div>

        <li className={`${styles.li} `}>
          <div className={styles.right_div}>
            <div className={styles.flags}>
              <p>LANG</p>
              <img src={nzflag} alt="" />
              <img src={maoriflag} alt="" />
            </div>
            {register}
          </div>
        </li>
      </ul>
    </div>
  );
}
