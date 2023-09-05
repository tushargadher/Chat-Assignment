import React from "react";
import Home from "./Component/Home/Home";
import UserEnroll from "./Component/UserEnroll/UserEnroll";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/chat" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
