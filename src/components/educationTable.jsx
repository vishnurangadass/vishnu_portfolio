import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/educationTable.css"

export default function Educationtable (){
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/education")
      .then((res) => {
        setEducation(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
       <h5 className="card-title">Education Details</h5>
        <br/>
      <table className="education-table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Institute Name</th>
            <th scope="col">Year</th>
            <th scope="col">Course</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {education.map((value) => {
            return (
              <tr key={value.id}>
                <th scope="row">{value.id}</th>
                <td>{value.institute}</td>
                <td>{value.year}</td>
                <td>{value.course}</td>
                <td>{value.percentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
