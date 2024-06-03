import React from "react";

import "../styles/spinner.css";

export const Spinner = () => {
  return (
    <div className="spinner">
	<div className="sBall" id="sBall_1">
		<div className="spinnerBall"></div>
	</div>
	<div className="sBall" id="sBall_2">
		<div className="spinnerBall"></div>
	</div>
	<div className="sBall" id="sBall_3">
		<div className="spinnerBall"></div>
	</div>
	<div className="sBall" id="sBall_4">
		<div className="spinnerBall"></div>
	</div>
	<div className="sBall" id="sBall_5">
		<div className="spinnerBall"></div>
	</div>
</div>
  );
};
