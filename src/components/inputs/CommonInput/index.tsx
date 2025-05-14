import { type FieldError } from 'react-hook-form';
import './styles.scss';

type InputType = 'text' | 'number' | 'date' | 'email' | 'password';

type Props = {
  label: string;
  name: string;
  type: InputType;
  error?: FieldError;
};

export default function CommonInput({ label, name, type, error, ...args }: Props) {
  return (
    <div className="common-input">
      <label htmlFor={name} className="common-input__label">
        {label}
      </label>

      <input className="common-input__input" id={name} name={name} type={type} {...args} />

      {!!error && <div className="common-input__error-message">{error.message}</div>}
    </div>
  );
}
