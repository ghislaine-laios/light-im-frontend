/** @jsxImportSource @emotion/react */
import AuthWrapper, {
  AuthButton,
  AuthInputElement,
} from "../components/auth/AuthWrapper";
import { Button, css, Link, Stack, Typography } from "@mui/material";

const flexItemCss = css`
  flex: 1;
`;

export default function Register() {
  return (
    <AuthWrapper
      meta={{
        title: "Register",
        link: { description: "Already have an account?", href: "/login" },
      }}
    >
      <Stack direction="row" spacing={3}>
        <AuthInputElement
          name="first-name"
          label="First Name"
          placeholder="John"
          required={true}
          css={flexItemCss}
        ></AuthInputElement>
        <AuthInputElement
          name="last-name"
          label="Last Name"
          placeholder="Doe"
          css={flexItemCss}
        ></AuthInputElement>
      </Stack>
      <AuthInputElement
        name="email-address"
        label="Email Address"
        type="email"
        placeholder="doe@example.com"
        required={true}
      ></AuthInputElement>
      <AuthInputElement
        name="password"
        label="Password"
        type="password"
        placeholder="********"
        required={true}
      ></AuthInputElement>
      <Typography fontSize={"0.875em"}>
        By signing up, you agree with our{" "}
        <Link underline="none" href="/terms">
          Terms
        </Link>{" "}
        and{" "}
        <Link underline="none" href="/privacy-policy">
          Privacy Policy
        </Link>
        .
      </Typography>
      <AuthButton>Register</AuthButton>
    </AuthWrapper>
  );
}
