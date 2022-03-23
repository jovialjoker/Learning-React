import React from "react";
import { MealItem } from "./MealItem";
export const Meals = ({ meals }) => {
  return (
    <>
      <h1>Meals:</h1>
      <ul>
        {meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </ul>
    </>
  );
};
