import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import axiosInstance from "./axiosInstance";

function App() {
  const [calories, setCalories] = useState("");

  useEffect(() => {
    console.log("calories", calories);
  }, [calories]);

  const addItem = () => {
    axiosInstance
      .post("http://localhost:3001/add-item", { calories })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">Calorie calculator app</header>
      <input
        type="text"
        onChange={(event) => setCalories(event.target.value)}
      />
      <button onClick={() => addItem()}>Add item</button>
    </div>
  );
}

export default App;
