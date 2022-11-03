import React from "react";
import { Link } from "react-router-dom";

const Products = ({ meal }) => {
  return (
    <>
      <li>
        <p>
          <Link to={`/product/${meal.idMeal}`}>{meal.strMeal}</Link>
        </p>
        <span>{meal.idMeal}</span>
      </li>
    </>
  );
};

export default Products;
