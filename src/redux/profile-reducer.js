const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_LAGUAGE = 'UPDATE-LAGUAGE';

const initialState = {
  posts: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'Hi' },
      { id: 3, message: 'how are you?' },
      { id: 4, message: 'loh' },
    ],
  newPostText: 'Что произошло этим вечером?',
  language: 'en',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let textBody = state.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 4, message: textBody}],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case UPDATE_LAGUAGE: {
      return {
        ...state,
        language: action.language,
      }
    }
    default: {
      return state;
    }
  }
}

export const addPostAction = () => ({
  type: ADD_POST
});
export const updatePostAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const catchLanguage = (language) => ({
  type: UPDATE_LAGUAGE,
  language: language
})

export default profileReducer;