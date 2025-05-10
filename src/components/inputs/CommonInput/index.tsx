import { ErrorMessage, Field } from 'formik';
import './styles.scss';

type InputType = 'text' | 'number' | 'date' | 'email' | 'password';

type Props = {
  label: string;
  name: string;
  type: InputType;
};

export default function CommonInput({ label, name, type }: Props) {
  return (
    <div className="common-input">
      <label htmlFor={name} className="common-input__label">
        {label}
      </label>

      <Field className="common-input__input" name={name} type={type} />

      <ErrorMessage name={name}>
        {messages => <div className="common-input__error-message">{messages}</div>}
      </ErrorMessage>
    </div>
  );
}
