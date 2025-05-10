import { Formik, Form } from 'formik';

import CommonInput from '@components/inputs/CommonInput';
import SelectInput from '@components/inputs/SelectInput';

import { uf } from '../../../data/uf';
import { initFormValues } from './types';

import RegisterFormSchema from '../../../libraries/yup/RegisterFormSchema';

import './styles.scss';

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initFormValues()}
      validationSchema={RegisterFormSchema}
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
              <CommonInput label="Nome" name="name" type="text" />
            </div>

            <div className="register-form__form__birthday">
              <CommonInput label="Data de nascimento" name="birthday" type="date" />
            </div>

            <div className="register-form__form__uf">
              <SelectInput label="Estado" name="uf" options={uf} />
            </div>

            <div className="register-form__form__city">
              <CommonInput label="Cidade" name="city" type="text" />
            </div>

            <div className="register-form__form__email">
              <CommonInput label="E-mail" name="email" type="email" />
            </div>

            <div className="register-form__form__email">
              <CommonInput label="Telefone" name="phone" type="text" />
            </div>

            <div className="register-form__form__password">
              <CommonInput label="Senha" name="password" type="password" />
            </div>

            <div className="register-form__form__confirmation">
              <CommonInput label="Repita a senha" name="confirmation" type="password" />
            </div>
          </div>

          <div className="register-form__actions">
            <button className="register-form__actions__cancel" type="button">
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
