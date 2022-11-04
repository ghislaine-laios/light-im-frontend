/** @jsxImportSource @emotion/react */
import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CardContentProps,
  colors,
  css,
  InputLabel,
  Link,
  OutlinedInputProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { FormHTMLAttributes, ReactNode } from "react";
import { FunnyInput } from "../input";

const ViewExpandBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.grey[50]};
`;

const StackCardContent = (props: CardContentProps) => (
  <CardContent
    className="vertical-flex"
    css={css`
      &:last-child {
        padding: 40px;
      }

      gap: 40px;
    `}
    {...props}
  />
);

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => (
  <form
    className="vertical-flex"
    css={css`
      gap: 24px;
    `}
    {...props}
  />
);

export const AuthInputElement = (
  props: OutlinedInputProps & { name: string; label: string }
) => {
  const id = `${props.name}`;
  return (
    <Stack>
      <InputLabel
        required={props.required}
        htmlFor={id}
        css={css`
          font-size: 0.875em;
        `}
      >
        {props.label}
      </InputLabel>
      <FunnyInput {...props} id={id}></FunnyInput>
    </Stack>
  );
};

export const AuthButton = (props: ButtonProps) => (
  <Button
    variant="contained"
    size="large"
    disableElevation
    css={css`
      margin-top: 20px;
    `}
    {...props}
  ></Button>
);

export default function AuthWrapper(props: {
  meta: { title: string; link: { description: string; href: string } };
  children: ReactNode;
}) {
  return (
    <ViewExpandBox>
      <Card
        css={css`
          flex: 1;
          max-width: 475px;
          box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
        `}
      >
        <StackCardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography fontWeight={500} fontSize={24}>
              {props.meta.title}
            </Typography>
            <Link
              underline="none"
              href={props.meta.link.href}
              css={css`
                font-size: 0.875em;
              `}
            >
              {props.meta.link.description}
            </Link>
          </Stack>
          <Form>{props.children}</Form>
        </StackCardContent>
      </Card>
    </ViewExpandBox>
  );
}
