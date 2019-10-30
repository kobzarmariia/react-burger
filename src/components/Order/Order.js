import React from 'react';

import './Order.css';

const order = ({ price, ingredients }) => {
	const ingredientsArray = [];

	for (let ingredientName in ingredients) {
		ingredientsArray.push({
			name: ingredientName,
			amount: ingredients[ingredientName],
		});
	}

	const ingredientOutput = ingredientsArray.map(ig => {
		return (
			<span
				style={{
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border: '1px solid #ccc',
					padding: '5px',
				}}
				key={ig.name}
			>
				{ig.name} ({ig.amount})
			</span>
		);
	});

	return (
		<div className="Order">
			<p>Ingredients: {ingredientOutput}</p>
			<p>
				Price: <strong>USD {Number.parseFloat(price).toFixed(2)}</strong>
			</p>
		</div>
	);
};

export default order;
