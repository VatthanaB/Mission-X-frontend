import React, { useContext, useState, useEffect } from "react";
import esc from "../../../../assets/LoginSignup/esc.png";
import students from "../../../../assets/LoginSignup/students.png";
import teachers from "../../../../assets/LoginSignup/teachers.png";
import styles from "./LoginSignup.module.css";
import ReactDom from "react-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { SignUpStudentContext } from "../../contexts/SignUpStudentContext";
import { SignupTeacherContext } from "../../contexts/SignUpTeacherContext";
export const Backdrop = (props) => {
  return <div className={styles.background}></div>;
};

export default function LoginSignup(props) {
  const [showPasswordTeacher, setshowPasswordTeacher] = useState(false);
  const [showPasswordStudent, setshowPasswordStudent] = useState(false);
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
  const {
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

  // useEffect to swap which component to display if depending on swapToLoginStudent state
  useEffect(() => {
    if (swapToLoginStudent) {
      loginHandler();
    }
    setSwapToLoginStudent(false);
  }, [swapToLoginStudent, setSwapToLoginStudent, loginHandler]);

  // useEffect to swap which component to display depending on swapToLoginTeacher state
  useEffect(() => {
    if (swapToLoginTeacher) {
      loginHandler();
    }
    setSwapToLoginTeacher(false);
  }, [swapToLoginTeacher, setSwapToLoginTeacher, loginHandler]);

  // function to show password on click eye icons for teacher
  const handleshowPasswordTeacher = () => {
    setshowPasswordTeacher(!showPasswordTeacher);
  };
  // function to show password on click eye icons for student
  const handleshowPasswordStudent = () => {
    setshowPasswordStudent(!showPasswordStudent);
  };

  // login component to diplay if loginDisplay is true JSX ELEMENT
  const LoginWindow = (
    <div>
      <div className={styles.center}>
        <div className={styles.main_div}>
          <img
            onClick={crossHandler}
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
            {/* FORM LOGIN STUDENT */}
            <form className={styles.form} onSubmit={handleLoginSudentDB}>
              <input
                onChange={(e) => setEmailStudent(e.target.value)}
                type="email"
                placeholder="Email Address"
                autoComplete="off"
              ></input>
              <div className={styles.password_input}>
                <input
                  onChange={(e) => setPasswordStudent(e.target.value)}
                  type={showPasswordStudent ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordStudent}
                >
                  {!showPasswordStudent ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>
              <button type="submit" className={styles.login_btn}>
                Log In
              </button>
            </form>
          </div>
          <div className={`${styles.st} ${styles.st_right}`}>
            <img src={teachers} alt="" />
            <h1>Teachers</h1>
            <div className={styles.login_sign_div}>
              <h2 className={styles.log_underline}>LOG IN</h2>
              <h2 onClick={signupHandler}>SIGN UP</h2>
            </div>
            {/* FORM LOGIN TEACHER */}
            <form className={styles.form} onSubmit={handleLoginTeacherDB}>
              <input
                onChange={(e) => setEmailTeacher(e.target.value)}
                type="email"
                placeholder="Email Address"
                value={props.emailTeacher}
                autoComplete="off"
              ></input>
              <div className={styles.password_input}>
                <input
                  onChange={(e) => setPasswordTeacher(e.target.value)}
                  type={showPasswordTeacher ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordTeacher}
                >
                  {!showPasswordTeacher ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>
              <button type="submit" className={styles.login_btn}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // signup component to diplay if signupDisplay is true JSX ELEMENT
  const SignupWindow = (
    <div>
      <div className={styles.center}>
        {/* STUDENT SIGNUP */}
        <div className={`${styles.main_div} ${styles.main_div_signup}`}>
          <img
            onClick={crossHandler}
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
                autoComplete="off"
              ></input>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email Address"
                autoComplete="off"
              ></input>
              <div className={styles.password_input}>
                <input
                  ref={passwordRef}
                  type={showPasswordStudent ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordStudent}
                >
                  {!showPasswordStudent ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>
              <div className={styles.password_input}>
                <input
                  ref={confirmPasswordRef}
                  type={showPasswordStudent ? "text" : "password"}
                  placeholder="Confirm Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordStudent}
                >
                  {!showPasswordStudent ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>
              <button type="submit" className={styles.login_btn}>
                Sign Up
              </button>
            </form>
          </div>
          {/* TEACHER SIGNUP */}
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
                autoComplete="off"
              ></input>
              <input
                ref={emailRefT}
                type="email"
                placeholder="Email Address"
                autoComplete="off"
              ></input>
              <div className={styles.password_input}>
                <input
                  ref={passwordRefT}
                  type={showPasswordTeacher ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordTeacher}
                >
                  {!showPasswordTeacher ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>
              <div className={styles.password_input}>
                <input
                  ref={confirmPasswordRefT}
                  type={showPasswordTeacher ? "text" : "password"}
                  placeholder="Confirm Password"
                  autoComplete="on"
                ></input>
                <button
                  type="button"
                  className={styles.show_password_btn}
                  onClick={handleshowPasswordTeacher}
                >
                  {!showPasswordTeacher ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </button>
              </div>

              <button type="submit" className={styles.login_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {/* check when backdrop appear */}
      {loginDisplay || signupDisplay
        ? ReactDom.createPortal(
            <Backdrop />,
            document.getElementById("backdrop")
          )
        : null}
      {/* check which component to display */}
      {loginDisplay
        ? ReactDom.createPortal(
            LoginWindow,
            document.getElementById("login-window")
          )
        : null}
      {signupDisplay
        ? ReactDom.createPortal(
            SignupWindow,
            document.getElementById("login-window")
          )
        : null}
    </React.Fragment>
  );
}
