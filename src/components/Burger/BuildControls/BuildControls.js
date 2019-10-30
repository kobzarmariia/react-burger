import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = ({
	price,
	ingredientAdded,
	disabled,
	ingredientRemoved,
	purchasable,
	ordered,
	isAuth,
}) => (
	<div className="BuildControls">
		<p>
			Current Price: <strong>{price.toFixed(2)}</strong>
		</p>
		{controls.map(ctrl => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				added={() => ingredientAdded(ctrl.type)}
				removed={() => ingredientRemoved(ctrl.type)}
				disabled={disabled[ctrl.type]}
			/>
		))}
		<button className="OrderButton" disabled={!purchasable} onClick={ordered}>
			{isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
		</button>
	</div>
);

export default buildControls;
