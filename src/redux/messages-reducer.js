const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE'

const initialState = {
    dialogsUsers: [
      { name: 'Ilya', id: '1' },
      { name: 'Vlad', id: '2' },
      { name: 'Jenya', id: '3' },
      { name: 'Elya', id: '4' },
    ],
    dialogs: [
      {id: '1', message: 'Hi'},
      {id: '2', message: 'Hello'},
      {id: '3', message: 'Yo'},
      {id: '4', message: 'Grokay'},
      {id: '5', message: 'Hi'},
    ],
    dialogsMessage: 'Your message',
};

const messagesReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: '',
      message: state.dialogsMessage,
    }
    state.dialogs.push(newMessage);
    state.dialogsMessage = '';
    return state;
  } else if (action.type === CHANGE_MESSAGE_VALUE) {
    state.dialogsMessage = action.newText;
    return state;
  }

  return state;
}

export let sendMessageAction = () => ({
  type: SEND_MESSAGE
})
export let changeMessageAction = (text) => ({
  type: CHANGE_MESSAGE_VALUE,
  newText: text
})

export default messagesReducer;