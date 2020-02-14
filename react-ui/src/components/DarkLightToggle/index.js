import React from 'react';
import './index.css';
const DarkLightToggle = ({
	onChange
}) => {
	return (
		<div className="DarkLightToggle">
			<input
				onChange={onChange}
				id="DarkLightToggle"
				type="checkbox"
			/>
			<label
				for="DarkLightToggle"
				className="DarkLightTogglewrap"></label>
		</div>
	);
};

export default DarkLightToggle;
