import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .max(50, "Username must be less than 50 characters")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Required"),
});
