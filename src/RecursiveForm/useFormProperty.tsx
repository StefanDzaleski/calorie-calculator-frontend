import { useFormikContext, getIn } from 'formik';
import DynamicFormProperty from './DynamicFormProperty';
 
function useFormProperty(prefix: string) {
  const { values, setFieldValue } = useFormikContext();
 
  const properties: DynamicFormProperty[] = getIn(
    values,
    `${prefix}properties`,
  );
 
  const addNewProperty = () => {
    const newProperty: DynamicFormProperty = {
      label: '',
      properties: [],
    };
 
    const newProperties = [...properties, newProperty];

    console.log('new property', `${prefix}properties`, newProperties);
 
    setFieldValue(`${prefix}properties`, newProperties);
  };
  
  return {
    properties,
    addNewProperty,
  };
}
 
export default useFormProperty;