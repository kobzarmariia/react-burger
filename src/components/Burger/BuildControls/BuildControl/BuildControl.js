import React from 'react';
import './BuildControl.css';

const buildControl = ({ label, removed, disabled, added }) => (
	<div className="BuildControl">
		<div className="Label">{label}</div>
		<button className="Less" onClick={removed} disabled={disabled}>
			Less
		</button>
		<button className="More" onClick={added}>
			Add
		</button>
	</div>
);

export default buildControl;
