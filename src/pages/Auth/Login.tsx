import { useFormik } from "formik";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Input from "./components/UI/Input";
import Label from "./components/UI/Label";
import Form from "./components/UI/Form";
import InputWrapper from "../../components/UI/InputWrapper";
import Container from "./components/UI/Container";
import Logo from "../../components/UI/Logo";
import LoginRegisterLink from "./components/UI/LoginRegisterLink";
import { LoginTypes } from "../../interfaces/auth";
import validationSchema from "../../utils/validationSchema";
import apiService from "../../services/api/apiService";

import { ServerError } from "../../interfaces/api";
import tokenMethods from "../../utils/token/tokenMethods";
import { routes } from "../../constants/routes";

const Login = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: onLogin } = useMutation(
    (values: LoginTypes) => apiService.login(values),
    {
      onSuccess: (data) => {
        tokenMethods.saveToken({ token: data?.data });
        navigate(routes.home);
      },
      onError: (error: AxiosError<ServerError>) => {
        toast.error(error.message);
      },
    }
  );

  const initialValues: LoginTypes = {
    email: "test@example.com",
    password: "12345",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema.login,
    onSubmit: (values) => {
      onLogin(values);
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
