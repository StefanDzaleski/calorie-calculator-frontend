import { useField } from "formik";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  prefix?: string;
  label?: string;
  type?: string;
}

function TextInput({ name, prefix, label, type }: Props) {
  const fieldName = prefix ? `${prefix}.${name}` : name;
  const [field] = useField(fieldName);

  return (
    <TextField
      label={label ? label : name}
      variant="outlined"
      type={type}
      {...field}
    />
  );
}

export default TextInput;
