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
  borderRadius: "5px",
  backgroundColor: "white",
  boxSizing: "border-box",
  padding: "8px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const ChatArea = styled(Box)(({ theme }) => ({
  height: "75%",
  width: "100%",
  border: "1px solid #D7DBDD",
  backgroundColor: "#F2F3F4",
  borderRadius: "5px",
  margin: "5px auto",
  overflow: "scroll",
  overflowX: "hidden",
}));
export const ChatInputBox = styled(Box)(({ theme }) => ({
  height: "25%",
  width: "100%",
  backgroundColor: "#F2F3F4",
  border: "1px solid #D7DBDD",
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
  top: "25%",
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
export const JoinBox = styled(Box)(({ theme }) => ({
  width: "55%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "5px",
  backgroundColor: "white",
  boxSizing: "border-box",
  padding: "5px 10px",
  marginBottom: "5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const ExitBtn = styled(Button)(({ theme }) => ({
  fontSize: "12px",
  height: "25px",
  width: "12%",
  textTransform: "none",
}));
