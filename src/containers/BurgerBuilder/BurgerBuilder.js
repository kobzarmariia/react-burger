import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { addIngredient, removeIngredient, initIngredients } from './actions';
import { purchaseInit } from '../Orders/actions';
import { setAuthRedirectPath } from '../Auth/actions';

const BurgerBuilder = ({
	isAuthenticated,
	onSetAuthRedirectPath,
	history,
	onInitIngregients,
	onInitPurchase,
	ings,
	error,
	price,
	onIngredientAdded,
	onIngredientRemoved,
}) => {
	const [purchasing, setPurchasing] = useState(false);

	const purchaseHandler = () => {
		if (isAuthenticated) {
			setPurchasing(true);
		} else {
			onSetAuthRedirectPath('/checkout');
			history.push('/auth');
		}
	};

	useEffect(() => {
		onInitIngregients();
		// eslint-disable-next-line
	}, []);

	const updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		return sum > 0;
	};

	const purchaseCancelHandler = () => {
		setPurchasing(false);
	};

	const purchaseContinueHandler = () => {
		onInitPurchase();
		history.push('/checkout');
	};

	const disabledInfo = {
		...ings,
	};
	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}
	let orderSummary = null;
	let burger = error ? <p>Ingredients can`t be loaded!</p> : <Spinner />;

	if (ings) {
		burger = (
			<>
				<Burger ingredients={ings} />
				<BuildControls
					ingredientAdded={onIngredientAdded}
					ingredientRemoved={onIngredientRemoved}
					disabled={disabledInfo}
					purchasable={updatePurchaseState(ings)}
					ordered={purchaseHandler}
					price={price}
					isAuth={isAuthenticated}
				/>
			</>
		);
		orderSummary = (
			<OrderSummary
				ingredients={ings}
				price={price}
				purchaseCancelled={purchaseCancelHandler}
				purchaseContinued={purchaseContinueHandler}
			/>
		);
	}
	return (
		<>
			<Modal show={purchasing} modalClosed={purchaseCancelHandler}>
				{orderSummary}
			</Modal>
			{burger}
		</>
	);
};

const mapStateToProps = ({ burgerBuilder, auth }) => ({
	ings: burgerBuilder.ingredients,
	price: burgerBuilder.totalPrice,
	error: burgerBuilder.error,
	isAuthenticated: auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
	onIngredientAdded: ingName => dispatch(addIngredient(ingName)),
	onIngredientRemoved: ingName => dispatch(removeIngredient(ingName)),
	onInitIngregients: () => dispatch(initIngredients()),
	onInitPurchase: () => dispatch(purchaseInit()),
	onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
