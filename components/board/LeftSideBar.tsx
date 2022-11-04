/** @jsxImportSource @emotion/react */
import {css, Stack, useTheme} from "@mui/material";
import EnhancedAvatar from "./EnhancedAvatar";

export default function LeftSideBar() {
  const theme = useTheme();
  return (
    <Stack
      css={css`
        background-color: ${theme.vars.palette.grey["100"]};
        padding: 40px 16px;
        justify-content: space-between;
      `}
    >
      <EnhancedAvatar alt={"Mike"}>MR</EnhancedAvatar>
    </Stack>
  );
}
