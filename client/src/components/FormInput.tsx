import React from 'react';
import '../styles/FormInput.scss';

interface Props {
  value: string;
  submitValue: (value: string) => void;
  label?: string;
  name?: string;
  type?: string;
  required?: boolean;
}

const FormInput: React.FC<Props> = ({
  value,
  label,
  submitValue,
  ...inputAttrs
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    submitValue(e.target.value);

  return (
    <div className="group">
      <input
        className="form-input"
        value={value}
        onChange={handleChange}
        {...inputAttrs}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
