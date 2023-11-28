import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/components/Footer";
import NavbarProject from "./components/NavbarProject";
import styles from "./ProjectLibrary.module.css";
import axios from "axios";
import LoadingIcons from "../Home/components/UI/LoadingIcons";

export default function ProjectLibrary() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [activeLevelButton, setactiveLevelButton] = useState([]);
  const [activeLevelButtonNumber, setactiveLevelButtonNumber] = useState("All");
  const [subscriptionState, setSubscriptionState] = useState([]);
  const [activityTypeState, setActivityTypeState] = useState([]);
  const [yearLevelState, setYearLevelState] = useState([]);
  const [subjectMatterState, setSubjectMatterState] = useState([]);
  const [studentDB, setStudentDB] = useState();
  const [projectsToRender, setProjectsToRender] = useState();

  // useEffect fetch all projects and set projectToRender to display all projects 🦄
  useEffect(() => {
    //  set projectsToRender to display filtered projects each time the filters are changed and projects are fetched 🦄
    const projectsToDisplay = projects.map((project) => (
      <div
        onClick={() => navigate("/Student-Project")}
        className={styles.project_card}
      >
        <div className={styles.project_card_top_div}>
          <img src={`images/projects/${project.project_pic}`} alt="project" />
        </div>
        <div className={styles.project_card_bottom_div}>
          <h3>{project.name}</h3>
          <div className={styles.project_card_bottom_span}>
            <p>{`${project.course} | ${project.activity_type}`}</p>
          </div>
        </div>
      </div>
    ));

    setProjectsToRender(projectsToDisplay);
  }, [projects, navigate]);

  //

  // useEffect to fetch student data to pass into NavbarProject for name and profile picture display
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

  // function to handle the beginner, intermediate, advanced buttons
  const buttonLevelHandler = (e) => {
    if (activeLevelButton === e.target.innerText) {
      setactiveLevelButton();
      console.log(activeLevelButton);
    } else {
      setactiveLevelButton(e.target.innerText);
      console.log(activeLevelButton);
    }
  };
  //  function to handle the show 5, 10, all buttons
  const buttonNumberHandler = (e) => {
    setactiveLevelButtonNumber(e.target.innerText);
    console.log(activeLevelButtonNumber);
  };

  // functions to handle the filters Checkboxes
  const subscriptionHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setSubscriptionState((prevState) => {
      if (checked) {
        return prevState.includes(value) ? prevState : [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
    console.log(subscriptionState);
  };

  const activityTypeHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setActivityTypeState((prevState) => {
      if (checked) {
        return prevState.includes(value) ? prevState : [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
    console.log(activityTypeState);
  };

  // function  to handle the year level checkboxes
  const yearLevelHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setYearLevelState((prevState) => {
      prevState = prevState || []; // Provide a default value for prevState if it is undefined

      // if checkbox is checked, add the value to the array
      if (checked) {
        // The Set object is used in this code block to remove any duplicate values from the array.
        // When we pass an array to the Set constructor, it creates a new Set object with the unique values from the array.
        if (value === "1-4") {
          return [...new Set([...prevState, "1", "2", "3", "4"])];
        }

        if (value === "5-6") {
          return [...new Set([...prevState, "5", "6"])];
        }
        if (value === "7-8") {
          return [...new Set([...prevState, "7", "8"])];
        }
        if (value === "9-13") {
          return [...new Set([...prevState, "9", "10", "11", "12", "13"])];
        }
        // if checkbox is unchecked, remove the value from the array
      } else {
        // The filter method is used in this code block to remove the unchecked value from the array.
        if (value === "1-4") {
          return prevState.filter((val) => !["1", "2", "3", "4"].includes(val));
        }

        if (value === "5-6") {
          return prevState.filter((val) => !["5", "6"].includes(val));
        }
        if (value === "7-8") {
          return prevState.filter((val) => !["7", "8"].includes(val));
        }
        if (value === "9-13") {
          return prevState.filter(
            (val) => !["9", "10", "11", "12", "13"].includes(val)
          );
        }
      }
      return prevState;
    });
  };
  // function to handle the subject matter checkboxes
  const subjectMatterHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setSubjectMatterState((prevState) => {
      if (checked) {
        return prevState.includes(value) ? prevState : [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
    console.log(subjectMatterState);
  };
  // Function to fetch projects based on filters 🦄🦄🦄
  const fetchProjects = (filters) => {
    return axios
      .get("http://localhost:4000/student-library/vatthana/sort", {
        params: filters,
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching projects: " + error);
        throw error;
      });
  };

  // useEffect to fetch projects based on filters 🦄🦄🦄
  useEffect(() => {
    // set projectsToRender to display filtered projects each time the filters are changed and projects are fetched
    const filters = {
      subscription: subscriptionState,
      activity_type: activityTypeState,
      year_level: yearLevelState,
      subject_matter: subjectMatterState,
      course: activeLevelButton,
      activeLevelButtonNumber: activeLevelButtonNumber,
    };

    fetchProjects(filters)
      .then((data) => {
        setProjects(data);

        return data;
      })
      .catch((error) => {
        // Handle the error, e.g., show an error message
      });
  }, [
    activeLevelButton,
    activeLevelButtonNumber,
    subscriptionState,
    activityTypeState,
    subjectMatterState,
    yearLevelState,

    navigate,
  ]);

  return (
    <React.Fragment>
      {!studentDB && <LoadingIcons />}
      {studentDB && (
        <div>
          <NavbarProject studentDB={studentDB} />
          <div>
            <div className={styles.main_top_div}>
              <h1>PROJECTS</h1>
              <p>
                Welcome to the project library. You can use the filters on the
                right to help you search for specific projects.
              </p>
            </div>
            <div className={styles.main_bottom_div}>
              <div className={styles.radio_button_main_div}>
                <div className={styles.radio_button_ind_div}>
                  {/* LEFT MENU RADIO BUTTON */}
                  <h2>SUBSCRIPTION</h2>
                  <hr></hr>
                  <div className={styles.radio_button}>
                    <div className={styles.radio_button_ind}>
                      <input
                        type="checkbox"
                        id="free"
                        name="subscription"
                        value="Free"
                        onClick={subscriptionHandler}
                      />
                      <label for="Free">Free</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        type="checkbox"
                        id="paid"
                        name="subscription"
                        value="Premium"
                        onClick={subscriptionHandler}
                      />
                      <label for="paid">Premium</label>
                    </div>
                  </div>
                </div>
                <div className={styles.radio_button_ind_div}>
                  <h2>ACTIVITY TYPE</h2>
                  <hr></hr>
                  <div className={styles.radio_button}>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={activityTypeHandler}
                        value="Animation"
                        type="checkbox"
                        id="Animation"
                        name="actiivityType"
                      />
                      <label>Animation</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={activityTypeHandler}
                        value="Game"
                        type="checkbox"
                        id="Game"
                        name="actiivityType"
                      />
                      <label>Game</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={activityTypeHandler}
                        value="Chatbot"
                        type="checkbox"
                        id="Chatbot"
                        name="actiivityType"
                      />
                      <label>Chatbot</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={activityTypeHandler}
                        type="checkbox"
                        id="AugmentedReality"
                        name="actiivityType"
                        value="Augmented reality"
                      />
                      <label>Augmented Reality</label>
                    </div>
                  </div>
                </div>
                <div className={styles.radio_button_ind_div}>
                  <h2>YEAR LEVEL</h2>
                  <hr></hr>
                  <div className={styles.radio_button}>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={yearLevelHandler}
                        value="1-4"
                        type="checkbox"
                        id="1-4"
                        name="yearLevel"
                      />
                      <label>1 - 4</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        value="5-6"
                        type="checkbox"
                        name="yearLevel"
                        onClick={yearLevelHandler}
                      />
                      <label>5 - 6</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        value="7-8"
                        type="checkbox"
                        name="yearLevel"
                        onClick={yearLevelHandler}
                      />
                      <label>7 - 8</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        value="9-13"
                        type="checkbox"
                        name="yearLevel"
                        onClick={yearLevelHandler}
                      />
                      <label>9 - 13</label>
                    </div>
                  </div>
                </div>
                <div className={styles.radio_button_ind_div}>
                  <h2>SUBJECT MATTER</h2>
                  <hr></hr>
                  <div className={styles.radio_button}>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={subjectMatterHandler}
                        value="computer science"
                        type="checkbox"
                        name="subjectMatter"
                      />
                      <label>Computer Science</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={subjectMatterHandler}
                        value="maths"
                        type="checkbox"
                        name="subjectMatter"
                      />
                      <label>Maths</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={subjectMatterHandler}
                        value="science"
                        type="checkbox"
                        name="subjectMatter"
                      />
                      <label>Science</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        onClick={subjectMatterHandler}
                        value="language"
                        type="checkbox"
                        name="subjectMatter"
                      />
                      <label>Language</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        value="art"
                        type="checkbox"
                        name="subjectMatter"
                        onClick={subjectMatterHandler}
                      />
                      <label>Art</label>
                    </div>
                    <div className={styles.radio_button_ind}>
                      <input
                        value="music"
                        type="checkbox"
                        name="subjectMatter"
                        onClick={subjectMatterHandler}
                      />
                      <label>Music</label>
                    </div>
                  </div>
                </div>
              </div>
              <div />

              <div className={styles.project_div}>
                <div className={styles.button_selector_div}>
                  {/* LEFT BUTTONS BEGINNER / INTERMEDIATE / ADVANCED */}
                  <div className={styles.button_selector_left_div}>
                    <button
                      style={{ borderRadius: "5px 0px 0px 5px" }}
                      onClick={buttonLevelHandler}
                      className={
                        activeLevelButton === "BEGINNER"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      BEGINNER
                    </button>
                    <button
                      style={{ borderRadius: "0px" }}
                      onClick={buttonLevelHandler}
                      className={
                        activeLevelButton === "INTERMEDIATE"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      INTERMEDIATE
                    </button>
                    <button
                      style={{ borderRadius: "0px 5px 5px 0px" }}
                      onClick={buttonLevelHandler}
                      // className={styles.button_selector}
                      className={
                        activeLevelButton === "ADVANCED"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      ADVANCED
                    </button>
                  </div>
                  <div className={styles.button_selector_right_div}>
                    {/* RIGHT BUTTONS 5 /10 All FOR DISPLAY */}
                    <h5>SHOW</h5>
                    <button
                      style={{ borderRadius: "5px 0px 0px 5px" }}
                      onClick={buttonNumberHandler}
                      className={
                        activeLevelButtonNumber === "5"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      5
                    </button>
                    <button
                      style={{ borderRadius: "0px" }}
                      onClick={buttonNumberHandler}
                      className={
                        activeLevelButtonNumber === "10"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      10
                    </button>
                    <button
                      style={{ borderRadius: "0px 5px 5px 0px" }}
                      onClick={buttonNumberHandler}
                      className={
                        activeLevelButtonNumber === "All"
                          ? styles.active
                          : styles.button_selector
                      }
                    >
                      All
                    </button>
                  </div>
                </div>
                <div className={styles.grid_project_div}>
                  {projects && projectsToRender}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}
