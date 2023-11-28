import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// create context for authentication
export const AuthContext = createContext();

// create provider for authentication with logic inside
export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  // Creating different states for handling login for teacher and student

  // Creating different states for handling login for teacher and student
  const [emailTeacher, setEmailTeacher] = useState("");
  const [passwordTeacher, setPasswordTeacher] = useState("");
  const [emailStudent, setEmailStudent] = useState("");
  const [passwordStudent, setPasswordStudent] = useState("");

  // function to handle login for teacher 🦄
  const handleLoginTeacherDB = (e) => {
    e.preventDefault();
    // check if email and password is empty and alert user if it is
    if (emailTeacher === "" || passwordTeacher === "") {
      alert("Please enter email and password");
      return;
    } else {
      // if email and password is not empty, send a post request to the server to check if email and password match in database
      axios
        .post("http://localhost:4000/teachers/vatthana/login", {
          email: emailTeacher,
          password: passwordTeacher,
        })
        .then((response) => {
          const data = response.data;
          if (data.success) {
            console.log("Login successful");
            // After receiving the token from the server
            let token = data.token;

            // After receiving the token from the server store it in local storage and remove student token if it exists
            localStorage.setItem("teacherToken", token);
            localStorage.removeItem("studentToken");

            // get teacher email from token and store it in local storage with teacher id
            findTeacherEmailAndID();

            // get token from local storage
            token = localStorage.getItem("teacherToken");

            // check if token is valid

            axios
              .get("http://localhost:4000/teachers/vatthana/protected", {
                headers: {
                  Authorization: token,
                },
              })
              .then((response) => {
                // get teacher id from database using axios and redirect to teacher dashboard
                axios
                  .get(
                    `http://localhost:4000/teachers/vatthana/email/${emailTeacher}`
                  )
                  .then((response) => {
                    console.log(response.data);
                    // store teacher id in local storage
                    localStorage.setItem(
                      "teacher_id",
                      response.data.teacher_id
                    );

                    // redirect to teacher dashboard
                    navigate(`/Teacher-profile`);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                console.log("Token Check Successful");
              })
              .catch((error) => {
                console.error(error);
              });

            // get teacher id from database using axios and redirect to teacher dashboard
            // using teacher id as query parameter
          } else {
            console.log("Invalid email or password");
            alert("Invalid email or password");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  // function to handle login for student
  const handleLoginSudentDB = (e) => {
    e.preventDefault();
    if (emailStudent === "" || passwordStudent === "") {
      alert("Please enter email and password");
      return;
    } else {
      axios
        .post("http://localhost:4000/students/vatthana/login", {
          email: emailStudent,
          password: passwordStudent,
        })
        .then((response) => {
          const data = response.data;
          if (data.success) {
            console.log("Login successful");

            // After receiving the token from the server console.log("Login successful");
            // After receiving the token from the server
            let token = data.token;
            localStorage.setItem("studentToken", token);
            localStorage.removeItem("teacherToken");
            findStudentEmailAndID();
            console.log(token);

            token = localStorage.getItem("studentToken");

            axios
              .get("http://localhost:4000/students/vatthana/protected", {
                headers: {
                  Authorization: token,
                },
              })
              .then((response) => {
                console.log("Token Check Successful");

                console.log(localStorage.getItem("studentToken"));

                // get student id from database using axios and redirect to student dashboard

                axios
                  .get(
                    `http://localhost:4000/students/vatthana/email/${emailStudent}`
                  )
                  .then((response) => {
                    console.log(response.data);
                    localStorage.setItem("student_id", response.data.student);
                    console.log(localStorage.getItem("student_id"));

                    navigate(`/Project-library`);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            console.log("Invalid email or password");
            alert("Invalid email or password");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  // function to check if token is valid for student, This function is to export to other components #return Boolean

  const handleTokenCheckStudent = () => {
    let token = localStorage.getItem("studentToken");
    if (token === null) {
      return false;
    }

    return axios
      .get("http://localhost:4000/students/vatthana/protected", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  // function to check if token is valid for teacher, This function is to export to other components #return Boolean 🦄
  const handleTokenCheckTeacher = () => {
    let token = localStorage.getItem("teacherToken");
    if (token === null) {
      return false;
    }

    return axios
      .get("http://localhost:4000/teachers/vatthana/protected", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.success);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  // function to find teacher email from token 🦄
  const findTeacherEmailAndID = async () => {
    // get the token from local storage
    const token = localStorage.getItem("teacherToken");

    if (token === null) {
      localStorage.setItem("teacherEmail", "");
      localStorage.setItem("teacher_id", "");
      return;
    }

    try {
      // decode the token to get the payload
      const payload = await jwt_decode(token);

      // extract the email from the payload
      const email = payload.email;
      localStorage.setItem("teacherEmail", email);
      const getEmail = async (email) => {
        try {
          const response = await axios.get(
            `http://localhost:4000/teachers/vatthana/email/${email}`
          );

          localStorage.setItem("teacher_id", response.data.teacher_id);

          return response.data;
        } catch (error) {
          console.error(error);
        }
      };
      getEmail(email);
    } catch (error) {
      console.error(error);
      alert("Error decoding teacher token");
    }
  };

  // function to find student email from token
  const findStudentEmailAndID = async () => {
    // get the token from local storage
    const token = localStorage.getItem("studentToken");

    if (token === null) {
      localStorage.setItem("studentEmail", "");
      localStorage.setItem("student_id", "");

      return;
    }

    try {
      // decode the token to get the payload
      const payload = await jwt_decode(token);

      // extract the email from the payload
      const email = payload.email;
      localStorage.setItem("studentEmail", email);
      const getEmail = async (email) => {
        try {
          const response = await axios.get(
            `http://localhost:4000/students/vatthana/email/${email}`
          );
          console.log(response.data);
          localStorage.setItem("student_id", response.data.student);

          return response.data;
        } catch (error) {
          console.error(error);
          alert("Error retrieving teacher data from database");
        }
      };
      getEmail(email);
    } catch (error) {
      console.error(error);
      alert("Error decoding student token");
    }
  };

  // useEffect to run findTeacherEmailAndID and findStudentEmailAndID when component mounts
  useEffect(() => {
    findTeacherEmailAndID();
    findStudentEmailAndID();
    console.log("useEffect ran");
  }, []);

  // create context value for authentication to export it to other components 🦄
  const authContextValue = {
    // states for handling login for teacher and student
    emailTeacher,
    setEmailTeacher,
    passwordTeacher,
    setPasswordTeacher,
    emailStudent,
    setEmailStudent,
    passwordStudent,
    setPasswordStudent,
    handleLoginTeacherDB,
    handleLoginSudentDB,
    // check if is logged

    // Token checker
    handleTokenCheckStudent,
    handleTokenCheckTeacher,

    // states to check with id is logged in
  };

  // return provider with value
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
