import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const config = {
  header: {
    "Content-Type": "application/json",
  },
};
const DataProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLaoding] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("user"));
  //   setUser(userInfo);

  //   if (!user) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const handleExit = () => {
    localStorage.removeItem("user");
    // navigate("/");
  };
  return (
    <>
      <ToastContainer />
      <DataContext.Provider value={{ handleExit, loading }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export const dataState = () => {
  return useContext(DataContext);
};
export default DataProvider;
