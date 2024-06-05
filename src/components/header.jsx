import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import React from "react";

import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Hobbies } from "../pages/Hobbies";
import { Skills } from "../pages/Skills";
import "../styles/header.css"

export const Header = () => {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Link className="nav" to="/">
            About
          </Link>
          <Link className="nav" to="/Skills">
            Skills
          </Link>
          <Link className="nav" to="/Projects">
            Projects
          </Link>
          <Link className="nav" to="/Hobbies">
            Hobbies
          </Link>
        </div>
        <br></br>
        <Outlet />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
