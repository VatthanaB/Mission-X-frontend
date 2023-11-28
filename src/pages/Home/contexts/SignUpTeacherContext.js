import React, { createContext, useRef, useState } from "react";
import axios from "axios";

// create context for signup
export const SignupTeacherContext = createContext();

// SIGNUP PROVIDER FOR TEACHER SIGNUP
export default function SignUpProviderTeacher({ children }) {
  // Creating different states for handling signup for teacher and student
  const [swapToLoginTeacher, setSwapToLoginTeacher] = useState(false);
  // Creating different states for handling signup for teacher and student 🦄
  const fullNameRefT = useRef(null);
  const emailRefT = useRef(null);
  const passwordRefT = useRef(null);
  const confirmPasswordRefT = useRef(null);

  //   function to handle signup for teacher used in handleSubmit 🦄

  const handleSignUpTeacher = async (fullName, email, password) => {
    // create teacherData object
    const teacherData = {
      name: fullName,
      email: email,
      password: password,
    };
    // create addTeacher function to add teacher to database using axios
    const addTeacher = async (teacherData) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/teachers/vatthana/add",
          teacherData
        );
        const data = response.data;
        alert("Teacher added successfully. You can login now!");
        fullNameRefT.current.value = "";
        emailRefT.current.value = "";
        passwordRefT.current.value = "";
        confirmPasswordRefT.current.value = "";
        setSwapToLoginTeacher(true);

        return data;
      } catch (error) {
        if (error.response.status === 400) {
          alert("Email already exists, Please login");
          setSwapToLoginTeacher(true);

          return;
        }
        console.error("Error adding teacher:", error);
        alert("Email already exists, Please login");
        setSwapToLoginTeacher(false);
        return;
      }
    };
    // call addTeacher function
    addTeacher(teacherData);
  };

  //   handle submit form for teacher 🦄🦄🦄
  const handleSubmitTeacher = (e) => {
    e.preventDefault();
    // try to get values from input fields

    const fullName = fullNameRefT.current.value;
    const email = emailRefT.current.value;
    const password = passwordRefT.current.value;
    const confirmPassword = confirmPasswordRefT.current.value;
    //   if passwords do not match, alert user
    if (password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return false;
    }
    if (fullName === "" || email === "") {
      alert("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    // check if email is valid "regex for email validation 🦄"
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email");
      return false;
    }
    // check if password meets requirements "1Capital, 1Number, 8Characters" 🦄
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least 1 capital letter and 1 number"
      );
      return false;
    }

    handleSignUpTeacher(fullName, email, password);
  };

  //   create context value for signup to export it to other components 🦄
  const SignUpContextContextValue = {
    handleSignUpTeacher,
    handleSubmitTeacher,
    fullNameRefT,
    emailRefT,
    passwordRefT,
    confirmPasswordRefT,
    swapToLoginTeacher,
    setSwapToLoginTeacher,
  };

  //   return provider with value
  return (
    <SignupTeacherContext.Provider value={SignUpContextContextValue}>
      {children}
    </SignupTeacherContext.Provider>
  );
}
