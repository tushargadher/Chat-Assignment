import React, { useState } from "react";
import { VerticalLine } from "../Home/style";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { OptionWrap } from "./Style";
import { dataState } from "../../ContextAPI/DataProvider";
const FormatButtons = () => {
  const { handleBold } = dataState();
  return (
    <>
      <OptionWrap>
        <FormatBoldIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <FormatItalicIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <StrikethroughSIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <VerticalLine />
        <box-icon
          name="link"
          style={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        ></box-icon>
        <VerticalLine />
        <FormatListNumberedIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <FormatListBulletedIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <VerticalLine />
        <FormatQuoteIcon
          sx={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        />
        <VerticalLine />
        <box-icon
          name="code-alt"
          style={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        ></box-icon>
        <box-icon
          name="code-block"
          style={{ marginRight: "7px", cursor: "pointer" }}
          onClick={handleBold}
        ></box-icon>
      </OptionWrap>
    </>
  );
};
export default FormatButtons;
