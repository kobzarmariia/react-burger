import React from 'react';
import './BurgerIngredient.css';

import PropTypes from 'prop-types';

const BurgerIngredient = ({ type }) => {
	let ingredient = null;

	switch (type) {
		case 'bread-bottom':
			ingredient = <div className="BreadBottom"></div>;
			break;
		case 'bread-top':
			ingredient = <div className="BreadTop"></div>;
			break;
		case 'meat':
			ingredient = <div className="Meat"></div>;
			break;
		case 'cheese':
			ingredient = <div className="Cheese"></div>;
			break;
		case 'bacon':
			ingredient = <div className="Bacon"></div>;
			break;
		case 'salad':
			ingredient = <div className="Salad"></div>;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
