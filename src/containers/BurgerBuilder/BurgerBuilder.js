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

const BurgerBuilder = props => {
	const [purchasing, setPurchasing] = useState(false);

	const purchaseHandler = () => {
		if (props.isAuthenticated) {
			setPurchasing(true);
		} else {
			props.onSetAuthRedirectPath('/checkout');
			props.history.push('/auth');
		}
	};

	useEffect(() => {
		props.onInitIngregients();
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
		props.onInitPurchase();
		props.history.push('/checkout');
	};

	const disabledInfo = {
		...props.ings,
	};
	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}
	let orderSummary = null;
	let burger = props.error ? <p>Ingredients can`t be loaded!</p> : <Spinner />;

	if (props.ings) {
		burger = (
			<>
				<Burger ingredients={props.ings} />
				<BuildControls
					ingredientAdded={props.onIngredientAdded}
					ingredientRemoved={props.onIngredientRemoved}
					disabled={disabledInfo}
					purchasable={updatePurchaseState(props.ings)}
					ordered={purchaseHandler}
					price={props.price}
					isAuth={props.isAuthenticated}
				/>
			</>
		);
		orderSummary = (
			<OrderSummary
				ingredients={props.ings}
				price={props.price}
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

const mapStateToProps = state => ({
	ings: state.burgerBuilder.ingredients,
	price: state.burgerBuilder.totalPrice,
	error: state.burgerBuilder.error,
	isAuthenticated: state.auth.token !== null,
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
