import React from "react";

import "../styles/experienceSummary.css"

export default function Experiencesummary(){
  return (
    <div>
      <h5 className="card-title">Experience summary</h5>
      <br />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
            >
              <strong>Wipro technologies</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Total Years of Experience:</strong>
              <p>2 Years 0 Months</p>
              <strong>Project</strong>
              <p>Echostar Purchasing Corporations</p>
              <strong>Domain</strong>
              <p>Media And Entertainment</p>
              <strong>Role</strong>
              <p>Developer L1</p>
              <strong>Duration</strong>
              <p>May,2022 - August,2023</p>
              <strong>Location</strong>
              <p>Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Mazda Logistics</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Total Years of Experience:</strong>
              <p>2 Years 0 Months</p>
              <strong>Project</strong>
              <p>Mazda Logistics</p>
              <strong>Domain :</strong>
              <p>E-Commerce</p>
              <strong>Role</strong>
              <p>Developer L1</p>
              <strong>Duration</strong>
              <p>August,2023 - Present</p>
              <strong>Location</strong>
              <p>Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
