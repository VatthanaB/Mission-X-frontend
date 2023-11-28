import React, { useEffect, useState } from "react";
import nzflag from "../../assets/NavBar/NZFlag.png";
import maoriflag from "../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../assets/NavBar/LevelUpWorks-blue.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingIcons from "../Home/components/UI/LoadingIcons";
import styles from "./StudentDashboardNavbar.module.css";
import { format } from "date-fns-tz";

export default function TeacherDashboardNavbar(props) {
  const navigate = useNavigate();
  const [studentID, setStudentID] = useState("");
  const studentDB = props.studentDB;

  // useEffect to fetch id from local storage 🦄
  useEffect(() => {
    const studentID = localStorage.getItem("student_id");

    setStudentID(studentID);
  }, []);

  //  Function to add help request to database and display alert 🦄
  const addHelpRequest = () => {
    console.log(studentID);
    // Get the current date and time in the format "yyyy-MM-dd HH:mm:ss"
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm:ss", {
      timeZone: "Pacific/Auckland",
    });

    // Get the current date and time in the format "10 November 2023 at 12:34"
    const formattedDateMessage =
      currentDate
        .toLocaleDateString("en-NZ", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .replace(",", "") +
      " at " +
      currentDate.toLocaleTimeString("en-NZ", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      });

    // Create a new help request object
    const newRequest = {
      student_id: +studentID,
      date_created: formattedDate,
      done: 0,
    };
    console.log(newRequest);

    // Send the new help request object to the server
    axios
      .post("http://localhost:4000/help-requests/vatthana/add-request", {
        student_id: +studentID, // Replace with the actual student_id
        date_created: formattedDate, // Replace with the actual date and time
        done: 0, // 0 for not done, 1 for done
      })
      .then((response) => {
        // Handle the response, e.g., display a success message to the user
        console.log("New help request added:", response.data.message);
        alert(
          `New help request added for ${studentDB.name} on ${formattedDateMessage}. `
        );
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message to the user
        console.error("Error adding new help request:", error);
      });
  };
  return (
    <React.Fragment>
      {!studentDB && <LoadingIcons />}
      {studentDB && (
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
          <div className={styles.project_circle}>
            <div className={styles.project_circle_text}>
              <h4>Project</h4>
              <p>Introduction</p>
            </div>
            <div className={styles.span_div}>
              <span className={styles.active_span}> 1</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.nav_link}>
            <li className={styles.li}>
              <button className={styles.button_start}>Start Project</button>
            </li>

            <li className={styles.li}>
              <button onClick={addHelpRequest} className={styles.button_help}>
                Ask Teacher for help
              </button>
            </li>
            <li className={styles.li}>
              <button
                onClick={() => {
                  navigate(`/Project-library`);
                }}
                className={styles.button_more}
              >
                More Projects
              </button>
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
      )}
    </React.Fragment>
  );
}
