import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// <Routes>
//   <Route  path='/' element={<Home />} />
//   <Route  path='Courses' element={<Courses />} />
//   <Route  path='Certificate' element={<Certificate />} />
//   <Route  path='About' element={<About />} />
//   <Route  path='Contact' element={<Contact />} />
// </Routes>

export { App };
