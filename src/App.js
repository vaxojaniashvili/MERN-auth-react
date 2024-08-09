import React from "react";
import Header from "./pages/header/Header";
import { Route, Routes } from "react-router-dom";
import { Signin, Signup, Dashboard } from "./pages/common.js";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/sign-in" element={<Signin></Signin>}></Route>
        <Route path="/sign-up" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
};

export default App;
