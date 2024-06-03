import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";

import "../styles/about.css";
import vishnu from "../assests/vishnuimg.png";
import { Spinner } from "../helpers/Spinner";

const Experiencesummary = lazy(() =>
  delayForDemo(import("../components/experienceSummary"))
);
const Educationtable = lazy(() =>
  delayForDemo(import("../components/educationTable"))
);

export const About = () => {
  const [greetings, setGreetings] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/about")
      .then((res) => {
        setContent(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      setGreetings("Good Morning");
    } else if (currentTime >= 12 && currentTime < 16) {
      setGreetings("Good Afternoon");
    } else {
      setGreetings("Good Evening");
    }
  }, []);

  return (
    <div className="about">
      
      <div className="summary">
      <Suspense
          fallback={
            <div className="spinner-header">
              <Spinner />
            </div>
          }
        >
        <p className="greetings">Hi there! {greetings}</p>
        <div className="card-body">
          <div className="profile">
            <img src={vishnu} alt="vishnuimage" className="vishnu" />
            <p className="profiletitle">Vishnu Rangadass</p>
          </div>
        </div>
        {content.map((mes) => {
          return (
            <div className="summary-card" key={mes.id}>
              <div className="profilecard" >
                <h5 className="card-title">Summary</h5>
                <br />
                <p className="card-text">{mes.content}</p>
              </div>
            </div>
          );
        })}
       
          <Educationtable />
          <Experiencesummary />
        </Suspense>
      </div>
    </div>
  );
};
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
