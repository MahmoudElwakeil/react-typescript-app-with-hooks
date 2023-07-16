import * as React from "react";
export interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: any;
}

function InputField(props: InputFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        autoFocus
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputField;
