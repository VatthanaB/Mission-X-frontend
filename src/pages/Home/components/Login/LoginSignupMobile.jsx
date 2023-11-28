import React, { useState, useContext, useEffect } from "react";
import esc from "../../../../assets/LoginSignup/esc.png";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";
import styles from "./LoginSignupMobile.module.css";
import { Backdrop } from "./LoginSignup";
import ReactDom from "react-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { SignUpStudentContext } from "../../contexts/SignUpStudentContext";
import { SignupTeacherContext } from "../../contexts/SignUpTeacherContext";
export default function LoginSignup(props) {
  // imports from SignUpTeacherContext
  const {
    handleSubmitTeacher,

    fullNameRefT,
    emailRefT,
    passwordRefT,
    confirmPasswordRefT,
    swapToLoginTeacher,
    setSwapToLoginTeacher,
  } = useContext(SignupTeacherContext);

  //  imports from SignUpStudentContext
  const {
    handleSubmitStudent,
    fullNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    swapToLoginStudent,
    setSwapToLoginStudent,
  } = useContext(SignUpStudentContext);

  // imports from AuthContext
  const [studentOrTeacher, setStudentOrTeacher] = useState(true); // true = student, false = teacher

  // imports from AuthContext
  const {
    emailTeacher,
    passwordTeacher,
    emailStudent,
    passwordStudent,
    setEmailTeacher,
    setPasswordTeacher,
    setEmailStudent,
    setPasswordStudent,
    handleLoginTeacherDB,
    handleLoginSudentDB,
  } = useContext(AuthContext);

  // imports from ModalContext
  const {
    loginDisplay,
    signupDisplay,
    crossHandler,
    loginHandler,
    signupHandler,
  } = useContext(ModalContext);

  // function to handle display of signup or login component
  const handleClickMobile = () => {
    crossHandler();
    setStudentOrTeacher(true);
  };

  // useEffect to check which component to display
  useEffect(() => {
    if (swapToLoginStudent) {
      loginHandler();
    }

    setSwapToLoginStudent(false);
  }, [swapToLoginStudent, loginHandler, setSwapToLoginStudent]);

  // useEffect to check which component to display
  useEffect(() => {
    if (swapToLoginTeacher) {
      loginHandler();
    }

    setSwapToLoginTeacher(false);
  }, [swapToLoginTeacher, loginHandler, setSwapToLoginTeacher]);

  // login component to diplay if loginDisplay && studentOrTeacher is true
  const loginWindowStudent = (
    <div className={styles.center}>
      <div className={styles.main_div}>
        <img
          onClick={handleClickMobile}
          className={styles.cross_image}
          src={esc}
          alt=""
        />

        <div className={styles.st}>
          <img src={students} alt="" />
          <h1>Students</h1>
          <div className={styles.login_sign_div}>
            <h2 className={styles.log_underline}>LOG IN</h2>
            <h2 onClick={signupHandler}>SIGN UP</h2>
          </div>

          {/* STUDEN LOGIN FORM */}
          <form className={styles.form} onSubmit={handleLoginSudentDB}>
            <input
              onChange={(e) => setEmailStudent(e.target.value)}
              type="email"
              placeholder="Email Address"
              value={emailStudent}
            ></input>
            <input
              onChange={(e) => setPasswordStudent(e.target.value)}
              type="Password"
              placeholder="Password"
              value={passwordStudent}
            ></input>
            <button type="submit" className={styles.login_btn}>
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setStudentOrTeacher(false);
                setEmailStudent("");
                setPasswordStudent("");
                setEmailTeacher("");
                setPasswordTeacher("");
              }}
              className={styles.swap_btn}
            >
              Go to Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // login component to diplay if loginDisplay is true  && studentOrTeacher is false
  const loginWindowTeacher = (
    <div className={styles.center}>
      <div className={styles.main_div}>
        <img
          onClick={handleClickMobile}
          className={styles.cross_image}
          src={esc}
          alt=""
        />

        <div className={`${styles.st} ${styles.st_right}`}>
          <img src={teachers} alt="" />
          <h1>Teachers</h1>
          <div className={styles.login_sign_div}>
            <h2 className={styles.log_underline}>LOG IN</h2>
            <h2 onClick={signupHandler}>SIGN UP</h2>
          </div>

          {/* TEACHER LOGIN FORM */}
          <form className={styles.form} onSubmit={handleLoginTeacherDB}>
            <input
              onChange={(e) => setEmailTeacher(e.target.value)}
              type="email"
              placeholder="Email Address"
              value={emailTeacher}
            ></input>
            <input
              onChange={(e) => setPasswordTeacher(e.target.value)}
              type="Password"
              placeholder="Password"
              value={passwordTeacher}
            ></input>
            <button type="submit" className={styles.login_btn}>
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setStudentOrTeacher(true);
                setEmailStudent("");
                setPasswordStudent("");
                setEmailTeacher("");
                setPasswordTeacher("");
              }}
              className={styles.swap_btn}
            >
              Go to Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // signup component to diplay if signupDisplay && studentOrTeacher is true JSX ELEMENT
  const signupWindowStudent = (
    <div className={styles.center}>
      <div className={`${styles.main_div} ${styles.main_div_signup}`}>
        <img
          onClick={handleClickMobile}
          className={styles.cross_image}
          src={esc}
          alt=""
        />
        <div className={`${styles.st} ${styles.st_signup}`}>
          <img src={students} alt="" />
          <h1>Students</h1>
          <div className={styles.login_sign_div}>
            <h2 onClick={loginHandler}>LOG IN</h2>
            <h2 className={styles.sign_underline}>SIGN UP</h2>
          </div>
          <form className={styles.form} onSubmit={handleSubmitStudent}>
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
            ></input>
            <input
              ref={passwordRef}
              type="Password"
              placeholder="Password"
            ></input>
            <input
              ref={confirmPasswordRef}
              type="Password"
              placeholder="Confirm Password"
            ></input>
            <button type="submit" className={styles.login_btn}>
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => {
                setStudentOrTeacher(false);
              }}
              className={styles.swap_btn}
            >
              Go to Teachers
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // signup component to diplay if signupDisplay is true  && studentOrTeacher is false JSX ELEMENT
  const signupWindowTeacher = (
    <div className={styles.center}>
      <div className={`${styles.main_div} ${styles.main_div_signup}`}>
        <img
          onClick={handleClickMobile}
          className={styles.cross_image}
          src={esc}
          alt=""
        />

        <div className={`${styles.st} ${styles.st_right}`}>
          <img src={teachers} alt="" />
          <h1>Teachers</h1>
          <div className={styles.login_sign_div}>
            <h2 onClick={loginHandler}>LOG IN</h2>
            <h2 className={styles.sign_underline}>SIGN UP</h2>
          </div>
          <form className={styles.form} onSubmit={handleSubmitTeacher}>
            <input
              ref={fullNameRefT}
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              ref={emailRefT}
              type="email"
              placeholder="Email Address"
            ></input>
            <input
              ref={passwordRefT}
              type="Password"
              placeholder="Password"
            ></input>
            <input
              ref={confirmPasswordRefT}
              type="Password"
              placeholder="Confirm Password"
            ></input>
            <button type="submit" className={styles.login_btn}>
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => {
                setStudentOrTeacher(true);
              }}
              className={styles.swap_btn}
            >
              Go to Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      {loginDisplay || signupDisplay
        ? ReactDom.createPortal(
            <Backdrop />,
            document.getElementById("backdrop")
          )
        : null}
      {loginDisplay
        ? studentOrTeacher
          ? ReactDom.createPortal(
              loginWindowStudent,
              document.getElementById("login-window")
            )
          : ReactDom.createPortal(
              loginWindowTeacher,
              document.getElementById("login-window")
            )
        : null}
      {signupDisplay
        ? studentOrTeacher
          ? ReactDom.createPortal(
              signupWindowStudent,
              document.getElementById("login-window")
            )
          : ReactDom.createPortal(
              signupWindowTeacher,
              document.getElementById("login-window")
            )
        : null}
    </React.Fragment>
  );
}
