import { Message, Person } from "./types";
import { Stack, Typography } from "@mui/material";
import EnhancedAvatar from "./EnhancedAvatar";

export interface MessageBlockProps {
  sender: Person;
  /**
   * oldest message first.
   */
  messages: Message[];
  now: Date;
}

export default function MessageBlock({
  sender,
  messages,
  now,
}: MessageBlockProps) {
  const date = messages[0].sendTime;
  const days = now.getDay() - date.getDay();
  let time: string;
  switch (days) {
    case 0:
      time = date.toLocaleTimeString();
      break;
    case 1:
      time = `Yesterday at ${date.toLocaleTimeString()}`;
      break;
    default:
      time = date.toLocaleDateString();
  }
  return (
    <Stack direction="row" spacing={2}>
      <EnhancedAvatar alt={sender.name} src={sender.avatar}></EnhancedAvatar>
      <Stack spacing={1}>
        <Stack direction="row" spacing={3} alignItems="flex-end">
          <Typography lineHeight={1} fontWeight={500}>
            {sender.name}
          </Typography>
          <Typography lineHeight={1} fontSize={12} color="grey">
            {time}
          </Typography>
        </Stack>
        <Stack direction="column-reverse">
          {messages.map((message) => (
            <Typography key={message.id}>
              {message.content}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
