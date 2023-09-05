import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  StyledBox,
  Text,
  Input,
  JoinButton,
  HeadingBox,
  DetailsBox,
  Heading,
} from "./UserEnrollStyle";

var socket;
const UserEnroll = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    socket = io("http://localhost:5000");
    socket.emit("connection");
  }, []);
  
  

  return (
    <>
      <Container>
        <HeadingBox>
          <Heading>Welcome to GroupChat</Heading>
        </HeadingBox>
        <DetailsBox>
          <StyledBox>
            <Text>Talk Together</Text>
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <JoinButton
              variant="contained"
              onClick={() => {
                handleJoin(name);
              }}
            >
              Join Now
            </JoinButton>
          </StyledBox>
        </DetailsBox>
      </Container>
    </>
  );
};

export default UserEnroll;
