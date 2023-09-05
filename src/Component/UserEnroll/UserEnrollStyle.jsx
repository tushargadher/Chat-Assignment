import { Box, Button, styled, TextField, Typography } from "@mui/material";
export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#E9ECEF",
  height: "20%",
  width: "100%",
}));
export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
}));

export const DetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#32465A",
  height: "80%",
  width: "100%",
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#E9ECEF",
  borderRadius: "10px",
  height: "40%",
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
}));
export const Input = styled(TextField)(({ theme }) => ({
  width: "80%",
}));
export const JoinButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
}));
