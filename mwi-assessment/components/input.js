import React from "react";

export default function Input(props) {
  const {
    submitTried,
    isValid,
    onChange,
    placeholder,
    value,
    divClass,
    errorClass,
  } = props;

  return (
    <div className={divClass}>
      <input
        autoComplete="off"
        className={
          isValid
            ? "inputs-primary"
            : submitTried && !isValid
            ? "inputs-primary-invalid"
            : "inputs-primary"
        }
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <p className={isValid ? "hidden" : submitTried ? errorClass : "hidden"}>
        Required
      </p>
    </div>
  );
}
