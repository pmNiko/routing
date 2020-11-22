import * as yup from "yup";

const Schema = yup.object().shape({
  usuario: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, "Minimo 5 caracteres"),
  password: yup.string().required("Este campo es obligatorio"),
});

export default Schema;
