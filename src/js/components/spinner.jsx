import React from "react";
import "./spinner.css";

// Import spinner (https://github.com/davidhu2000/react-spinners)
import SyncLoader from "react-spinners/SyncLoader";

export const Spinner = () => (
	<div className="loading-spinner-container">
		<div className="loading-spinner">
			<SyncLoader color="#000" size={20} margin={4} />
		</div>
	</div>
);
