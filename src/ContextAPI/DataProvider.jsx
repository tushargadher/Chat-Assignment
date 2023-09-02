import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isBold, setIsBold] = useState(false);
  const handleBold = () => {
    // alert("Font is now Bold");
    setIsBold(!isBold);
  };
  return (
    <>
      <DataContext.Provider value={{ isBold, handleBold }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export const dataState = () => {
  return useContext(DataContext);
};
export default DataProvider;
