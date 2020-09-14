import React from "react";
import Messages from "./Messages";
import {
  changeMessageAction,
  sendMessageAction,
} from "../../../redux/messages-reducer";

function MessagesContainer(props) {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageAction());
  };

  let changeMessageValue = (text) => {
    props.store.dispatch(changeMessageAction(text));
  };

  return (
    <Messages
      sendMessage={sendMessage}
      changeMessageValue={changeMessageValue}
      dialogsMessage={state.messages.dialogsMessage}
      dialogs={state.messages.dialogs}
    />
  );
}

export default MessagesContainer;
