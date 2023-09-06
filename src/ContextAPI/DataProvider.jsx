import React, { createContext, useContext } from "react";
const DataContext = createContext();
import { ToastContainer, toast } from "react-toastify";

const DataProvider = ({ children }) => {
  const server = "https://richchatapp.onrender.com";
  const handleExit = () => {
    localStorage.removeItem("user");
    location.reload();
    // navigate("/");
  };
  return (
    <>
      <ToastContainer />
      <DataContext.Provider value={{ handleExit, server }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export const dataState = () => {
  return useContext(DataContext);
};
export default DataProvider;
