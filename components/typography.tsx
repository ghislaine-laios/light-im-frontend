import { styled, Typography, TypographyProps } from "@mui/material";

export const Hint = styled((props) => (
  <Typography color={"text.secondary"} {...props}></Typography>
))<TypographyProps>`
  font-size: 14px;
`;
