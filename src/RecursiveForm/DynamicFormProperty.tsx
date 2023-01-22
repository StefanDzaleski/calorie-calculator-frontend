interface DynamicFormProperty {
    id?: string;
    label: string;
    properties: DynamicFormProperty[];
  }
   
  export default DynamicFormProperty;