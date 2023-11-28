import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import nzflag from "../../../../assets/NavBar/NZFlag.png";
import maoriflag from "../../../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../../../assets/NavBar/LevelUpWorks-white.png";
import ReactDom from "react-dom";
import { Backdrop } from "../Login/LoginSignup";
import { ModalContext } from "../../contexts/ModalContext";
import styles from "./NavbarMobile.module.css";
import { AuthContext } from "../../contexts/AuthContext";

// NAVBAR COMPONENT
export default function NavbarMobile(props) {
  const navigate = useNavigate();
  // state to check if side menu is open or closed
  const [showMenu, setShowMenu] = useState(false);
  const [sideMenuClass, setSideMenuClass] = useState(styles.side_menu);

  // Modal context import
  const { loginHandler, signupHandler } = useContext(ModalContext);

  // State to update navbar register section
  const [registerNav, setRegisterNav] = useState(
    <p onClick={loginHandler}>LOGIN</p>
  );
  // State to update side menu register section
  const [sideMenuRegister, setSideMenuRegister] = useState(
    <p onClick={signupHandler}>REGISTER</p>
  );

  // Auth context import to check if user is logged in as a teacher or student
  const { handleTokenCheckStudent, handleTokenCheckTeacher } =
    useContext(AuthContext);

  // Function to check if user is logged in as a teacher  before accessing teacher profile
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
      navigate(`/Project-library`);
    } else {
      alert("You need to be logged in as a student to access this page");
    }
  };

  //  function to handle side menu scroll
  const handleSideMenu = () => {
    setSideMenuClass(styles.side_menu_off);
    setTimeout(() => {
      setShowMenu(false);
      setSideMenuClass(styles.side_menu);
    }, 1000);
  };

  // USEEFFECT FOR SIDE MENU REGISTER BUTTON OR PROFILE BUTTON
  useEffect(() => {
    if (localStorage.getItem("studentToken")) {
      setSideMenuRegister(<p onClick={checkStudentAuth}>PROFILE</p>);
    } else if (localStorage.getItem("teacherToken")) {
      setSideMenuRegister(<p onClick={checkTeacherAuth}>PROFILE</p>);
    } else {
      setSideMenuRegister(<p onClick={signupHandler}>REGISTER</p>);
    }
  }, []);

  // SIDE MENU JSX ELEMENT
  const sideMenu = (
    <div className={sideMenuClass} onClick={handleSideMenu}>
      <ul className={styles.ul_side_menu}>
        <li onClick={handleSideMenu} className={styles.li}>
          HOME
        </li>
        <li className={styles.li}>
          <Link to="/">FEATURES</Link>
        </li>
        <li className={styles.li}>
          <p onClick={checkTeacherAuth}>TEACHERS</p>
        </li>
        <li>
          <div className={styles.register_side_menu}>
            {sideMenuRegister}

            {registerNav}
          </div>
        </li>
        <li>
          <div className={styles.flags_side_menu}>
            <p>LANG</p>
            <img src={nzflag} alt="" />
            <img src={maoriflag} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );

  // useEffect to check if user is logged in as a teacher or student before updating navbar Register Section

  useEffect(() => {
    if (localStorage.getItem("studentToken")) {
      setRegisterNav(
        <p
          onClick={() => {
            localStorage.removeItem("studentToken");
            window.location.reload();
          }}
        >
          LOGOUT
        </p>
      );
    } else if (localStorage.getItem("teacherToken")) {
      setRegisterNav(
        <p
          onClick={() => {
            localStorage.removeItem("teacherToken");
            window.location.reload();
          }}
        >
          LOGOUT
        </p>
      );
    } else {
      setRegisterNav(<p onClick={loginHandler}>LOGIN</p>);
    }
  }, []);

  return (
    <React.Fragment>
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

        <li className={`${styles.li} `}>
          <div className={styles.right_div}>
            <div className={styles.register}>
              {registerNav}
              <i
                onClick={() => setShowMenu(!showMenu)}
                className={`fa-solid fa-burger ${styles.burger}`}
              ></i>
            </div>
          </div>
        </li>
      </ul>
      {showMenu ? (
        <>
          {ReactDom.createPortal(
            sideMenu,
            document.getElementById("side-menu")
          )}
          {ReactDom.createPortal(
            <Backdrop />,
            document.getElementById("backdrop")
          )}
        </>
      ) : null}
    </React.Fragment>
  );
}
