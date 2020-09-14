import React from "react";
import c from "./Messages.module.scss";
import MessagesItem from "./MessagesItem/MessagesItem";

function Messages(props) {
  let messageText = props.dialogs.map((message) => (
    <MessagesItem id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  }

  let changeMessageValue = () => {
    let text = newMessageElement.current.value;
    props.changeMessageValue(text);
  }

  return (
    <div className={c.messages}>
      {messageText}
      <textarea ref={newMessageElement} onChange={changeMessageValue} value={props.dialogsMessage}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Messages;
