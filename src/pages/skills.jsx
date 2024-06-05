import React, { useEffect, useState } from "react";
import axios from "axios";

import vscode from "../assests/vscode.png";
import jira from "../assests/jira.png";
import bitbucket from "../assests/bitbucket.png";
import git from "../assests/git.png";

import "../styles/skills.css";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/skills")
      .then((res) => {
        setSkills(res.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  const technicalSkills = () => {
    return skills.map((mes) => (
      <div className="main-cards" key={mes.id}>
        <div className="card">
          <img src={mes.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{mes.skill}</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="example"
              aria-valuenow={mes.widths}
              aria-valuemin="0"
              aria-valuemax="100"
              color={mes.bgcolor}
            >
              <div
                className="progress-bar text-dark"
                style={{ width: `${mes.widths}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const toolsAndPractices = () => {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={vscode} className="d-blockw-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bitbucket} className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={git} className="d-block w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={jira} className="d-block w-50" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  return (
    <div className="skills">
      <strong>Key Skills Technical Skills :</strong>
      <div className="cards">{technicalSkills()}</div>
      <strong>Tools & Practices :</strong>
      <div>{toolsAndPractices()}</div>
      <strong>Tools & Practices :</strong>
      <ul>
        <li>VS Code</li>
        <li>JIRA</li>
        <li>GIT</li>
        <li>Responsive web design</li>
      </ul>
      <strong>Developing Methodologies Used:</strong>
      <ul>
        <li>Agile Methodologies</li>
      </ul>
      <strong>Collaboration Tools Used :</strong>
      <ul>
        <li>Bitbucket</li>
      </ul>
      <strong>Certification :</strong>
      <ul>
        <li>AWS Cloud Practitioner</li>
      </ul>
      <strong>Soft Skills :</strong>
      <ul>
        <li>
          Good in mentoring the team members to get expertise in the
          applications they work. Good Written & Verbal communication skills and
          attentive listening ability Strong analytical approach and Good Time
          Management. Proactive and committed.
        </li>
      </ul>
    </div>
  );
};
