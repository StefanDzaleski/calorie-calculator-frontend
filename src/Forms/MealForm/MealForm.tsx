import { Formik, Form, FieldArray } from "formik";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MealIngredient from "../../FormItems/MealIngredient/MealIngredient";
import TextInput from "../../FormItems/TextInput/TextInput";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { initialIngredient } from "../../utils/IngredientProperties";

function MealForm() {
  const [ingredientList, setIngredientList] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getData = useCallback(() => {
    axiosPrivate
      .get("ingredient/get-ingredients")
      .then(function (response) {
        console.log("Getting ingredients response: ", response);
        const mappedIngredientList = response.data.map((i: any) => {
          return { id: i.id, label: i.name };
        });
        setIngredientList(mappedIngredientList);
      })
      .catch(function (error) {
        console.log("Getting ingredients error: ", error);
      });
  }, [axiosPrivate]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addMeal = (values: any, helpers: any) => {
    axiosPrivate
      .post("/add-meal", { values })
      .then(function (response) {
        console.log("Adding meal response: ", response);
        helpers.resetForm({
          values: { type: "", ingredients: [initialIngredient] },
        });
      })
      .catch(function (error) {
        console.log("Adding meal error: ", error);
      });
  };

  return (
    <>
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
      <Link to="/new-ingredient">New ingredient</Link>
    </>
  );
}

export default MealForm;
