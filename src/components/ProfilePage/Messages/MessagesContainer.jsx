// import React from "react";
import Messages from "./Messages";
import {
  changeMessageAction,
  sendMessageAction,
} from "../../../redux/messages-reducer";
import { connect } from "react-redux";

let mapStoreToProps = (state) => {
  return {
    dialogsMessage: state.messages.dialogsMessage,
    dialogs: state.messages.dialogs,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAction());
    },
    changeMessageValue: (text) => {
      dispatch(changeMessageAction(text));
    },
  }


}

let MessagesContainer = connect(mapStoreToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
