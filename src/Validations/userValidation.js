import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Username cannot be empty"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email cannot be empty"),
  password: yup
    .string()
    .min(12, "Password must be at least 8 characters")
    .max(50, "password must be at most 50 characters")
    .required("Password cannot be empty"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords donot match")
    .required("Confirm password cannot be empty"),
  iAgree: yup
    .bool()
    .oneOf(
      [true],
      "You must agree to the terms and conditions before sigining up!"
    ),
});

export const signInSchema = yup.object().shape({
  username: yup.string().required("Username cannot be empty"),
  password: yup.string().required("Password cannot be empty"),
});
