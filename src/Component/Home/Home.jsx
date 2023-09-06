import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  ExitBtn,
  EmojiKeyBoard,
  JoinBox,
} from "./style";
import { modules, isSender } from "../../Utills/Funtions";
import { Box, Typography, Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CircularProgress from "@mui/material/CircularProgress";
import { dataState } from "../../ContextAPI/DataProvider";
import io from "socket.io-client";
var socket;

const Home = () => {
  const { handleExit, server } = dataState();
  const [value, setValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [messages, setMessages] = useState([]);
  const [LoggedUser, setLoggedUser] = useState();

  // const [file, setFile] = useState();
  const myRef = useRef(null);

  useEffect(() => {
    socket = io(server);
    if (!JSON.parse(localStorage.getItem("user"))) {
      const user = prompt("Enter Name To Join Chat");
      localStorage.setItem("user", JSON.stringify(user));
      handleJoin(user);
    }
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
    getAllMessage();
  }, []);



  useEffect(() => {
    getAllMessage();
    //scroll to new messsage
    myRef.current.scroll(0, myRef.current.scrollHeight);
  }, [messages]);

  async function handleJoin(name) {
    console.log(name);
    // setLaoding(true);
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${server}/api/user/join`,
        { name },
        config
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setLoggedUser(JSON.parse(localStorage.getItem("user")));
        socket.emit("new-user-joined", name);
        socket.on("user-joined", (user) => {
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(`${user} Joind Chat`);
          synth.speak(utterance);
          toast.info(`${user} Joined Chat`);
        });
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  const onEmojiClick = (emojiData) => {
    setValue(value + emojiData.emoji);
    setShowPicker(false);
  };

  const sendMessage = async () => {
    const { name, _id } = LoggedUser;
    try {
      // const user = JSON.parse(localStorage.getItem("user"));
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      console.log(`sending message ${value}`);
      const res = await axios.post(
        `${server}/api/message/send`,
        { _id, name, value },
        config
      );
      socket.emit("send", value);
      // setFile();
      setMessages([...messages, value]);
      if (res) {
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
    setValue("");
  };

  const getAllMessage = async () => {
    // document.querySelector(".ql-image").style.display = "none";
    try {
      const { data } = await axios.get(`${server}/api/message/getAll`);
      setMessages(data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  
  return (
    <>
      <ToastContainer />
      <Container>
        <JoinBox>
          <Text>GroupChat</Text>
          <ExitBtn variant="contained" onClick={handleExit}>
            {LoggedUser ? "Leave" : "Join"}
            {console.log(LoggedUser)}
          </ExitBtn>
        </JoinBox>
        <ChatBox>
          {LoggedUser ? (
            <>
              <ChatArea ref={myRef}>
                {messages.length == 0 && (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress color="inherit" />
                  </Box>
                )}
                {/* {console.log(messages)} */}
                {messages &&
                  messages.map((msg) => (
                    <Box>
                      <Typography
                        sx={{
                          marginLeft: isSender(msg.senderId) ? "92%" : "1%",
                        }}
                      >
                        {msg.senderName}
                      </Typography>
                      <Box
                        key={msg._id}
                        sx={{
                          display: "inline-block",
                          borderRadius: "5px",
                          maxWidth: "40%",
                          margin: "3px",
                          padding: "5px",
                          backgroundColor: isSender(msg.senderId)
                            ? "#77ff73"
                            : "#85C1E9",
                          float: isSender(msg.senderId) ? "right" : "",
                        }}
                      >
                        <Typography
                          dangerouslySetInnerHTML={{ __html: msg.content }}
                        />
                      </Box>
                    </Box>
                  ))}
              </ChatArea>
              {showPicker && (
                <EmojiKeyBoard>
                  <EmojiPicker
                    onEmojiClick={onEmojiClick}
                    emojiStyle="google"
                    suggestedEmojisMode="recent"
                    previewConfig={{ showPreview: false }}
                    searchDisabled="true"
                    height="45vh"
                  />
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
                    {/* here we are clicking image button on react-quill richtext and hide image buttton from react-quill */}

                    <Tooltip title="Upload Document Maximum Size 70KB">
                      <AddCircleOutlineIcon
                        sx={{ marginRight: "5px", cursor: "pointer" }}
                        onClick={() => {
                          document.querySelector(".ql-image").click();
                        }}
                      />
                    </Tooltip>

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
            </>
          ) : (
            <>
              <ChatArea ref={myRef}>
                <Text>Please Join To Continue GroupChat</Text>
              </ChatArea>
            </>
          )}
        </ChatBox>
      </Container>
    </>
  );
};
export default Home;
