import * as Yup from "yup";

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "The email is too short!")
    .max(50, "The email is too long!")
    .required("The email is required"),
  password: Yup.string()
    .min(2, "The password is too short!")
    .max(50, "The password is too long!")
    .required("The password is required"),
});

export const initialValues = {
  email: "",
  password: "",
};
