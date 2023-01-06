import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [calories, setCalories] = useState("");

  useEffect(() => {
    console.log(calories);
  }, [calories]);

  return (
    <div className="App">
      <header className="App-header">Calorie calculator app</header>
      <input
        type="text"
        onChange={(event) => setCalories(event.target.value)}
      />
    </div>
  );
}

export default App;
