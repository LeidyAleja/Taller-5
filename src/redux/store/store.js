import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/posts/reducers"
import usersReducer from "../slice/users/reducers"

export const store = configureStore({
    reducer: {
        post: postsReducer,
        users: usersReducer, 
    }
})

export default store;