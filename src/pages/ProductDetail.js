import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [meals, setMeals] = useState([]);
  let { mealId } = useParams();

  const getMeals = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setMeals(res.data.meals));
  };
  useEffect(() => {
    getMeals();
  }, []);

  let thisMeal = meals.find((meal) => meal.idMeal === mealId);

  return (
    <div>
      <h3>{thisMeal?.strMeal}</h3>
      <p>{thisMeal?.strInstructions}</p>
    </div>
  );
};

export default ProductDetail;
