import { Formik, Form } from 'formik';

import TextInput from '@components/inputs/TextInput';

import './styles.scss';

type FormValues = {
  name: string;
  phone: string;
  city: string;
  email: string;
  password: string;
  confirmation: string;
};

function initFormValues(): FormValues {
  return {
    name: '',
    phone: '',
    city: '',
    email: '',
    password: '',
    confirmation: '',
  };
}

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initFormValues()}
      validate={values => {
        const errors = initFormValues();

        if (!values.name) {
          errors.name = 'Campo obrigatório';
        }
        if (!values.phone) {
          errors.phone = 'Campo obrigatório';
        } else if (!/^\d{11}$/i.test(values.phone)) {
          errors.phone = 'Número de telefone inválido';
        }
        if (!values.city) {
          errors.city = 'Campo obrigatório';
        }
        if (!values.email) {
          errors.email = 'Campo obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Email inválido';
        }
        if (!values.password) {
          errors.password = 'Campo obrigatório';
        }
        if (!values.confirmation) {
          errors.confirmation = 'Campo obrigatório';
        } else if (values.password !== values.confirmation) {
          errors.confirmation = 'As senhas não conferem';
        }

        const hasErrors = Object.values(errors).some(error => error);

        if (hasErrors) {
          return errors;
        }
      }}
      onSubmit={values => {
        console.log('Submeti os dados!', values);
      }}>
      {formik => (
        <Form className="register-form" onSubmit={formik.handleSubmit}>
          <h2 className="register-form__title">Crie seu cadastro</h2>

          <p className="register-form__paragraph">
            Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em
            seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de
            trabalho.
          </p>

          <div className="register-form__form">
            <div className="register-form__form__name">
              <TextInput label="Nome" name="name" />
            </div>

            <div className="register-form__form__phone">
              <TextInput label="Celular" name="phone" />
            </div>

            <div className="register-form__form__city">
              <TextInput label="Cidade" name="city" />
            </div>

            <div className="register-form__form__email">
              <TextInput label="E-mail" name="email" />
            </div>

            <div className="register-form__form__password">
              <TextInput label="Senha" name="password" />
            </div>

            <div className="register-form__form__confirmation">
              <TextInput label="Repita a senha" name="confirmation" />
            </div>
          </div>

          <div className="register-form__actions">
            <button className="register-form__actions__submit" type="button">
              anterior
            </button>

            <button className="register-form__actions__submit" type="submit">
              continuar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
