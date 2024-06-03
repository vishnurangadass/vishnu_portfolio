import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import React from "react";

import { About } from "../pages/about";
import { Projects } from "../pages/projects";
import { Hobbies } from "../pages/hobbies";
import { Skills } from "../pages/skills";
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
