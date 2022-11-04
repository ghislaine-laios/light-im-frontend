/** @jsxImportSource @emotion/react */
import {
  Avatar,
  AvatarProps,
  colors,
  css,
  Stack,
  Typography,
  TypographyProps,
  useTheme,
} from "@mui/material";
import EnhancedAvatar from "./EnhancedAvatar";
import { Person } from "./types";

const demoContacts = [
  { id: 1, name: "John Done", mostRecentMessage: "Hi!", avatar: "" },
  {
    id: 2,
    name: "Kent Dodds",
    mostRecentMessage: "",
    avatar: "",
  },
  {
    id: 3,
    name: "Jed",
    mostRecentMessage: "This is a demo message for development usage.",
    avatar: "",
  },
  { id: 4, name: "KanKan", mostRecentMessage: "Hi!", avatar: "" },
  {
    id: 5,
    name: "Ghislaine Laios",
    mostRecentMessage: "",
    avatar: "",
  },
] as (Person & { mostRecentMessage: string })[];

const BasedTypography = (props: TypographyProps) => (
  <Typography lineHeight={1} noWrap overflow="hidden" {...props}></Typography>
);

export default function ContactList() {
  const theme = useTheme();
  return (
    <Stack
      spacing={2}
      padding={5}
      css={css`
        background-color: ${theme.vars.palette.grey["50"]};
        min-height: 0;
        overflow-y: scroll;
      `}
    >
      <Stack
        spacing={4}
        css={css`
          width: 400px;
        `}
      >
        {demoContacts.map((item) => (
          <Stack direction="row" spacing={2} alignItems="stretch" key={item.id}>
            <EnhancedAvatar alt={item.name} src={item.avatar}></EnhancedAvatar>
            <Stack justifyContent="space-between" minWidth={0}>
              <BasedTypography fontWeight={500}>{item.name}</BasedTypography>
              <BasedTypography>{item.mostRecentMessage}</BasedTypography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
