import React, { FunctionComponent } from "react";
import { useField } from "formik";

interface Props {
  name: string;
}

const TextInput: FunctionComponent<Props> = ({ name }) => {
  const [field] = useField({ name });

  return (
    <div>
      <label htmlFor={name}>{name}: </label>
      <input {...field} />
    </div>
  );
};

export default TextInput;
