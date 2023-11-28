import React, { createContext, useState, useRef } from "react";
import axios from "axios";

// create context for signup
export const SignUpStudentContext = createContext();

// SIGNUP PROVIDER FOR STUDENT SIGNUP
export default function SignUpProvider({ children }) {
  // Creating different states for handling signup for teacher and student
  const [swapToLoginStudent, setSwapToLoginStudent] = useState(false);
  // Creating different states for handling signup for teacher and student
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // function to handle signup for student used in handleSubmit
  const handleSignUp = async (fullName, email, password) => {
    const studentData = {
      name: fullName,
      email: email,
      password: password,
    };
    const addStudent = async (studentData) => {
      // create addStudent function to add student to database using axios
      try {
        const response = await axios.post(
          "http://localhost:4000/students/vatthana/add",
          studentData
        );
        const data = response.data;
        alert("Student added successfully, You can login now!");
        setSwapToLoginStudent(true);

        return data;
      } catch (error) {
        if (error.response.status === 400) {
          alert("Email already exists, Please login");
          setSwapToLoginStudent(true);

          return;
        }
        console.error("Error adding student:", error);
        alert("Error adding student");
        setSwapToLoginStudent(false);
        return;
      }
    };
    // call addStudent function
    addStudent(studentData);
  };
  // handle submit form for student
  const handleSubmitStudent = (e) => {
    // try to get values from input fields
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return;
    }
    if (fullName === "" || email === "") {
      alert("Please fill in all fields");
      return;
    }
    //  if passwords do not match, alert user
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email");
      return;
    }
    // check if password meets requirements
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least 1 capital letter and 1 number"
      );
      return;
    }

    handleSignUp(fullName, email, password);
  };

  // create context value for signup to export it to other components
  const SignUpContextContextValue = {
    handleSignUp,
    handleSubmitStudent,
    fullNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    swapToLoginStudent,
    setSwapToLoginStudent,
  };

  // return provider with value
  return (
    <SignUpStudentContext.Provider value={SignUpContextContextValue}>
      {children}
    </SignUpStudentContext.Provider>
  );
}
