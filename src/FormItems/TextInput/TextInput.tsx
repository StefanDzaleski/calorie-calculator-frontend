import React, { FunctionComponent } from "react";
import { useField } from "formik";

interface Props {
  name: string;
  mealIngredient?: boolean;
}

const TextInput: FunctionComponent<Props> = ({ name, mealIngredient }) => {
  const [field] = useField({ name });

  return (
    <div>
      <label>{mealIngredient ? "Ingredient" : name}: </label>
      <input {...field} />
    </div>
  );
};

export default TextInput;
