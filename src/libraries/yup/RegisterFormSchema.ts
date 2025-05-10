import { object, string, date, ref } from 'yup';

export default function RegisterFormSchema() {
  return object().shape({
    name: string()
      .required('Campo obrigatório')
      .min(3, 'Insira o nome completo')
      .max(50, 'O nome excede o limite máximo do campo'),
    birthday: date()
      .required('Campo obrigatório')
      .min(new Date('1960-01-01'), 'Limite mínimo inválido')
      .max(new Date(), 'Limite máximo inválido'),
    uf: string().required('Campo obrigatório'),
    city: string()
      .required('Campo obrigatório')
      .min(3, 'Insira o nome completo da cidade')
      .max(50, 'O nome da cidade excede o limite máximo do campo'),
    email: string().required('Campo obrigatório').email('Email inválido'),
    phone: string()
      .required('Campo obrigatório')
      .matches(/^\d{11}$/i, 'Este número de telefone é inválido'),
    password: string()
      .required('Campo obrigatório')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .max(8, 'A senha deve conter no máximo 8 caracteres'),
    confirmation: string()
      .required('Campo obrigatório')
      .oneOf([ref('password'), ''], 'As senhas não conferem'),
  });
}
