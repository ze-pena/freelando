type FormValues = {
  name: string;
  birthday: string;
  uf: string;
  city: string;
  email: string;
  phone: string;
  password: string;
  confirmation: string;
};

export function initFormValues(): FormValues {
  return {
    name: '',
    birthday: '',
    uf: '',
    city: '',
    email: '',
    phone: '',
    password: '',
    confirmation: '',
  };
}
