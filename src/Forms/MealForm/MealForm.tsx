import { Formik, Form, FieldArray } from "formik";
import axiosInstance from "../../axiosInstance";
import TextInput from "../../FormItems/TextInput/TextInput";

function MealForm() {
  const addMeal = (values: any, helpers: any) => {
    axiosInstance
      .post("/add-meal", { values })
      .then(function (response) {
        console.log(response);
        helpers.resetForm({ values: { type: "", ingredients: [""] } });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Formik onSubmit={addMeal} initialValues={{ type: "", ingredients: [""] }}>
      {({ values }) => (
        <Form>
          <TextInput name={`type`} />
          <FieldArray
            name="ingredients"
            render={(arrayHelpers) => (
              <div>
                {values.ingredients.map((ingredient, index) => (
                  <TextInput
                    key={`ingredient${index}`}
                    name={`ingredients[${index}]`}
                    mealIngredient={true}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.insert(values.ingredients.length, "")
                  }
                >
                  Add ingredient
                </button>
              </div>
            )}
          />
          <button type="submit">Submit meal</button>
        </Form>
      )}
    </Formik>
  );
}

export default MealForm;
