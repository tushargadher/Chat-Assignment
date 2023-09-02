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
  EmojiKeyBoard,
} from "./style";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "strike"],
    ["link"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["code"],
  ],
};
const Home = () => {
  const [value, setValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  //add emoji in message
  const onEmojiClick = (emojiData) => {
    setValue(value + emojiData.emoji);
    setShowPicker(false);
  };

  const sendMessage = () => {
    console.log(`sending message ${value}`);
    setValue("");
  };

  return (
    <>
      <Container>
        <Text>React Chat App</Text>
        <ChatBox>
          <ChatArea></ChatArea>
          {showPicker && (
            <EmojiKeyBoard>
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </EmojiKeyBoard>
          )}
          <ChatInputBox>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
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
                <AlternateEmailIcon
                  sx={{ marginRight: "5px", cursor: "pointer" }}
                />
              </Box>
              <SendButton sx={hoverEfffect} onClick={sendMessage}>
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
