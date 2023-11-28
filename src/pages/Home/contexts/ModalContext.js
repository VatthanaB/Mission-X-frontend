import React, { createContext, useState } from "react";

// create context for modal
export const ModalContext = createContext();

// create provider for modal with logic inside
export default function ModalProvider({ children }) {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [signupDisplay, setSignupDisplay] = useState(false);

  // function to close modal when cross is clicked
  const crossHandler = () => {
    setLoginDisplay(false);
    setSignupDisplay(false);
  };
  //  function to display login modal
  const loginHandler = () => {
    setLoginDisplay(true);
    setSignupDisplay(false);
  };
  //  function to display signup modal
  const signupHandler = () => {
    setLoginDisplay(false);
    setSignupDisplay(true);
  };

  // create context value for modal to export it to other components
  const modalContextValue = {
    loginDisplay,
    setLoginDisplay,
    signupDisplay,
    setSignupDisplay,
    crossHandler,
    loginHandler,
    signupHandler,
  };

  // return provider with value
  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
