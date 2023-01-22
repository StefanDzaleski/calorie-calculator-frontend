import React, { FunctionComponent } from 'react';
import TextInput from '../FormItems/TextInput/TextInput';
import useFormProperty from './useFormProperty';
 
interface Props {
  prefix?: string;
}
 
const FormProperty: FunctionComponent<Props> = ({ prefix = '' }) => {
  const { properties, addNewProperty } =
    useFormProperty(prefix);
 
  return (
    <div>
      <div>
        <TextInput name={`${prefix}label`} />
        <button
          type="button"
          onClick={addNewProperty}
        >
          +
        </button>
      </div>
      {properties.map((property, index) => (
        <div>
          <FormProperty
            key={property.id}
            prefix={`${prefix}properties[${index}].`}
          />
        </div>
      ))}
    </div>
  );
};
 
export default FormProperty;