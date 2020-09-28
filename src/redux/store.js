// import messagesReducer from "./messages-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//   _state: {
//     messages: {
//       dialogsUsers: [
//         { name: 'Ilya', id: '1' },
//         { name: 'Vlad', id: '2' },
//         { name: 'Jenya', id: '3' },
//         { name: 'Elya', id: '4' },
//       ],
//       dialogs: [
//         {id: '1', message: 'Hi'},
//         {id: '2', message: 'Hello'},
//         {id: '3', message: 'Yo'},
//         {id: '4', message: 'Grokay'},
//         {id: '5', message: 'Hi'},
//       ],
//       dialogsMessage: 'Your message',
//     },
//     profilePage: {
//       posts: [
//         { id: 1, message: 'Hi, how are you?' },
//         { id: 2, message: 'Hi' },
//         { id: 3, message: 'how are you?' },
//         { id: 4, message: 'loh' },
//       ],
//       newPostText: 'Что произошло этим вечером?',
//     },

//   },

//   get state() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscribe = observer;
//   },

//   _callSubscribe() {
//   },

//   dispatch(action) {
//     this._state.messages = messagesReducer(this._state.messages, action);
//     this._state.profilePage = profileReducer(this._state.profilePage, action);

//     this._callSubscribe(this._state);
//   }
// }

// export default store;