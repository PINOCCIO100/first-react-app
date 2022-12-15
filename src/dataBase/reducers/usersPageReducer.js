
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

// let key = 55;
// let initialState = {
//   users: [
//     {
//       id: 1,
//       name: 'Dmitry K.',
//       photo: `https://picsum.photos/seed/${key++}/300/300`,
//       followed: true,
//       birthDate: '2 january',
//       city: 'Minsk',
//       education: 'BSU\'11',
//       webSite: 'https://it-kamasutra.com',
//       status: `Hello world! My name is ${key++}! How are you?`
//     },
//     {
//       id: 7,
//       name: 'Petya P.',
//       photo: `https://picsum.photos/seed/${key++}/300/300`,
//       followed: false,
//       birthDate: '2 january',
//       city: 'Moscow',
//       education: 'BSU\'11',
//       webSite: 'https://it-kamasutra.com',
//       status: `Hello world! My name is ${key++}! How are you?`
//     },
//     {
//       id: 8,
//       name: 'Vasya V.',
//       photo: `https://picsum.photos/seed/${key++}/300/300`,
//       followed: false,
//       birthDate: '2 january',
//       city: 'Kiev',
//       education: 'BSU\'11',
//       webSite: 'https://it-kamasutra.com',
//       status: `Hello world! My name is ${key++}! How are you?`
//     },
//     {
//       id: 9,
//       name: 'Sergei S.',
//       photo: `https://picsum.photos/seed/${key++}/300/300`,
//       followed: false,
//       birthDate: '2 january',
//       city: 'Grozniy',
//       education: 'BSU\'11',
//       webSite: 'https://it-kamasutra.com',
//       status: `Hello world! My name is ${key++}! How are you?`
//     },
//   ]
// };

let initialState = {
  users: []
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: true }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: false }),
      }
    }
    case SET_USERS: {
      if (action.payload.init) {
        return {
          ...state,
          users: [...action.payload.users],
        }
      }
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
      }
    }
    default:
      return state;
  }
}
export default usersPageReducer;

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    payload: {
      userID: userID,
    },
  }
}
export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    payload: {
      userID: userID,
    },

  }
}
export const setUsersAC = (users, init = false) => {
  return {
    type: SET_USERS,
    payload: {
      init: init,
      users: users,
    }
  }
}
