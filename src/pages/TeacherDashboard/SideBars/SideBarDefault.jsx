import React from "react";
import styles from "./SideBarDefault.module.css";
import helpRequests from "../../../assets/TeacherDashboard/helpRequests.png";
import helpRequestsSelected from "../../../assets/TeacherDashboard/helpRequestsSelected.png";
import progressTracker from "../../../assets/TeacherDashboard/progressTracker.png";
import progressTrackerSelected from "../../../assets/TeacherDashboard/progressTrackerSelected.png";
import projectLibrary from "../../../assets/TeacherDashboard/projectLibrary.png";
import projectLibrarySelected from "../../../assets/TeacherDashboard/projectLibrarySelected.png";
import projectSubmissions from "../../../assets/TeacherDashboard/projectSubmissions.png";
import projectSubmissionsSelected from "../../../assets/TeacherDashboard/projectSubmissionsSelected.png";
import studentProfiles from "../../../assets/TeacherDashboard/studentProfiles.png";
import studentProfilesSelected from "../../../assets/TeacherDashboard/studentProfilesSelected.png";

import arrowLeft from "../../../assets/arrowLeft.png";
import logout from "../../../assets/logout.png";
import profile from "../../../assets/profile.png";
import settings from "../../../assets/settings.png";

export default function SideBarDefault(props) {
  // function to change arrowIsClick state in TeacherDashboard.jsx which choose which sidebar to display
  const arrowIsClickHandler = props.arrowClickHandler;
  // function to change buttonIsClicked state in TeacherDashboard.jsx
  const clickHandler = props.clickHandler;
  const buttonIsClicked = props.buttonIsClicked;
  // array of objects imported from TeacherProfileViewer.jsx to display teacher data (profile pic)
  const teacherDB = props.teacherDB;
  return (
    <div className={styles.left_menu}>
      <img
        className={styles.profile_picture_left_menu}
        src={`/images/teachers/${teacherDB.profile_pic}`}
        alt="teacherimg"
      />

      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "PROGRESS TRACKER" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "PROGRESS TRACKER"
                ? progressTrackerSelected
                : progressTracker
            }
            alt=""
          />
        </span>
        PROGRESS TRACKER
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "STUDENT PROFILE" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "STUDENT PROFILE"
                ? studentProfilesSelected
                : studentProfiles
            }
            alt=""
          />
        </span>
        STUDENT PROFILE
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "HELP REQUESTS" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "HELP REQUESTS"
                ? helpRequestsSelected
                : helpRequests
            }
            alt=""
          />
        </span>
        HELP REQUESTS
      </button>
      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "PROJECT SUBMISSIONS"
            ? styles.button_is_clicked
            : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "PROJECT SUBMISSIONS"
                ? projectSubmissionsSelected
                : projectSubmissions
            }
            alt=""
          />
        </span>
        PROJECT SUBMISSIONS
      </button>

      <button
        onClick={clickHandler}
        className={
          buttonIsClicked === "PROJECT LIBRARY" ? styles.button_is_clicked : ""
        }
      >
        <span>
          <img
            src={
              buttonIsClicked === "PROJECT LIBRARY"
                ? projectLibrarySelected
                : projectLibrary
            }
            alt=""
          />
        </span>
        PROJECT LIBRARY
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
          <p>profile</p>
        </div>
        <div className={styles.icons}>
          <img src={settings} alt="" />
          <p>settings</p>
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("teacherToken");
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
