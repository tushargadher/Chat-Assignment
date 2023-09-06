import React from "react";
export const modules = {
  toolbar: [
    ["bold", "italic", "strike"],
    ["link"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["code", "image"],
  ],
};
export const AlertBox = (userName) => {
  let div = document.createElement("div");
  div.setAttribute("class", "alretbox");
  div.innerHTML = `${userName} Joined Chat`;

  return div;
};

export const MessageReceive = (name, msg) => {
  console.log(name);
  let div = document.createElement("div");
  div.setAttribute("class", "MessageBox");
  div.innerHTML = msg;
  return div;
};

export const isSender = (senderId) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  //if the both id is same means sender is loggeduser and if both is different then it means it is receiver
  return loggedUser._id == senderId;
};
