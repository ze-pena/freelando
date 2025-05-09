import styles from './styles.module.scss';
import { ErrorMessage, Field } from 'formik';

type Props = {
  label: string;
  name: string;
};

export default function TextInput(props: Props) {
  return (
    <div className={styles['text-input']}>
      <label htmlFor={props.name} className={styles['text-input__label']}>
        {props.label}
      </label>

      <Field className={styles['text-input__input']} name={props.name} type="text" />

      <ErrorMessage name={props.name}>
        {messages => <div className={styles['text-input__error-message']}>{messages}</div>}
      </ErrorMessage>
    </div>
  );
}
