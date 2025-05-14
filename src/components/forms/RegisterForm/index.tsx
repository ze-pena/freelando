import { useForm, FormProvider } from 'react-hook-form';

import CommonInput from '@components/inputs/CommonInput';
import SelectInput from '@components/inputs/SelectInput';

import { uf } from '../../../data/uf';
import { type FormValues, initFormValues } from './types';

import './styles.scss';

export default function RegisterForm() {
  const hookForm = useForm<FormValues>({
    mode: 'all',
    defaultValues: initFormValues(),
  });

  const password = hookForm.watch('password');

  const validateConfirmation = {
    required: (confirmation: string) => !!confirmation || 'Campo obrigatório',
    equals: (confirmation: string) => confirmation === password || 'As senhas não conferem',
  };

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <FormProvider {...hookForm}>
      <form className="register-form" onSubmit={hookForm.handleSubmit(onSubmit)}>
        <h2 className="register-form__title">Crie seu cadastro</h2>

        <p className="register-form__paragraph">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em
          seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </p>

        <div className="register-form__form">
          <div className="register-form__form__name">
            <CommonInput
              label="Nome"
              type="text"
              error={hookForm.formState.errors.name}
              {...hookForm.register('name', {
                required: 'Campo Obrigatório',
                minLength: {
                  value: 3,
                  message: 'Insira o nome completo',
                },
                maxLength: {
                  value: 50,
                  message: 'O nome excede o limite máximo do campo',
                },
              })}
            />
          </div>

          <div className="register-form__form__birthday">
            <CommonInput
              label="Data de nascimento"
              type="date"
              error={hookForm.formState.errors.birthday}
              {...hookForm.register('birthday', {
                required: 'Campo Obrigatório',
                min: {
                  value: new Date('1960-01-01').toLocaleString('en-US'),
                  message: 'Limite mínimo inválido',
                },
                max: {
                  value: new Date().toLocaleString('en-US'),
                  message: 'Limite máximo inválido',
                },
              })}
            />
          </div>

          <div className="register-form__form__uf">
            <SelectInput
              label="Estado"
              options={uf}
              {...hookForm.register('uf', {
                required: 'Campo obrigatório',
              })}
            />
          </div>

          <div className="register-form__form__city">
            <CommonInput
              label="Cidade"
              type="text"
              error={hookForm.formState.errors.city}
              {...hookForm.register('city', {
                required: 'Campo obrigatório',
                minLength: {
                  value: 3,
                  message: 'Insira o nome completo da cidade',
                },
                maxLength: {
                  value: 50,
                  message: 'O nome da cidade excede o limite máximo do campo',
                },
              })}
            />
          </div>

          <div className="register-form__form__email">
            <CommonInput
              label="E-mail"
              type="email"
              error={hookForm.formState.errors.email}
              {...hookForm.register('email', {
                required: 'Campo obrigatório',
              })}
            />
          </div>

          <div className="register-form__form__email">
            <CommonInput
              label="Telefone"
              type="text"
              error={hookForm.formState.errors.phone}
              {...hookForm.register('phone', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^\d{11}$/i,
                  message: 'Este número de telefone é inválido',
                },
              })}
            />
          </div>

          <div className="register-form__form__password">
            <CommonInput
              label="Senha"
              type="password"
              error={hookForm.formState.errors.password}
              {...hookForm.register('password', {
                required: 'Campo obrigatório',
                minLength: {
                  value: 6,
                  message: 'A senha deve conter no mínimo 6 caracteres',
                },
                maxLength: {
                  value: 8,
                  message: 'A senha deve conter no máximo 8 caracteres',
                },
              })}
            />
          </div>

          <div className="register-form__form__confirmation">
            <CommonInput
              label="Repita a senha"
              type="password"
              error={hookForm.formState.errors.confirmation}
              {...hookForm.register('confirmation', {
                required: 'Campo obrigatório',
                validate: validateConfirmation,
              })}
            />
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
      </form>
    </FormProvider>
  );
}
