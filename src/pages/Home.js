import React, { useState, useEffect } from "react";
import axios from "axios";

import Products from "../components/Products";

const Home = () => {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setMeals(res.data.meals));
  };
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
      <ul>
        {meals &&
          meals.map((meal, index) => <Products key={index} meal={meal} />)}
      </ul>
    </div>
  );
};

export default Home;
