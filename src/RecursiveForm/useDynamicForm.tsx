import DynamicFormProperty from "./DynamicFormProperty";

 
function useDynamicForm() {
  const initialValues: DynamicFormProperty = {
    label: '',
    properties: [],
  };
 
  const handleSubmit = (values: DynamicFormProperty) => {
    console.log(values);
  };
 
  return {
    initialValues,
    handleSubmit,
  };
}
 
export default useDynamicForm;