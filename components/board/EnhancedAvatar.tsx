/** @jsxImportSource @emotion/react */
import { Avatar, AvatarProps, css } from "@mui/material";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export default function EnhancedAvatar(props: { alt: string } & AvatarProps) {
  return (
    <Avatar
      css={css`
        width: 44px;
        height: 44px;
        background-color: ${stringToColor(props.alt ?? " ")};
      `}
      {...props}
    >
      {props.alt
        ?.split(" ")
        .map((v) => v[0])
        .slice(0, 2)}
    </Avatar>
  );
}
