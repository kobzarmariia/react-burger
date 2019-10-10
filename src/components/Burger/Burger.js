import React from "react";
import "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngridient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className="Burger">
      <BurgerIngridient type="bread-top" />
      {transformedIngredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
