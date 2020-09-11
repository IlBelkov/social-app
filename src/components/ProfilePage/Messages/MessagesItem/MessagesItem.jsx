import React from "react";
import c from "./MessagesItem.module.scss";

function MessagesItem(props) {
  return (
  <div className={c.messagesItem}>
    {props.message}
  </div>
  );
}

export default MessagesItem;
