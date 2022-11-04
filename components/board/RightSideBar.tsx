/** @jsxImportSource @emotion/react */
import {css, Paper, Stack, useTheme} from "@mui/material";

export default function RightSideBar() {
  const theme = useTheme();
  return (
    <Stack
      css={css`
        background-color: ${theme.vars.palette.grey[50]};
        padding: 8px;
      `}
    >
      <Paper elevation={0}></Paper>
    </Stack>
  );
}
