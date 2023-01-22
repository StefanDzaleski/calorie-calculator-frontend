import { Form, Formik } from "formik";
import "./App.css";
import axiosInstance from "./axiosInstance";
import TextInput from "./FormItems/TextInput/TextInput";

function App() {
  const addIngredient = (values: any) => {
    axiosInstance
      .post("https://calorie-calculator-backend.vercel.app/add-ingredient", { values })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const getItems = () => {
  //   axiosInstance
  //     // .get("http://localhost:3001/get-items")
  //     .get("https://calorie-calculator-backend.vercel.app/get-items")
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const initialValues = {};

  return (
    <div className="App">
      <header className="App-header"> Calorie calculator app </header>{" "}
      {/* <input
        type="text"
        onChange={(event) => setCalories(event.target.value)}
      />{" "} */}
      {/* <button onClick={() => addItem()}> Add item </button>{" "} */}
      {/* <button onClick={() => getItems()}> Get items </button>{" "} */}
      <Formik onSubmit={addIngredient} initialValues={initialValues}>
        <Form>
          <TextInput name="name"/>
          <TextInput name="calories"/>
          <TextInput name="carbohydrates"/>
          <TextInput name="sugars"/>
          <TextInput name="proteins"/>
          <TextInput name="fat"/>
          <TextInput name="fiber"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;