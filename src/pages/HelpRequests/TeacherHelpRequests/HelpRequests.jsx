import React, { useState, useEffect } from "react";
import styles from "./HelpRequests.module.css";
import axios from "axios";
export default function HelpRequests() {
  const [studentRequests, setStudentRequests] = useState([]);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [studentRequestsDB, setStudentRequestsDB] = useState([]);

  // useEffect to fetch all help requests from the database 🦄
  useEffect(() => {
    // Define an async function to fetch data from the Express API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/help-requests/vatthana"
        ); // Replace with your Express API URL
        setStudentRequestsDB(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // useEffect to update studentRequests state whenever studentRequestsDB changes 🦄
  useEffect(() => {
    const studentRequests = studentRequestsDB.filter(
      (student) => student.done !== 1
    );
    setStudentRequests(
      studentRequests.map((student) => {
        const dateStr = student.date_created;
        const date = new Date(dateStr);

        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDate = `${month} ${day}, ${year}`;
        const formattedTime = `${hours}:${minutes}`;

        console.log(formattedDate); // "June 5, 2077"
        console.log(formattedTime); // "12:55"

        return {
          request_id: +student.request_id,
          content: (
            <li
              key={`${student.request_id} `}
              className={styles.request_component}
            >
              <input
                onChange={handleCheckbox}
                className={styles.checkbox}
                type="checkbox"
                id={student.request_id}
              />
              <img
                src={`/images/students/${student.student_profile_pic}`}
                alt=""
              />
              <h3>{student.student_name}</h3>
              <p>Need help with {student.pronouns} project.</p>
              <div className={styles.date_time}>
                <p>{formattedDate}</p>
                <p>{formattedTime}</p>
              </div>
            </li>
          ),
        };
      })
    );
  }, [studentRequestsDB]);

  const handleCheckbox = (e) => {
    console.log(e.target);
    const requestId = +e.target.id;
    const isChecked = e.target.checked;

    // Update the selectedRequests state based on checkbox changes
    setSelectedRequests((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, requestId];
      } else {
        return prevSelected.filter((id) => id !== requestId);
      }
    });
  };

  // Function to handle marking selected requests as done
  const handleMarkAsDone = () => {
    // Send a POST request to mark selected requests as done in the database
    axios
      .post("http://localhost:4000/help-requests/vatthana/mark-as-done", {
        selectedRequests,
      })
      .then((response) => {
        // Handle the response, e.g., display a success message to the user
        console.log("Selected requests marked as done:", response.data.message);

        // Update the studentRequestsDB to remove the marked requests
        setStudentRequestsDB((prevRequests) =>
          prevRequests.filter(
            (request) => !selectedRequests.includes(request.request_id)
          )
        );

        // Clear the selectedRequests state
        setSelectedRequests([]);
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message to the user
        console.error("Error marking requests as done:", error);
      });
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.top_text}>
        <h1>HELP REQUEST</h1>
        <div className={styles.top_text_right}>
          <h2> 🔙 REPLY</h2>
          <button onClick={handleMarkAsDone}> ✔️ MARK AS DONE</button>
        </div>
      </div>
      <ul className={styles.vertical_menu}>
        {studentRequests.map((request) => {
          return request.content;
        })}
      </ul>
    </div>
  );
}
