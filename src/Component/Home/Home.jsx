import React, { useState } from "react";
import { Box } from "@mui/material";
import FormatButtons from "../FormatOption/FormatButtons";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
//import all styled componet with css
import {
  Container,
  Text,
  ChatBox,
  ChatArea,
  ChatInputBox,
  StyledInput,
  VerticalLine,
  SendButton,
  hoverEfffect,
  SendBox,
} from "./style";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { dataState } from "../../ContextAPI/DataProvider";
const Home = () => {
  const [msg, setMsg] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (emojiData) => {
    setMsg(msg + emojiData.emoji);
    setShowPicker(false);
  };
  const onChange = (e) => {
    setMsg(e.target.value);
  };
  return (
    <>
      <Container>
        <Text>React Chat App</Text>
        <ChatBox>
          <ChatArea></ChatArea>
          <ChatInputBox>
            <FormatButtons />
            <StyledInput
              hiddenLabel
              placeholder="Chats comes here..."
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& fieldset": { border: "none" },
                "& input::placeholder": {
                  fontSize: "14px",
                },
              }}
              value={msg}
              onChange={onChange}
            />
            <SendBox>
              <Box>
                <AddCircleOutlineIcon
                  sx={{ marginRight: "5px", cursor: "pointer" }}
                />
                <VerticalLine />
                <SentimentSatisfiedAltIcon
                  sx={{ marginRight: "5px", cursor: "pointer" }}
                  onClick={() => setShowPicker(!showPicker)}
                />
                {showPicker && (
                  <EmojiPicker
                    onEmojiClick={onEmojiClick}
                    style={{ display: "n" }}
                  />
                )}
                <AlternateEmailIcon
                  sx={{ marginRight: "5px", cursor: "pointer" }}
                />
              </Box>
              <SendButton sx={hoverEfffect}>
                <SendIcon sx={{ fontSize: "14px" }} />
              </SendButton>
            </SendBox>
          </ChatInputBox>
        </ChatBox>
      </Container>
    </>
  );
};
export default Home;
