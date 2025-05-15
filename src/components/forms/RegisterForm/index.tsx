import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  RegisterFormSchema,
  type RegisterFormSchemaType,
} from '../../../libraries/zod/RegisterFormSchema';

import CommonInput from '@components/inputs/CommonInput';
import SelectInput from '@components/inputs/SelectInput';

import { uf } from '../../../data/uf';

import './styles.scss';

export default function RegisterForm() {
  const hookForm = useForm<RegisterFormSchemaType>({
    mode: 'all',
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: '',
      birthday: undefined,
      uf: '',
      city: '',
      email: '',
      phone: '',
      password: '',
      confirmation: '',
    },
  });

  const onSubmit = (data: RegisterFormSchemaType) => console.log(data);

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
              {...hookForm.register('name')}
            />
          </div>

          <div className="register-form__form__birthday">
            <CommonInput
              label="Data de nascimento"
              type="date"
              {...hookForm.register('birthday')}
              error={hookForm.formState.errors.birthday}
            />
          </div>

          <div className="register-form__form__uf">
            <SelectInput label="Estado" options={uf} {...hookForm.register('uf')} />
          </div>

          <div className="register-form__form__city">
            <CommonInput
              label="Cidade"
              type="text"
              {...hookForm.register('city')}
              error={hookForm.formState.errors.city}
            />
          </div>

          <div className="register-form__form__email">
            <CommonInput
              label="E-mail"
              type="email"
              {...hookForm.register('email')}
              error={hookForm.formState.errors.email}
            />
          </div>

          <div className="register-form__form__email">
            <CommonInput
              label="Telefone"
              type="text"
              {...hookForm.register('phone')}
              error={hookForm.formState.errors.phone}
            />
          </div>

          <div className="register-form__form__password">
            <CommonInput
              label="Senha"
              type="password"
              {...hookForm.register('password')}
              error={hookForm.formState.errors.password}
            />
          </div>

          <div className="register-form__form__confirmation">
            <CommonInput
              label="Repita a senha"
              type="password"
              {...hookForm.register('confirmation')}
              error={hookForm.formState.errors.confirmation}
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
