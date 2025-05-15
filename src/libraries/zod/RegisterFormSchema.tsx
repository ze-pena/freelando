import { z } from 'zod';

const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(3, 'Insira o nome completo')
      .max(50, 'O nome excede o limite máximo do campo'),
    birthday: z
      .date({ coerce: true })
      .min(new Date('1960-01-01'), 'Limite mínimo inválido')
      .max(new Date(), 'Limite máximo inválido')
      .or(z.literal(''))
      .refine(value => value, { message: 'Campo obrigatório' }),
    uf: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(2, 'Selecione o seu estado')
      .max(2, 'O estado excede o tamanho máximo exigido'),
    city: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(3, 'Insira o nome completo da cidade')
      .max(50, 'O nome da cidade excede o limite máximo do campo'),
    email: z
      .string()
      .min(1, 'Campo obrigatório')
      .email('Formato de email inválido')
      .transform(value => value.toLocaleLowerCase()),
    phone: z
      .string()
      .min(1, 'Campo obrigatório')
      .regex(/^\d{11}$/i, 'Formato de telefone inválido'),
    password: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .max(8, 'A senha deve conter no máximo 8 caracteres'),
    confirmation: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .max(8, 'A senha deve conter no máximo 8 caracteres'),
  })
  .refine(data => data.password === data.confirmation, {
    message: 'As senhas não conferem',
    path: ['confirmation'],
  });

type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

export { RegisterFormSchema, type RegisterFormSchemaType };
