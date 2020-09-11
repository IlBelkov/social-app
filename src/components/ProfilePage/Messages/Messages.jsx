import React from "react";
import c from "./Messages.module.scss";
import MessagesItem from "./MessagesItem/MessagesItem";
import { changeMessageAction, sendMessageAction } from "../../../redux/state";

function Messages(props) {
  let messageText = props.messages.dialogs.map((message) => (
    <MessagesItem id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageAction());
  }

  let changeMessageValue = () => {
    let text = newMessageElement.current.value;
    props.dispatch(changeMessageAction(text));
  }

  return (
    <div className={c.messages}>
      {messageText}
      <textarea ref={newMessageElement} onChange={changeMessageValue} value={props.messages.dialogsMessage}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Messages;
