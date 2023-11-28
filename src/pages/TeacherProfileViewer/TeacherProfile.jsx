import React, { useEffect, useState } from "react";
import TeacherNavbar from "./TeacherNavbar";
import styles from "./TeacherProfile.module.css";
import Footer from "../Home/components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingIcons from "../Home/components/UI/LoadingIcons";

export default function TeacherProfile() {
  const navigate = useNavigate();
  const [teacherDB, setTeacherDB] = useState();

  // array of objects to display teacher data * Mimic data from database
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
  // function to redirect to dashboard
  const dashboardButtonHandler = () => {
    navigate("/Teacher-dashboard");
  };
  // UseEffect to get teacher data from database
  useEffect(() => {
    const teacherID = localStorage.getItem("teacher_id");

    const getTeacher = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/teachers/vatthana/id/${teacherID}`
        );
        setTeacherDB(response.data);
      } catch (error) {
        console.error(error);
        alert("Error retrieving teacher data from database");
      }
    };

    getTeacher();
  }, []);

  // function to format date
  const date = (d) => {
    let date = new Date(d);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    const formattedDate = `${month} ${day}, ${year}`;
    console.log(formattedDate);
    return formattedDate;
  };
  return (
    <div>
      {teacherDB && (
        <div>
          <TeacherNavbar teacherDB={teacherDB} />
          <div className={styles.background}>
            <div className={styles.main_div}>
              <div className={styles.teacher_picture_div}>
                <img
                  className={styles.teacher_picture}
                  src={`/images/teachers/${teacherDB.profile_pic}`}
                  alt=""
                />
                <button>EDIT PROFILE</button>
                <button>CHANGE PHOTO</button>
                <button>SETTINGS</button>
              </div>
              <div className={styles.teacher_info_div}>
                <h1>{teacherDB.name}</h1>
                <div className={styles.list_div}>
                  <ul className={styles.list_static}>
                    <li>School</li>

                    <li>Date of Birth</li>
                    <li>Contact No</li>
                    <li>Email</li>
                  </ul>
                  <ul className={styles.list_dynamic}>
                    <li>{teacherDB.school}</li>
                    <li>{teacherDB.course}</li>
                    {/* function format the date  */}
                    <li>{date(teacherDB.date_of_birth)}</li>
                    <li>{teacherDB.contact_number}</li>
                    <li>{teacherDB.email}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.button_div}>
              <button className={styles.back_button_project}>
                {" "}
                BACK TO PROJECTS
              </button>
              <button
                onClick={dashboardButtonHandler}
                className={styles.back_button_dash}
              >
                BACK TO DASHBOARD
              </button>
            </div>
          </div>

          <Footer />
        </div>
      )}
      {!teacherDB && <LoadingIcons />}
    </div>
  );
}
