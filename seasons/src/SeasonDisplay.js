// @format
import "./SeasonDisplay.css";

import React from "react";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = props => {
	const seasonConfig = {
		summer: {
			text: "Let's hit beach",
			iconName: "sun"
		},
		winter: {
			text: "Burr it's chilly",
			iconName: "snowflake"
		}
	};
	const season = getSeason(props.lat, new Date().getMonth());

	// this is using sementic ui. Check the documentation for available icons and how to use them
	const { text, iconName } = seasonConfig[season];

	// a good practice here to have the style class name matches your component
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
