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

export const isSender = (user) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  // if both are same the it return 0
  return loggedUser.localeCompare(user);
};
