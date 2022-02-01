import React from "react";

// Spinner (https://github.com/davidhu2000/react-spinners)
import SyncLoader from "react-spinners/SyncLoader";

// Styles
import "./spinner.css";

export const Spinner = () => (
	<div className="loading-spinner-container">
		<div className="loading-spinner">
			<SyncLoader color="#000" size={20} margin={5} />
		</div>
	</div>
);
