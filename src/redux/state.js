const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE'

let store = {
  _state: {
    messages: {
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
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'how are you?' },
        { id: 4, message: 'loh' },
      ],
      newPostText: 'Что произошло этим вечером?',
    },

  },

  get state() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  _callSubscribe() {
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscribe(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: '',
        message: this._state.messages.dialogsMessage,
      }
      this._state.messages.dialogs.push(newMessage);
      this._state.messages.dialogsMessage = '';
      this._callSubscribe();
    } else if (action.type === CHANGE_MESSAGE_VALUE) {
      this._state.messages.dialogsMessage = action.newText;
      this._callSubscribe();
    }
  }
}

export let addPostAction = () => ({
  type: ADD_POST 
});
export let updatePostAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
});

export let sendMessageAction = () => ({
  type: SEND_MESSAGE
})
export let changeMessageAction = (text) => ({
  type: CHANGE_MESSAGE_VALUE,
  newText: text
})

export default store;