import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { purchaseBurger } from '../../Orders/actions';

import { checkValidity } from '../../../shared/utitlity';

const ContactData = ({ onOrderBurger, ings, token, userId, price, loading }) => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [orderForm, setOrderForm] = useState({
		name: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Your Name',
			},
			value: '',
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		street: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Street',
			},
			value: '',
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		zipCode: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'ZIP Code',
			},
			value: '',
			validation: {
				required: true,
				minLength: 5,
				maxLength: 5,
				isNumeric: true,
			},
			valid: false,
			touched: false,
		},
		country: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Country',
			},
			value: '',
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		email: {
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: 'Your E-Mail',
			},
			value: '',
			validation: {
				required: true,
				isEmail: true,
			},
			valid: false,
			touched: false,
		},
		deliveryMethod: {
			elementType: 'select',
			elementConfig: {
				options: [
					{ value: 'fastest', displayValue: 'Fastest' },
					{ value: 'cheapest', displayValue: 'Cheapest' },
				],
			},
			value: 'fastest',
			validation: {},
			valid: true,
		},
	});

	const orderHandler = event => {
		event.preventDefault();
		const formData = {};
		for (let formElementIdentifier in orderForm) {
			formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients: ings,
			price: price,
			orderData: formData,
			userId: userId,
		};

		onOrderBurger(order, token);
	};

	const inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...orderForm,
		};
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		setOrderForm(updatedOrderForm);
		setFormIsValid(formIsValid);
	};

	const formElementsArray = [];
	for (let key in orderForm) {
		formElementsArray.push({
			id: key,
			config: orderForm[key],
		});
	}
	let form = (
		<form onSubmit={orderHandler}>
			{formElementsArray.map(formElement => (
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					shouldValidate={formElement.config.validation}
					touched={formElement.config.touched}
					changed={event => inputChangedHandler(event, formElement.id)}
				/>
			))}
			<Button btnType="Success" disabled={!formIsValid}>
				ORDER
			</Button>
		</form>
	);
	if (loading) {
		form = <Spinner />;
	}
	return (
		<div className="ContactData">
			<h4>Enter your Contact Data</h4>
			{form}
		</div>
	);
};

const mapStateToProps = ({ burgerBuilder, order, auth }) => {
	return {
		ings: burgerBuilder.ingredients,
		price: burgerBuilder.totalPrice,
		loading: order.loading,
		token: auth.token,
		userId: auth.userId,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData, token) => dispatch(purchaseBurger(orderData, token)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(ContactData, axios));
