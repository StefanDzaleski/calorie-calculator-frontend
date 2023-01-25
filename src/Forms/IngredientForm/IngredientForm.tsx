import { Formik, Form } from "formik";
import axiosInstance from "../../axiosInstance";
import TextInput from "../../FormItems/TextInput/TextInput";
import { ingredientInitialValues } from "../../utils/IngredientInitialValues";
import { ingredientProperties } from "../../utils/IngredientProperties";

function IngredientForm() {
  const addIngredient = (values: any, helpers: any) => {
    axiosInstance
      .post("/add-ingredient", { values })
      .then(function (response) {
        console.log(response);
        helpers.resetForm({ values: ingredientInitialValues });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Formik onSubmit={addIngredient} initialValues={ingredientInitialValues}>
      <Form>
        {ingredientProperties.map((property) => (
          <div key={property}>
            <TextInput name={property} />
          </div>
        ))}
        <button type="submit">Submit ingredient</button>
      </Form>
    </Formik>
  );
}

export default IngredientForm;
