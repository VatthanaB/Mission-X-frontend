import React, { useState, useEffect } from "react";
import styles from "./StudentProjectDashboard.module.css";
import SideBarDefault from "./SideBars/SideBarDefault";
import TeacherDashboardNavbar from "./StudentDashboardNavbar";

import SideBarIcons from "./SideBars/SideBarIcons";
import LearningObjectives from "../LearningObjectives/LearningObjectives";
import LoadingIcons from "../Home/components/UI/LoadingIcons";
import axios from "axios";
import Instructions from "../Instructions/Instructions";

export default function StudentProjectDashboard() {
  const [arrowIsClicked, setArrowIsClicked] = useState(true);
  const [studentDB, setStudentDB] = useState();
  const [buttonIsClicked, setButtonIsClicked] = useState("");
  const [componentToDisplay, setComponentToDisplay] = useState();

  //  Fetch student data from database and store in studentDB
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

  // function to change buttonIsClicked state to keep track of which button is clicked. Then to display different components with setComponentToDisplay()
  // /for default sidebar
  const clickHandler = (e) => {
    if (e.target.innerText === "LEARNING OBJECTIVES") {
      setButtonIsClicked("LEARNING OBJECTIVES");
      setComponentToDisplay(<LearningObjectives />);
    } else if (e.target.innerText === "INSTRUCTIONS") {
      setButtonIsClicked("INSTRUCTIONS");
      setComponentToDisplay(<Instructions />);
    } else if (e.target.innerText === "INSTRUCTIONS") {
      setButtonIsClicked("INSTRUCTIONS");
    } else if (e.target.innerText === "VIDEO TUTORIALS") {
      setButtonIsClicked("VIDEO TUTORIALS");
    } else if (e.target.innerText === "MAKE PROJECT") {
      setButtonIsClicked("MAKE PROJECT");
    } else if (e.target.innerText === "SUBMIT PROJECT") {
      setButtonIsClicked("SUBMIT PROJECT");
    } else if (e.target.innerText === "BONUS CHALLENGE") {
      setButtonIsClicked("BONUS CHALLENGE");
    } else if (e.target.innerText === "TAKE THE QUIZ") {
      setButtonIsClicked("TAKE THE QUIZ");
    }
  };
  // function to change arrowIsClick which choose which sidebar to display
  const arrowClickHandler = () => {
    setArrowIsClicked(!arrowIsClicked);
  };
  return (
    <React.Fragment>
      {studentDB && (
        <div>
          <TeacherDashboardNavbar studentDB={studentDB} />
          <div className={styles.main_div}>
            {arrowIsClicked ? (
              <SideBarDefault
                studentDB={studentDB}
                buttonIsClicked={buttonIsClicked}
                clickHandler={clickHandler}
                arrowClickHandler={arrowClickHandler}
              />
            ) : (
              <SideBarIcons
                studentDB={studentDB}
                buttonIsClicked={buttonIsClicked}
                setButtonIsClicked={setButtonIsClicked}
                arrowClickHandler={arrowClickHandler}
                setComponentToDisplay={setComponentToDisplay}
              />
            )}

            <div className={styles.component_display_background}>
              <div className={styles.component_div}>{componentToDisplay}</div>
            </div>
          </div>
        </div>
      )}
      {!studentDB && <LoadingIcons />}

      <div className={styles.dashboard_footer}>@2023 LevelUp Works</div>
    </React.Fragment>
  );
}
