const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'Hi' },
      { id: 3, message: 'how are you?' },
      { id: 4, message: 'loh' },
    ],
  newPostText: 'Что произошло этим вечером?',
};

const profileReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts = [...stateCopy.posts, newPost];
      stateCopy.newPostText = '';
      return stateCopy;

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: {
      return state;
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

export default profileReducer;