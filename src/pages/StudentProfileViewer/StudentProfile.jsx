import React, { useEffect, useState } from "react";
import StudentNavbar from "./StudentNavbar";
import styles from "./StudentProfile.module.css";
import Footer from "../Home/components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingIcons from "../Home/components/UI/LoadingIcons";

export default function StudentProfile() {
  const navigate = useNavigate();
  const [studentDB, setStudentDB] = useState();

  // function to navigate to dashboard
  const dashboardButtonHandler = () => {
    navigate("/Project-library");
  };
  // UseEffect to get student data from database + teacher name from teacher database
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/students/vatthana/id/${localStorage.getItem(
          "student_id"
        )}`
      )
      .then((res) => {
        setStudentDB(res.data);
        console.log(res.data);
      });
  }, []);

  // function to format date of birth from database to "Month Day, Year" format
  const date = (d) => {
    let date = new Date(d);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };
  return (
    <div>
      {studentDB && (
        <div>
          <StudentNavbar studentDB={studentDB} />
          <div className={styles.background}>
            <div className={styles.main_div}>
              <div className={styles.teacher_picture_div}>
                <img
                  className={styles.teacher_picture}
                  src={`/images/students/${studentDB.profile_pic}`}
                  alt=""
                />
                <button>EDIT PROFILE</button>
                <button>CHANGE PHOTO</button>
                <button>SETTINGS</button>
              </div>
              <div className={styles.teacher_info_div}>
                <h1>{studentDB.name}</h1>
                <div className={styles.list_div}>
                  <ul className={styles.list_static}>
                    <li>School</li>
                    <li>Teacher</li>

                    <li>Course</li>

                    <li>Date of Birth</li>
                    <li>Contact No</li>
                    <li>Email Address</li>
                  </ul>
                  <ul className={styles.list_dynamic}>
                    <li>{studentDB.school}</li>

                    <li>{studentDB.teacher_name}</li>

                    <li>{studentDB.course}</li>
                    {/* function format the date  */}
                    <li>{date(studentDB.date_of_birth)}</li>
                    <li>{studentDB.contact_number}</li>
                    <li>{studentDB.email}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.button_div}>
              <button
                onClick={dashboardButtonHandler}
                className={styles.back_button_dash}
              >
                BACK TO PROJECT
              </button>
            </div>
          </div>

          <Footer />
        </div>
      )}
      {!studentDB && <LoadingIcons />}
    </div>
  );
}
