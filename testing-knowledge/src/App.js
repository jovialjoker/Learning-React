import { Meals } from "./components/Meals";
import { ItemForm } from "./components/ItemForm";
import { useState, useEffect } from "react";
function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://bd-project-12ea0-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!res.ok) {
        throw new Error("Eroare");
      }
      const data = await res.json();
      let transformedData = [];
      for (let key in data) {
        let aux = {
          id: data[key].id,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        };
        transformedData.push(aux);
      }
      setMeals(transformedData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  async function addItem(meal) {
    const res = await fetch(
      "https://bd-project-12ea0-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <>
      <ItemForm onAddItem={addItem} />
      <button onClick={fetchItems}>Fetch meals</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && <Meals meals={meals} />}
    </>
  );
}

export default App;
