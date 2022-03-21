import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./Meal Item/MealItem";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://bd-project-12ea0-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.mealsIsLoading}>
        <p>{error}</p>
      </section>
    );
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => {
            return (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};
