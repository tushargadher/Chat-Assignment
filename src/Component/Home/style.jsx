import { Box, Typography, styled, TextField, Button } from "@mui/material";
export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  backgroundColor: "#d2d4d2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
}));

export const ChatBox = styled(Box)(({ theme }) => ({
  height: "90%",
  width: "55%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "5px",
  backgroundColor: "white",
  boxSizing: "border-box",
  padding: "8px",
}));
export const ChatArea = styled(Box)(({ theme }) => ({
  height: "66%",
  width: "100%",
  border: "1px solid black",
  margin: "5px auto",
}));
export const ChatInputBox = styled(Box)(({ theme }) => ({
  height: "31%",
  width: "100%",
  border: "1px solid black",
  borderRadius: "8px",
  margin: "5px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  //   backgroundColor: "gray",
  fontSize: "14px",
  fontWeight: "bolder",
}));

export const VerticalLine = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  display: "inline-block",
  content: '""',
  height: "25px",
  width: "1px",
  marginRight: "5px",
  fontWeight: "normal",
}));

export const SendBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "gray",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const EmojiKeyBoard = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  right: "38%",
}));
export const SendButton = styled(Button)(({ theme }) => ({
  backgroundColor: "green",
  color: "white",
  height: "24px",
}));
export const hoverEfffect = {
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "green",
  },
};
