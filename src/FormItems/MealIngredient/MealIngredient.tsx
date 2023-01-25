import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { getIn, useFormikContext } from "formik";
import { FunctionComponent } from "react";
import TextInput from "../TextInput/TextInput";

interface Props {
  prefix: string;
  // Interface to be added
  ingredientsList: any[];
}

const MealIngredient: FunctionComponent<Props> = ({
  prefix,
  ingredientsList,
}) => {
  const fieldName = prefix ? `${prefix}.ingredient` : "ingredient";
  const { values, setFieldValue } = useFormikContext();
  const value = getIn(values, fieldName);

  return (
    <div>
      <Autocomplete
        id="ingredient"
        options={ingredientsList}
        sx={{ width: 300 }}
        onChange={(e, value) => setFieldValue(fieldName, value.id)}
        value={value.id}
        renderInput={(params) => <TextField {...params} label="Ingredient" />}
      />
      <TextInput name={"quantity"} prefix={prefix} label={"Quantity"} />
    </div>
  );
};

export default MealIngredient;
