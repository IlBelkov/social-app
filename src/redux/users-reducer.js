
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
// const UNFOLLOW='UNFOLLOW';

const initialState = {
  users: [
    { name: 'Ilya', location: {city: 'Kiev', country: 'Ukraine'}, id: '1', followed: true },
    { name: 'Vlad', location: {city: 'Rostov', country: 'Russia'}, id: '2', followed: false },
    { name: 'Jenya', location: {city: 'Moskov', country: 'Russia'}, id: '3', followed: true },
    { name: 'Elya', location: {city: 'Rostov', country: 'Russia'}, id: '4', followed: false },
  ],
};

const usersRedusers = (state = initialState, action) => {
  if(action.type === FOLLOW) {
    let stateCopy =  { ...state};
    stateCopy.users = [...state.users];
    let id = stateCopy.users.findIndex(i => i.id === action.id);
    if(stateCopy.users[id].followed === true) {
      stateCopy.users[id] = {...stateCopy.users[id], followed: false};
    } else {
      stateCopy.users[id] = {...stateCopy.users[id], followed: true};
    }
    return stateCopy;
  }  else if (action.type === SET_USERS){
    return {
      ...state, users: action.users
    }
  }

  return state;


  // switch (action.type) {
  //   case FOLLOW: {
  //     return {
  //       ...state,
  //       users: state.users.map(u => {
  //         if(u.id === action.id) {
  //           return {...u, followed: false}
  //         }
  //         return u;
  //       })
  //     }
  //   }

  //   case UNFOLLOW: {
  //     return {
  //       ...state,
  //       users: state.users.map(u => {
  //         if(u.id === action.id) {
  //           return {...u, followed: true}
  //         }
  //         return u;
  //       })
  //     }
  //   }
  //   default:
  //     return state;
  // }
}
export let follow = (id) => ({
    type: FOLLOW,
    id
});
export let setUsers = (users) => ({
    type: SET_USERS,
    users
});
// export let unfollow = (id) => ({
//     type: UNFOLLOW,
//     id: id
// })


export default usersRedusers;


