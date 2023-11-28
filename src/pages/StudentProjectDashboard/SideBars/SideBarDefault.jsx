import React from "react";
import styles from "./SideBarDefault.module.css";

import arrowLeft from "../../../assets/arrowLeft.png";
import logout from "../../../assets/logout.png";
import profile from "../../../assets/profile.png";
import settings from "../../../assets/settings.png";

import bonusChallenge from "../../../assets/StudentDashboard/bonusChallenge.png";
import instructions from "../../../assets/StudentDashboard/instructions.png";
import instructionsSelected from "../../../assets/StudentDashboard/instructionsSelected.png";
import learningObjectives from "../../../assets/StudentDashboard/learningObjectives.png";
import learningObjectivesSelected from "../../../assets/StudentDashboard/learningObjectivesSelected.png";
import makeProject from "../../../assets/StudentDashboard/makeProject.png";
import makeProjectSelected from "../../../assets/StudentDashboard/makeProjectSelected.png";
import submitProject from "../../../assets/StudentDashboard/submitProject.png";
import submitProjectSelected from "../../../assets/StudentDashboard/submitProjectSelected.png";
import takeTheQuiz from "../../../assets/StudentDashboard/takeTheQuiz.png";
import video from "../../../assets/StudentDashboard/video.png";
// import videoSelected from "../../../assets/StudentDashboard/videoSelected.png";
import videoSelected from "../../../assets/StudentDashboard/videoSelected.png";

export default function SideBarDefault(props) {
  // function to change arrowIsClick state in TeacherDashboard.jsx which choose which sidebar to display
  const arrowIsClickHandler = props.arrowClickHandler;
  // function to change buttonIsClicked state in TeacherDashboard.jsx
  const clickHandler = props.clickHandler;
  const buttonIsClicked = props.buttonIsClicked;
  // array of objects imported from TeacherProfileViewer.jsx to display teacher data (profile pic)
  const studentDB = props.studentDB;
  return (
    <div className={styles.left_menu}>
      <img
        className={styles.profile_picture_left_menu}
        src={`/images/students/${studentDB.profile_pic}`}
        alt="teacherimg"
      />

      {/* BUTTONS */}
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "LEARNING OBJECTIVES"
            ? styles.button_is_clicked
            : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "LEARNING OBJECTIVES"
                ? learningObjectivesSelected
                : learningObjectives
            }
            alt=""
          />
        </span>
        LEARNING OBJECTIVES
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "INSTRUCTIONS" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "INSTRUCTIONS"
                ? instructionsSelected
                : instructions
            }
            alt=""
          />
        </span>
        INSTRUCTIONS
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "VIDEO TUTORIALS" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={buttonIsClicked === "VIDEO TUTORIALS" ? videoSelected : video}
            alt=""
          />
        </span>
        VIDEO TUTORIALS
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "MAKE PROJECT" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "MAKE PROJECT"
                ? makeProjectSelected
                : makeProject
            }
            alt=""
          />
        </span>
        MAKE PROJECT
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "SUBMIT PROJECT" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "SUBMIT PROJECT"
                ? submitProjectSelected
                : submitProject
            }
            alt=""
          />
        </span>
        SUBMIT PROJECT
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "BONUS CHALLENGE" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img src={bonusChallenge} alt="" />
        </span>
        BONUS CHALLENGE
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "TAKE THE QUIZ" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img src={takeTheQuiz} alt="" />
        </span>
        TAKE THE QUIZ
      </button>

      {/* END OF BUTTONS  */}

      {/* BOTTOM ICONS */}
      <div className={styles.move_arrow}>
        <div onClick={arrowIsClickHandler} className={styles.arrow_img_div}>
          <img src={arrowLeft} alt="" />
        </div>
      </div>
      <div className={styles.bottom_icons_div}>
        <div
          onClick={() => {
            window.location.href = "/Teacher-profile";
          }}
          className={styles.icons}
        >
          <img src={profile} alt="" />
          <p>profile</p>
        </div>
        <div className={styles.icons}>
          <img src={settings} alt="" />
          <p>settings</p>
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("studentToken");
            console.log("studentToken removed");
            window.location.href = "/";
          }}
          className={styles.icons}
        >
          <img src={logout} alt="" />
          <p>logout</p>
        </div>
      </div>
    </div>
  );
}
