import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";

import Input from "./components/UI/Input";
import Label from "./components/UI/Label";
import Form from "./components/UI/Form";
import InputWrapper from "../../components/UI/InputWrapper";
import Container from "./components/UI/Container";
import Logo from "../../components/UI/Logo";
import LoginRegisterLink from "./components/UI/LoginRegisterLink";
import { LoginTypes } from "../../interfaces/auth";
import validationSchema from "../../utils/validationSchema";
import { saveToken } from "../../store/auth/auth.slice";
import apiService from "../../services/api/apiService";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const initialValues: LoginTypes = {
    email: "test@example.com",
    password: "12345",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema.login,
    onSubmit: (values) => {
      setIsLoading(true);
      apiService
        .login(values)
        .then((res) => {
          dispatch(saveToken(res!.data));
        })
        .catch((err) => toast.error(err.message))
        .finally(() => setIsLoading(false));
    },
  });

  return (
    <Container>
      <Logo />
      <Form
        display="flex"
        title="Login"
        text="Enter your credentials to continue"
        btnText="Login"
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Label text="Email" />
          <Input
            id="Email"
            type="text"
            placeholder="Your email"
            hasError={!!(formik.errors.email && formik.touched.email)}
            {...formik.getFieldProps("email")}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text="Password" />
          <Input
            id="Password"
            type="password"
            placeholder="Your password"
            hasError={!!(formik.errors.password && formik.touched.password)}
            {...formik.getFieldProps("password")}
          />
          <LoginRegisterLink text="Don't have an account?" path="/register" />
        </InputWrapper>
      </Form>
    </Container>
  );
};

export default Login;
