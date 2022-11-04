/** @jsxImportSource @emotion/react */
import { css, InputBase, Stack, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Message, Person } from "./types";
import MessageBlock, { MessageBlockProps } from "./MessageBlock";

const demoUsers = [
  { name: "Ghislaine Laios", avatar: "", id: 4 },
  { name: "John Doe", avatar: "", id: 1 },
] as Person[];
const nowTimestamp = parseInt(String(Date.now() / 10000)) * 10000;

/**
 * Newest first.
 */
const messages = [
  {
    id: 4,
    content: "This is Ghislaine Laios.",
    sendTime: new Date(nowTimestamp - 50 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 3,
    content: "Hello!",
    sendTime: new Date(nowTimestamp - 60 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 2,
    content: "This is John!",
    sendTime: new Date(nowTimestamp - 180 * 1000),
    sender: demoUsers[1],
  },
  {
    id: 1,
    content: "Hello!",
    sendTime: new Date(nowTimestamp - 1000 * 1000),
    sender: demoUsers[1],
  },
  {
    id: 9,
    content: "越过长城，走向世界！",
    sendTime: new Date(nowTimestamp - 24 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 10,
    content: "Hello world!",
    sendTime: new Date(nowTimestamp - 50 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 6,
    content:
      "Presently my soul grew stronger; hesitating then no longer,\n" +
      "“Sir,” said I, “or Madam, truly your forgiveness I implore;\n" +
      "    But the fact is I was napping, and so gently you came rapping,\n" +
      "    And so faintly you came tapping, tapping at my chamber door,\n" +
      "That I scarce was sure I heard you”—here I opened wide the door;—\n" +
      "            Darkness there and nothing more.",
    sendTime: new Date(nowTimestamp - 52 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 7,
    content:
      " And the silken, sad, uncertain rustling of each purple curtain\n" +
      "Thrilled me—filled me with fantastic terrors never felt before;\n" +
      "    So that now, to still the beating of my heart, I stood repeating\n" +
      "    “’Tis some visitor entreating entrance at my chamber door—\n" +
      "Some late visitor entreating entrance at my chamber door;—\n" +
      "            This it is and nothing more.”",
    sendTime: new Date(nowTimestamp - 53 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 11,
    content:
      "Ah, distinctly I remember it was in the bleak December;\n\n" +
      "And each separate dying ember wrought its ghost upon the floor.\n\n" +
      "    Eagerly I wished the morrow;—vainly I had sought to borrow\n\n" +
      "    From my books surcease of sorrow—sorrow for the lost Lenore—\n\n" +
      "For the rare and radiant maiden whom the angels name Lenore—\n\n" +
      "            Nameless here for evermore.",
    sendTime: new Date(nowTimestamp - 54 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 12,
    content:
      "While I nodded, nearly napping, suddenly there came a tapping,\n" +
      "As of some one gently rapping, rapping at my chamber door.\n" +
      "“’Tis some visitor,” I muttered, “tapping at my chamber door—\n" +
      "            Only this and nothing more.”",
    sendTime: new Date(nowTimestamp - 55 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 13,
    content:
      "Once upon a midnight dreary, while I pondered, weak and weary,\n" +
      "Over many a quaint and curious volume of forgotten lore—",
    sendTime: new Date(nowTimestamp - 56 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 16,
    content:
      "Presently my soul grew stronger; hesitating then no longer,\n" +
      "“Sir,” said I, “or Madam, truly your forgiveness I implore;\n" +
      "    But the fact is I was napping, and so gently you came rapping,\n" +
      "    And so faintly you came tapping, tapping at my chamber door,\n" +
      "That I scarce was sure I heard you”—here I opened wide the door;—\n" +
      "            Darkness there and nothing more.",
    sendTime: new Date(nowTimestamp - 57 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 27,
    content:
      " And the silken, sad, uncertain rustling of each purple curtain\n" +
      "Thrilled me—filled me with fantastic terrors never felt before;\n" +
      "    So that now, to still the beating of my heart, I stood repeating\n" +
      "    “’Tis some visitor entreating entrance at my chamber door—\n" +
      "Some late visitor entreating entrance at my chamber door;—\n" +
      "            This it is and nothing more.”",
    sendTime: new Date(nowTimestamp - 58 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 21,
    content:
      "Ah, distinctly I remember it was in the bleak December;\n\n" +
      "And each separate dying ember wrought its ghost upon the floor.\n\n" +
      "    Eagerly I wished the morrow;—vainly I had sought to borrow\n\n" +
      "    From my books surcease of sorrow—sorrow for the lost Lenore—\n\n" +
      "For the rare and radiant maiden whom the angels name Lenore—\n\n" +
      "            Nameless here for evermore.",
    sendTime: new Date(nowTimestamp - 59 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 22,
    content:
      "While I nodded, nearly napping, suddenly there came a tapping,\n" +
      "As of some one gently rapping, rapping at my chamber door.\n" +
      "“’Tis some visitor,” I muttered, “tapping at my chamber door—\n" +
      "            Only this and nothing more.”",
    sendTime: new Date(nowTimestamp - 80 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 23,
    content:
      "Once upon a midnight dreary, while I pondered, weak and weary,\n" +
      "Over many a quaint and curious volume of forgotten lore—",
    sendTime: new Date(nowTimestamp - 81 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 26,
    content:
      "Presently my soul grew stronger; hesitating then no longer,\n" +
      "“Sir,” said I, “or Madam, truly your forgiveness I implore;\n" +
      "    But the fact is I was napping, and so gently you came rapping,\n" +
      "    And so faintly you came tapping, tapping at my chamber door,\n" +
      "That I scarce was sure I heard you”—here I opened wide the door;—\n" +
      "            Darkness there and nothing more.",
    sendTime: new Date(nowTimestamp - 82 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 37,
    content:
      " And the silken, sad, uncertain rustling of each purple curtain\n" +
      "Thrilled me—filled me with fantastic terrors never felt before;\n" +
      "    So that now, to still the beating of my heart, I stood repeating\n" +
      "    “’Tis some visitor entreating entrance at my chamber door—\n" +
      "Some late visitor entreating entrance at my chamber door;—\n" +
      "            This it is and nothing more.”",
    sendTime: new Date(nowTimestamp - 83 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 31,
    content:
      "Ah, distinctly I remember it was in the bleak December;\n\n" +
      "And each separate dying ember wrought its ghost upon the floor.\n\n" +
      "    Eagerly I wished the morrow;—vainly I had sought to borrow\n\n" +
      "    From my books surcease of sorrow—sorrow for the lost Lenore—\n\n" +
      "For the rare and radiant maiden whom the angels name Lenore—\n\n" +
      "            Nameless here for evermore.",
    sendTime: new Date(nowTimestamp - 84 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 32,
    content:
      "While I nodded, nearly napping, suddenly there came a tapping,\n" +
      "As of some one gently rapping, rapping at my chamber door.\n" +
      "“’Tis some visitor,” I muttered, “tapping at my chamber door—\n" +
      "            Only this and nothing more.”",
    sendTime: new Date(nowTimestamp - 85 * 3600 * 1000),
    sender: demoUsers[0],
  },
  {
    id: 33,
    content:
      "Once upon a midnight dreary, while I pondered, weak and weary,\n" +
      "Over many a quaint and curious volume of forgotten lore—",
    sendTime: new Date(nowTimestamp - 86 * 3600 * 1000),
    sender: demoUsers[0],
  },
] as Message[];

/**
 *
 * @return the messages blocks. Newest block first.
 */

function makeBlocks(
  _messages: typeof messages
): Pick<MessageBlockProps, "sender" | "messages">[] {
  const result: ReturnType<typeof makeBlocks> = [];
  const newestMessage = _messages[0];
  result.push({ sender: newestMessage.sender, messages: [] });
  let lastMessage = newestMessage;
  for (const message of _messages) {
    if (
      message.sender.id === lastMessage.sender.id &&
      lastMessage.sendTime.getTime() - message.sendTime.getTime() < 180 * 1000
    ) {
      result[result.length - 1].messages.push(message);
    } else {
      result.push({ sender: message.sender, messages: [message] });
    }
    lastMessage = message;
  }
  return result;
}

export default function IMBox() {
  const blocks = useMemo(() => makeBlocks(messages), []);
  const now = new Date();
  const theme = useTheme();
  return (
    <Stack
      padding={5}
      flex={1}
      css={css`
        height: 100%;
        padding-top: 0;
        padding-right: 0;
      `}
    >
      <Stack
        direction="column-reverse"
        spacing={3}
        flex={1}
        minHeight={0}
        css={css`
          overflow-y: scroll;
          padding: 20px 80px 20px 0;
        `}
      >
        {blocks.map((block) => (
          <MessageBlock
            {...block}
            now={now}
            key={block.messages[0].id}
          ></MessageBlock>
        ))}
      </Stack>
      <Stack
        direction="row"
        css={css`
          background-color: ${theme.vars.palette.grey["50"]};
          padding: 8px 20px;
          border-radius: 8px;
          margin-right: 40px;
        `}
      >
        <InputBase
          css={css`
            flex: 1;
            height: 32px;
          `}
          placeholder="Type your message here"
        ></InputBase>
      </Stack>
    </Stack>
  );
}
