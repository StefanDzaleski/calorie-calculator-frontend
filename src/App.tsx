import { useEffect, useState } from "react";
import "./App.css";
import axiosInstance from "./axiosInstance";
import IngredientForm from "./Forms/IngredientForm/IngredientForm";
import MealForm from "./Forms/MealForm/MealForm";

function App() {
  const [addingIngredient, setAddingIngredient] = useState(false);
  function handleFormChange() {
    setAddingIngredient((prevValue) => !prevValue);
  }

  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/get-ingredients")
      .then(function (response) {
        console.log(response);
        const mappedIngredientList = response.data.map((i: any) => {
          return { id: i.id, label: i.name };
        });
        setIngredientList(mappedIngredientList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"> Calorie calculator app </header>
      {addingIngredient ? (
        <IngredientForm />
      ) : (
        <MealForm ingredientList={ingredientList} />
      )}
      <button type="button" onClick={handleFormChange}>
        {addingIngredient ? "Add new meal" : "Add new ingredient"}
      </button>
    </div>
  );
}

export default App;
