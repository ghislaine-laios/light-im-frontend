/** @jsxImportSource @emotion/react */
import { Button, css } from "@mui/material";
import AuthWrapper, {AuthButton, AuthInputElement} from "../components/auth/AuthWrapper";

export default function Login() {
  return (
    <AuthWrapper
      meta={{
        title: "Login",
        link: { description: "Don't have an account?", href: "/register" },
      }}
    >
      <AuthInputElement
        name="email"
        label="Email"
        placeholder="doe@example.com"
      ></AuthInputElement>
      <AuthInputElement
        name="password"
        label="Password"
        placeholder="********"
        type="password"
      ></AuthInputElement>
      <AuthButton>Login</AuthButton>
    </AuthWrapper>
  );
}
