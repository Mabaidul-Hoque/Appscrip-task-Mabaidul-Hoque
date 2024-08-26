"use client";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalData = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Something went wrong with the context!");
  }
  return context;
};

const GlobalDataProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const data = {
    showNavbar,
    setShowNavbar,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalDataProvider;
