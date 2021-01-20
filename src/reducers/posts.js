import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes"

const Output = (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter(post => post._id !== action.payload)
        case UPDATE:
            return posts.map((post) => post._id !== action.payload._id ? post : action.payload)
        case CREATE:
            return [...posts, action.payload];
        case FETCH_ALL:
            return action.payload;
        default:
            return posts;
    }
}

export default Output;