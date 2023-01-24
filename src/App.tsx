import { useState } from "react";
import "./App.css";
import IngredientForm from "./Forms/IngredientForm/IngredientForm";
import MealForm from "./Forms/MealForm/MealForm";

function App() {
  const [addingIngredient, setAddingIngredient] = useState(false);
  function handleFormChange() {
    setAddingIngredient((prevValue) => !prevValue);
  }
  return (
    <div className="App">
      <header className="App-header"> Calorie calculator app </header>
      {addingIngredient ? <IngredientForm /> : <MealForm />}
      <button type="button" onClick={handleFormChange}>
        {addingIngredient ? "Add new meal" : "Add new ingredient"}
      </button>
    </div>
  );
}

export default App;
