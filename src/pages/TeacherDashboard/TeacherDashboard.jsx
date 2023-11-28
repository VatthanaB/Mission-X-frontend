import React, { useState, useEffect } from "react";
import styles from "./TeacherDashboard.module.css";
import SideBarDefault from "./SideBars/SideBarDefault";
import TeacherDashboardNavbar from "./TeacherDashboardNavbar";
import LoadingIcons from "../Home/components/UI/LoadingIcons";
import StudentProfiles from "../StudentProfiles/StudentProfiles";

import HelpRequests from "../HelpRequests/TeacherHelpRequests/HelpRequests";

import SideBarIcons from "./SideBars/SideBarIcons";
import ProgressTracker from "../ProgressTracker/ProgressTracker";
import axios from "axios";

export default function TeacherDashboard() {
  const [arrowIsClicked, setArrowIsClicked] = useState(true);
  const [teacherDB, setTeacherDB] = useState([]);
  const [buttonIsClicked, setButtonIsClicked] = useState("PROGRESS TRACKER");
  const [componentToDisplay, setComponentToDisplay] = useState(
    <ProgressTracker />
   
  );
  // const teacherDB = [
  //   {
  //     teacher_id: 0,
  //     name: "Teacher1",
  //     email: "teacher@gmail.com",
  //     password: "teacher123",
  //     school: "Auckland University",
  //     profile_pic: "./images/teacher1.jpg",
  //     date_of_birth: "1990-01-01",
  //     contact_number: "0211234567",
  //     course: "beginner",
  //   },
  //   {
  //     teacher_id: 1,
  //     name: "Jasmina Salvador",
  //     email: "jsalvador@homai.edu.com",
  //     password: "jasmina123",
  //     school: "Homai School",
  //     profile_pic: "./images/teachers/JasminaSalvador.png",
  //     date_of_birth: "1986-06-25",
  //     contact_number: "0277522800",
  //     course: "Beginner",
  //   },
  // ];

  // function to change buttonIsClicked state to keep track of which button is clicked. Then to display different components with setComponentToDisplay()
  // /for default sidebar

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/teachers/vatthana/id/${localStorage.getItem(
          "teacher_id"
        )}`
      )
      .then((res) => {
        setTeacherDB(res.data);
        console.log(res.data);
      });
  }, []);

  const clickHandler = (e) => {
    if (e.target.innerText === "PROGRESS TRACKER") {
      setButtonIsClicked("PROGRESS TRACKER");
      setComponentToDisplay(<ProgressTracker />);
    } else if (e.target.innerText === "STUDENT PROFILE") {
      setButtonIsClicked("STUDENT PROFILE");
      setComponentToDisplay(<StudentProfiles />);
    } else if (e.target.innerText === "HELP REQUESTS") {
      setButtonIsClicked("HELP REQUESTS");
      setComponentToDisplay(<HelpRequests />);
    } else if (e.target.innerText === "PROJECT SUBMISSIONS") {
      setButtonIsClicked("PROJECT SUBMISSIONS");
    } else if (e.target.innerText === "PROJECT LIBRARY") {
      setButtonIsClicked("PROJECT LIBRARY");
    }
  };
  // function to change arrowIsClick which choose which sidebar to display
  const arrowClickHandler = () => {
    setArrowIsClicked(!arrowIsClicked);
  };
  return (
    <React.Fragment>
      {!teacherDB && <LoadingIcons />}
      {teacherDB && (
        <div>
          <TeacherDashboardNavbar teacherDB={teacherDB} />
          <div className={styles.main_div}>
            {arrowIsClicked ? (
              <SideBarDefault
                teacherDB={teacherDB}
                buttonIsClicked={buttonIsClicked}
                clickHandler={clickHandler}
                arrowClickHandler={arrowClickHandler}
              />
            ) : (
              <SideBarIcons
                teacherDB={teacherDB}
                buttonIsClicked={buttonIsClicked}
                setButtonIsClicked={setButtonIsClicked}
                arrowClickHandler={arrowClickHandler}
                setComponentToDisplay={setComponentToDisplay}
              />
            )}

            <div className={styles.component_display_background}>
              {/* Display component on the right DIV  */}
              <div className={styles.component_div}>{componentToDisplay}</div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.dashboard_footer}>@2023 LevelUp Works</div>
    </React.Fragment>
  );
}
