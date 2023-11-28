import React from "react";
import styles from "./SideBarIcons.module.css";

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
import videoSelected from "../../../assets/StudentDashboard/videoSelected.png";

import arrowLeft from "../../../assets/arrowLeft.png";
import logout from "../../../assets/logout.png";
import profile from "../../../assets/profile.png";
import settings from "../../../assets/settings.png";

import LearningObjectives from "../../LearningObjectives/LearningObjectives";
export default function SideBarIcons(props) {
  // function to change arrowIsClick state in TeacherDashboard.jsx which choose which sidebar to display
  const arrowIsClickHandler = props.arrowClickHandler;

  // function to change buttonIsClicked state in TeacherDashboard.jsx
  const setButtonIsClicked = props.setButtonIsClicked;
  const buttonIsClicked = props.buttonIsClicked;
  const setComponentToDisplay = props.setComponentToDisplay;

  // array of objects imported from TeacherProfileViewer.jsx to display teacher data (profile pic)
  const studentDB = props.studentDB;

  return (
    <div className={styles.left_menu}>
      <img
        className={styles.profile_picture_left_menu}
        src={`/images/students/${studentDB.profile_pic}`}
        alt="teacherimg"
      />

      <button
        onClick={() => {
          setButtonIsClicked("LEARNING OBJECTIVES");
          setComponentToDisplay(<LearningObjectives />);
        }}
        className={
          buttonIsClicked === "LEARNING OBJECTIVES"
            ? styles.button_is_clicked
            : ""
        }
      >
        <img
          src={
            buttonIsClicked === "LEARNING OBJECTIVES"
              ? learningObjectivesSelected
              : learningObjectives
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("INSTRUCTIONS");
        }}
        className={
          buttonIsClicked === "INSTRUCTIONS" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "INSTRUCTIONS"
              ? instructionsSelected
              : instructions
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("VIDEO TUTORIALS");
        }}
        className={
          buttonIsClicked === "VIDEO TUTORIALS" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={buttonIsClicked === "VIDEO TUTORIALS" ? videoSelected : video}
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("MAKE PROJECT");
        }}
        className={
          buttonIsClicked === "MAKE PROJECT" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "MAKE PROJECT"
              ? makeProjectSelected
              : makeProject
          }
          alt=""
        />
      </button>

      <button
        onClick={() => {
          setButtonIsClicked("SUBMIT PROJECT");
        }}
        className={
          buttonIsClicked === "SUBMIT PROJECT" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "SUBMIT PROJECT"
              ? submitProjectSelected
              : submitProject
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("BONUS CHALLENGE");
        }}
        className={
          buttonIsClicked === "BONUS CHALLENGE" ? styles.button_is_clicked : ""
        }
      >
        <img src={bonusChallenge} alt="" />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("TAKE THE QUIZ");
        }}
        className={
          buttonIsClicked === "TAKE THE QUIZ" ? styles.button_is_clicked : ""
        }
      >
        <img src={takeTheQuiz} alt="" />
      </button>
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
        </div>
        <div className={styles.icons}>
          <img src={settings} alt="" />
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
        </div>
      </div>
    </div>
  );
}
