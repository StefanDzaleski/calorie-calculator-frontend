import { Formik, Form, FieldArray } from "formik";
import { FunctionComponent } from "react";
import axiosInstance from "../../axiosInstance";
import MealIngredient from "../../FormItems/MealIngredient/MealIngredient";
import TextInput from "../../FormItems/TextInput/TextInput";
import { initialIngredient } from "../../utils/IngredientProperties";

interface Props {
  // Interface to be added
  ingredientList: any[];
}

const MealForm: FunctionComponent<Props> = ({ ingredientList }) => {
  const addMeal = (values: any, helpers: any) => {
    axiosInstance
      .post("/add-meal", { values })
      .then(function (response) {
        console.log(response);
        helpers.resetForm({
          values: { type: "", ingredients: [initialIngredient] },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Formik
      onSubmit={addMeal}
      initialValues={{
        type: "",
        ingredients: [initialIngredient],
      }}
    >
      {({ values }) => (
        <Form>
          <TextInput name={`type`} prefix={""} />
          <FieldArray
            name="ingredients"
            render={(arrayHelpers) => (
              <div>
                {values.ingredients.map((ingredient, index) => (
                  <MealIngredient
                    key={`ingredients${index}`}
                    prefix={`ingredients[${index}]`}
                    ingredientsList={ingredientList}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.insert(
                      values.ingredients.length,
                      initialIngredient
                    )
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
};

export default MealForm;
