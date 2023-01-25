import { FunctionComponent } from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  prefix?: string;
  label?: string;
}

const TextInput: FunctionComponent<Props> = ({ name, prefix, label }) => {
  const fieldName = prefix ? `${prefix}.${name}` : name;
  const [field] = useField(fieldName);

  return (
    <TextField
      id="outlined-basic"
      label={label ? label : name}
      variant="outlined"
      {...field}
    />
  );
};

export default TextInput;
