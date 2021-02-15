import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from '../constants/actionTypes';

const posts = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter(post => post._id !== action.payload);
    case LIKE:
      return posts.map(post => (post._id === action.payload._id ? action.payload : post));
    case UPDATE:
      return posts.map(post => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    default:
      return posts;
  }
};

export default posts;
