const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    messages: {
      dialogsUsers: [
        { name: 'Ilya', id: '1' },
        { name: 'Vlad', id: '2' },
        { name: 'Jenya', id: '3' },
        { name: 'Elya', id: '4' },
      ],
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

export default store;