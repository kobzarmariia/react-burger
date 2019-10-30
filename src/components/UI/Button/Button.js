import React from 'react';

import './Button.css';

const button = ({ btnType, clicked, disabled, children }) => (
	<button className={['Button', btnType].join(' ')} onClick={clicked} disabled={disabled}>
		{children}
	</button>
);

export default button;
